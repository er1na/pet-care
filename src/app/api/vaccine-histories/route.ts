import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
      console.log("[GET /api/vaccine-histories] リクエスト受信");
  
      const vaccineHistory = await prisma.vaccineHistory.findMany();
  
      console.log(`[GET /api/vaccine-histories] 取得件数: ${vaccineHistory.length}`);
      return NextResponse.json(vaccineHistory);
    } catch (error) {
      console.error("[GET /api/vaccine-histories] エラー:", error);
      return NextResponse.json({ message: "サーバーエラー" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
      console.log("[POST /api/vaccine-histories] リクエスト受信");
  
      const data = await req.json();
      console.log("[POST /api/vaccine-histories] リクエストボディ:", data);
  
      const vaccineHistory = await prisma.vaccineHistory.create({ data });
  
      console.log("[POST /api/vaccine-histories] 登録成功:", vaccineHistory);
      return NextResponse.json(vaccineHistory, { status: 201 });
    } catch (error) {
      console.error("[POST /api/vaccine-histories] エラー:", error);
      return NextResponse.json({ message: "サーバーエラー" }, { status: 500 });
    }
}