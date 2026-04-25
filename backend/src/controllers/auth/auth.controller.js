import { sendEmail } from "../../lib/email";
import { checkPassword, hashPassword } from "../../lib/hash";
import { createAccessToken, createRefreshToken } from "../../lib/token";
import { User } from "../../models/user.model";
import { loginSchema , registerSchema} from "../auth.Schema";
import jwt from 'jsonwebtoken'




function getAppUrl(){
    return process.env.APP_URL || `http://localhost:${process.env.PORT || 5000}`;
}


export async function registerHandler(req, res){
    try {
        const result = registerSchema.safeParse(req.body);

        if(!result.success){
            return res.status(400).json({
                message: 'Invalid data', errors:result.error.flatten()
            })
        }
        
        const {email, password, name} =result.data;
        
        const normalizedEmail = email.toLowerCase().trim();

        const existingUser = await User.findOne({email: normalizedEmail})

        if(existingUser){
            return res.status(409).json({
                message: 'Email already in user. Use different email'
            })
        }

        const passwordHash = await hashPassword(password);

        const newlyCreatedUser = await User.create({
            email: normalizedEmail,
            passwordHash,
            role: 'user',
            isEmailVerified: false,
            // twoFactorEnabled: false
            name,
        })

        const verifyToken = jwt.sign(
            {
                sub: newlyCreatedUser.id,
            },
            process.env.JWT_REFRESH_SECRET,
            {
                expiresIn: '1d'
            }
        )


        const verifyUrl = `${getAppUrl()}/auth/verify-email?token=${verifyToken}`;

        await sendEmail(
            newlyCreatedUser.email,
            "Verify your email",
             `<p>Please verify your email by clicking the link below:</p>
             <p><a href="${verifyUrl}">${verifyUrl}</a></p> `
        )

        return res.status(201).json({
            message: 'User registered',
            user: {
                id: newlyCreatedUser.id,
                email: newlyCreatedUser.email,
                role: newlyCreatedUser.role,
                isEmailVerified: newlyCreatedUser.isEmailVerified,
            }
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Internal server error',
            error: (error).message
        })
    }
}

export async function verifyEmailHandler(req,res){
    const token = req.query.token;

    if(!token){
        return res.status(404).json({message: 'Verification is missing'})
    }

    try {

        const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET)

        const user = await User.findById(payload.sub);

        if(!user){
            return res.status(404).json({message: 'User not found'})
        }

        if(user.isEmailVerified){
            return res.status(400).json({message: 'Email is already verified'})
        }

        user.isEmailVerified = true;
        await user.save();

        return res.status(200).json({message: 'Email is now verified successfully! You can login now'})
        
    } catch (error) {
         console.log(error)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}