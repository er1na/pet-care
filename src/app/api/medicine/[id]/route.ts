import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[GET /api/medicines/${params.id}] リクエスト受信`);

    const medicine = await prisma.medicine.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!medicine) {
      console.warn(`[GET /api/medicines/${params.id}] 見つかりません`);
      return NextResponse.json({ error: "medicine not found" }, { status: 404 });
    }

    console.log(`[GET /api/medicines/${params.id}] 取得成功`, medicine);
    return NextResponse.json(medicine);
  } catch (error) {
    console.error(`[GET /api/medicines/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[PUT /api/medicines/${params.id}] 更新リクエスト受信`);
    const data = await req.json();
    console.log(`[PUT /api/medicines/${params.id}] データ`, data);

    const medicine = await prisma.medicine.update({
      where: { id: Number(params.id) },
      data,
    });

    console.log(`[PUT /api/medicines/${params.id}] 更新成功`, medicine);
    return NextResponse.json(medicine);
  } catch (error) {
    console.error(`[PUT /api/medicines/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[DELETE /api/medicines/${params.id}] 削除リクエスト受信`);

    await prisma.medicine.delete({
      where: { id: Number(params.id) },
    });

    console.log(`[DELETE /api/medicines/${params.id}] 削除成功`);
    return NextResponse.json({ message: "medicine deleted" }, { status: 200 });
  } catch (error) {
    console.error(`[DELETE /api/medicines/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}
