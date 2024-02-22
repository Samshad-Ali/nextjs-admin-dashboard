import connectDB from "@/database";
import { Visitor } from "@/models/Visitor";
import { NextResponse } from "next/server";

export async function DELETE(req, params) {
  try {
    await connectDB();
    const { visitorId } = params.params;
    const isVisior = await Visitor.findById(visitorId);
    if (isVisior) {
      await isVisior.deleteOne();
      return NextResponse.json({
        success: true,
        message: "Visitor deleted",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Visitor not found !",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! try again",
    });
  }
}
