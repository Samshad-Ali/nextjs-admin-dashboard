import connectDB from "@/database";
import { Product } from "@/models/Product";
import {NextResponse} from 'next/server';
export async function GET(req){
    try {
        connectDB();
        const allProducts = (await Product.find({})).reverse();
        if(allProducts){
            return NextResponse.json({
                success:true,
                data:allProducts
            })
        }else{
            throw new Error;
        }
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:'Something went wrong ! try again'
        })
    }
}