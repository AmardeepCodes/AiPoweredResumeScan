import dotenv from 'dotenv'
dotenv.config();

import { connectDB } from "./src/config/db.js";
import http from 'http';
import app from './src/app.js';


async function startServer(){
    await connectDB();

    const server = http.createServer(app);

    server.listen(process.env.PORT, ()=> {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
}
startServer().catch((error)=> {
    console.error('Error starting server:', error);
    process.exit(1);
});