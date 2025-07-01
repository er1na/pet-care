import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
      console.log("[GET /api/pets-diaries] リクエスト受信");
  
      const petsDiary = await prisma.petDiary.findMany();
  
      console.log(`[GET /api/pets-diaries] 取得件数: ${petsDiary.length}`);
      return NextResponse.json(petsDiary);
    } catch (error) {
      console.error("[GET /api/pets-diaries] エラー:", error);
      return NextResponse.json({ message: "サーバーエラー" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
      console.log("[POST /api/pets-diaries] リクエスト受信");
  
      const data = await req.json();
      console.log("[POST /api/pets-diaries] リクエストボディ:", data);
  
      const petDiary = await prisma.petDiary.create({ data });
  
      console.log("[POST /api/pets-diaries] 登録成功:", petDiary);
      return NextResponse.json(petDiary, { status: 201 });
    } catch (error) {
      console.error("[POST /api/pets-diaries] エラー:", error);
      return NextResponse.json({ message: "サーバーエラー" }, { status: 500 });
    }
}