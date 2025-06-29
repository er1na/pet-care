import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        console.log("[GET /api/medicines] リクエスト受信");

        const medicines = await prisma.medicine.findMany();

        console.log(`[GET /api/medicines] 取得件数: ${medicines.length}`);
        return NextResponse.json(medicines);
    } catch (error) {
        console.error("[GET /api/medicines] エラー:", error);
        return NextResponse.json({ message: "サーバーエラー" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
      console.log("[POST /api/medicines] リクエスト受信");
  
      const data = await req.json();
      console.log("[POST /api/medicines] リクエストボディ:", data);
  
      const medicine = await prisma.medicine.create({ data });
  
      console.log("[POST /api/medicines] 登録成功:", medicine);
      return NextResponse.json(medicine, { status: 201 });
    } catch (error) {
      console.error("[POST /api/medicines] エラー:", error);
      return NextResponse.json({ message: "サーバーエラー" }, { status: 500 });
    }
}