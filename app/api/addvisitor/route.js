import connectDB from "@/database";
import { Visitor } from "@/models/Visitor";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const { extractData } = await req.json();
    const isDone = await Visitor.create(extractData);
    if (isDone) {
      return NextResponse.json({
        success: true,
        message: "Visitor added successfully",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! try again",
    });
  }
}
