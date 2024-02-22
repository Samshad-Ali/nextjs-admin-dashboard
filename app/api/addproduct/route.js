import connectDB from "@/database";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    await connectDB();
    const { extractData } = await req.json();
    const isProductCreated = await Product.create(extractData);
    if (isProductCreated) {
      return NextResponse.json({
        success: true,
        message: "Product added successfully",
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! try again",
    });
  }
}
