import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[GET /api/pets-diaries/${params.id}] リクエスト受信`);

    const petDiary = await prisma.petDiary.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!petDiary) {
      console.warn(`[GET /api/pets-diaries/${params.id}] 見つかりません`);
      return NextResponse.json({ error: "petDiary not found" }, { status: 404 });
    }

    console.log(`[GET /api/pets-diaries/${params.id}] 取得成功`, petDiary);
    return NextResponse.json(petDiary);
  } catch (error) {
    console.error(`[GET /api/pets-diaries/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[PUT /api/pets-diaries/${params.id}] 更新リクエスト受信`);
    const data = await req.json();
    console.log(`[PUT /api/pets-diaries/${params.id}] データ`, data);

    const petDiary = await prisma.petDiary.update({
      where: { id: Number(params.id) },
      data,
    });

    console.log(`[PUT /api/pets-diaries/${params.id}] 更新成功`, petDiary);
    return NextResponse.json(petDiary);
  } catch (error) {
    console.error(`[PUT /api/pets-diaries/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[DELETE /api/pets-diaries/${params.id}] 削除リクエスト受信`);

    await prisma.petDiary.delete({
      where: { id: Number(params.id) },
    });

    console.log(`[DELETE /api/pets-diaries/${params.id}] 削除成功`);
    return NextResponse.json({ message: "petDiary deleted" }, { status: 200 });
  } catch (error) {
    console.error(`[DELETE /api/pets-diaries/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}
