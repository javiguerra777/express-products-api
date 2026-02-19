import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import { v2 as cloudinary } from 'cloudinary';
import { products } from '../data/products.js';
import Product from '../models/product.js';

const MONGODB_URI = process.env.MONGODB_URI || '';
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || '';
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || '';
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || '';

if (!MONGODB_URI || !CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    console.error('One or more required environment variables are not defined. Please check your .env file.');
    process.exit(1);
}
cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true,
});

const main = async () => {
    try {        
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB successfully');
        const cloudinaryResponse = await cloudinary.api.ping();
        console.log('Cloudinary API ping successful', cloudinaryResponse);
        console.log('Uploading images to cloudinary...');
        const uploadedProducts = await Promise.all(
        products.map(async (product) => {
            const uploadedImage = await cloudinary.uploader.upload(product.imagePath, {
                folder: 'products-api',
            });
            return {
            name: product.name,
            description: product.description,
            price: product.price,
            imageUrl: uploadedImage.secure_url
            };
        })
        );
        console.log('Images uploaded successfully, now creating products in the database...');
        for (const product of uploadedProducts) {
            const createdProduct = await Product.create(product);
            console.log(`Created product: ${createdProduct.name} with ID: ${createdProduct._id}`);
        }
        console.log('Products created successfully in the database');
        console.log('Create Products script completed, products should be created in the database if everything is set up correctly.');
        process.exit(0);
    } catch (error) {
        console.error('Error in main function:', error);
        process.exit(1);
    }
}
main();