import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        console.log("[GET /api/vaccines] リクエスト受信");

        const vaccines = await prisma.vaccine.findMany();

        console.log(`[GET /api/vaccines] 取得件数: ${vaccines.length}`);
        return NextResponse.json(vaccines);
    } catch (error) {
        console.error("[GET /api/vaccines] エラー:", error);
        return NextResponse.json({ message: "サーバーエラー" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
      console.log("[POST /api/vaccines] リクエスト受信");
  
      const data = await req.json();
      console.log("[POST /api/vaccines] リクエストボディ:", data);
  
      const vaccine = await prisma.vaccine.create({ data });
  
      console.log("[POST /api/vaccines] 登録成功:", vaccine);
      return NextResponse.json(vaccine, { status: 201 });
    } catch (error) {
      console.error("[POST /api/vaccines] エラー:", error);
      return NextResponse.json({ message: "サーバーエラー" }, { status: 500 });
    }
}