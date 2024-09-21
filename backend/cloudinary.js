import {v2 as cloudinary} from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config()

const connectCloudinary=async ()=>{
    try {
        await cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET_KEY
        })
        console.log('Cloudinary Connected')
    } catch (error) {
        console.log(error)
    }
 
}
export default connectCloudinary;