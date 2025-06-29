import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
      console.log("[GET /api/icons] リクエスト受信");
  
      const icons = await prisma.icon.findMany();
  
      console.log(`[GET /api/icons] 取得件数: ${icons.length}`);
      return NextResponse.json(icons);
    } catch (error) {
      console.error("[GET /api/icons] エラー:", error);
      return NextResponse.json({ message: "サーバーエラー" }, { status: 500 });
    }
}
