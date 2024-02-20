import connectDB from '@/database'
import User from '@/models/User';
import {NextResponse} from 'next/server'
export async function POST(req){ 
    try {
        connectDB();
        const {name,email} = await req.json();
        if(!name || !email){
            throw new Error;
        }
        const newUser = await User.create({name,email});
        if(newUser){
           return NextResponse.json({
                success:true,
                message:'User registered successfully'
            })
        }        
        throw new Error;
    } catch (error) {
        console.log(error)
       return NextResponse.json({ success:false,
        message:'Something went wrong ! Please try again.'})
    }
}