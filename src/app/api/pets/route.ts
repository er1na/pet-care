import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        console.log("[GET /api/pets] リクエスト受信");

        const pets = await prisma.pet.findMany();

        console.log(`[GET /api/pets] 取得件数: ${pets.length}`);
        return NextResponse.json(pets);
    } catch (error) {
        console.error("[GET /api/pets] エラー:", error);
        return NextResponse.json({ message: "サーバーエラー" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
      console.log("[POST /api/pets] リクエスト受信");
  
      const data = await req.json();
      console.log("[POST /api/pets] リクエストボディ:", data);
  
      const pet = await prisma.pet.create({ data });
  
      console.log("[POST /api/pets] 登録成功:", pet);
      return NextResponse.json(pet, { status: 201 });
    } catch (error) {
      console.error("[POST /api/pets] エラー:", error);
      return NextResponse.json({ message: "サーバーエラー" }, { status: 500 });
    }
}