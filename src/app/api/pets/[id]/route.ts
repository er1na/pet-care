import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[GET /api/pets/${params.id}] リクエスト受信`);

    const pet = await prisma.pet.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!pet) {
      console.warn(`[GET /api/pets/${params.id}] 見つかりません`);
      return NextResponse.json({ error: "pet not found" }, { status: 404 });
    }

    console.log(`[GET /api/pets/${params.id}] 取得成功`, pet);
    return NextResponse.json(pet);
  } catch (error) {
    console.error(`[GET /api/pets/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[PUT /api/pets/${params.id}] 更新リクエスト受信`);
    const data = await req.json();
    console.log(`[PUT /api/pets/${params.id}] データ`, data);

    const pet = await prisma.pet.update({
      where: { id: Number(params.id) },
      data,
    });

    console.log(`[PUT /api/pets/${params.id}] 更新成功`, pet);
    return NextResponse.json(pet);
  } catch (error) {
    console.error(`[PUT /api/pets/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[DELETE /api/pets/${params.id}] 削除リクエスト受信`);

    await prisma.pet.delete({
      where: { id: Number(params.id) },
    });

    console.log(`[DELETE /api/pets/${params.id}] 削除成功`);
    return NextResponse.json({ message: "pet deleted" }, { status: 200 });
  } catch (error) {
    console.error(`[DELETE /api/pets/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}
