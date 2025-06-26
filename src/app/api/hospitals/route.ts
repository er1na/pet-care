import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
      console.log("[GET /api/hospitals] リクエスト受信");
  
      const hospitals = await prisma.hospital.findMany();
  
      console.log(`[GET /api/hospitals] 取得件数: ${hospitals.length}`);
      return NextResponse.json(hospitals);
    } catch (error) {
      console.error("[GET /api/hospitals] エラー:", error);
      return NextResponse.json({ message: "サーバーエラー" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
      console.log("[POST /api/hospitals] リクエスト受信");
  
      const data = await req.json();
      console.log("[POST /api/hospitals] リクエストボディ:", data);
  
      const hospital = await prisma.hospital.create({ data });
  
      console.log("[POST /api/hospitals] 登録成功:", hospital);
      return NextResponse.json(hospital, { status: 201 });
    } catch (error) {
      console.error("[POST /api/hospitals] エラー:", error);
      return NextResponse.json({ message: "サーバーエラー" }, { status: 500 });
    }
}