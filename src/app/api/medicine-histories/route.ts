import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
      console.log("[GET /api/medicine-histories] リクエスト受信");
  
      const medicineHistory = await prisma.medicineHistory.findMany();
  
      console.log(`[GET /api/medicine-histories] 取得件数: ${medicineHistory.length}`);
      return NextResponse.json(medicineHistory);
    } catch (error) {
      console.error("[GET /api/medicine-histories] エラー:", error);
      return NextResponse.json({ message: "サーバーエラー" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
      console.log("[POST /api/medicine-histories] リクエスト受信");
  
      const data = await req.json();
      console.log("[POST /api/medicine-histories] リクエストボディ:", data);
  
      const medicineHistory = await prisma.medicineHistory.create({ data });
  
      console.log("[POST /api/medicine-histories] 登録成功:", medicineHistory);
      return NextResponse.json(medicineHistory, { status: 201 });
    } catch (error) {
      console.error("[POST /api/medicine-histories] エラー:", error);
      return NextResponse.json({ message: "サーバーエラー" }, { status: 500 });
    }
}