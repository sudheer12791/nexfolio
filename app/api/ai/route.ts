import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    result: "AI is temporarily disabled.",
  });
}