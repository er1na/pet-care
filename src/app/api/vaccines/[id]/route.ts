import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[GET /api/vaccines/${params.id}] リクエスト受信`);

    const vaccine = await prisma.vaccine.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!vaccine) {
      console.warn(`[GET /api/vaccines/${params.id}] 見つかりません`);
      return NextResponse.json({ error: "Vaccine not found" }, { status: 404 });
    }

    console.log(`[GET /api/vaccines/${params.id}] 取得成功`, vaccine);
    return NextResponse.json(vaccine);
  } catch (error) {
    console.error(`[GET /api/vaccines/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[PUT /api/vaccines/${params.id}] 更新リクエスト受信`);
    const data = await req.json();
    console.log(`[PUT /api/vaccines/${params.id}] データ`, data);

    const vaccine = await prisma.vaccine.update({
      where: { id: Number(params.id) },
      data,
    });

    console.log(`[PUT /api/vaccines/${params.id}] 更新成功`, vaccine);
    return NextResponse.json(vaccine);
  } catch (error) {
    console.error(`[PUT /api/vaccines/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[DELETE /api/vaccines/${params.id}] 削除リクエスト受信`);

    await prisma.vaccine.delete({
      where: { id: Number(params.id) },
    });

    console.log(`[DELETE /api/vaccines/${params.id}] 削除成功`);
    return NextResponse.json({ message: "vaccine deleted" }, { status: 200 });
  } catch (error) {
    console.error(`[DELETE /api/vaccines/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}
