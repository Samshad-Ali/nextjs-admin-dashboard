import connectDB from "@/database";
import { Visitor } from "@/models/Visitor";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();
    const allVisitors = (await Visitor.find({})).reverse();
    if (allVisitors) {
      return NextResponse.json({
        success: true,
        data: allVisitors,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! try again",
      error: error.message,
    });
  }
}
