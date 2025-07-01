import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
      console.log("[GET /api/medical-histories] リクエスト受信");
  
      const medicalHistories = await prisma.medicalHistory.findMany();
  
      console.log(`[GET /api/medical-histories] 取得件数: ${medicalHistories.length}`);
      return NextResponse.json(medicalHistories);
    } catch (error) {
      console.error("[GET /api/medical-histories] エラー:", error);
      return NextResponse.json({ message: "サーバーエラー" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
      console.log("[POST /api/medical-histories] リクエスト受信");
  
      const data = await req.json();
      console.log("[POST /api/medical-histories] リクエストボディ:", data);
  
      const medicalHistory = await prisma.medicalHistory.create({ data });
  
      console.log("[POST /api/medical-histories] 登録成功:", medicalHistory);
      return NextResponse.json(medicalHistory, { status: 201 });
    } catch (error) {
      console.error("[POST /api/medical-histories] エラー:", error);
      return NextResponse.json({ message: "サーバーエラー" }, { status: 500 });
    }
}