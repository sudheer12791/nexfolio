import { NextResponse } from "next/server";
import { generatePortfolio } from "@/lib/ai/generatePortfolio";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await generatePortfolio(body);

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "AI generation failed",
      },
      { status: 500 }
    );
  }
}