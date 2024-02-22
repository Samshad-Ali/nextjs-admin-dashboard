import connectDB from '@/database';
import { Product } from '@/models/Product';
import {NextResponse} from 'next/server';

export async function DELETE(req,params){
    try {
        connectDB();
        const {productId} = params.params;
        const isProduct = await Product.findById(productId);
        if(isProduct){
            await isProduct.deleteOne();
            return NextResponse.json({
                success:true,
                message:'Product deleted'
            })
        }else{
            return NextResponse.json({
                success:false,
                message:'Product not found !'
            })
        }
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:'Something went wrong ! try again'
        })
    }
}