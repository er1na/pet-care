import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[GET /api/medicine-histories/${params.id}] リクエスト受信`);

    const medicineHistory = await prisma.medicineHistory.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!medicineHistory) {
      console.warn(`[GET /api/medicine-histories
        /${params.id}] 見つかりません`);
      return NextResponse.json({ error: "medicineHistory not found" }, { status: 404 });
    }

    console.log(`[GET /api/medicine-histories/${params.id}] 取得成功`, medicineHistory);
    return NextResponse.json(medicineHistory);
  } catch (error) {
    console.error(`[GET /api/medicine-histories/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[PUT /api/medicine-histories/${params.id}] 更新リクエスト受信`);
    const data = await req.json();
    console.log(`[PUT /api/medicine-histories/${params.id}] データ`, data);

    const medicineHistory = await prisma.medicineHistory.update({
      where: { id: Number(params.id) },
      data,
    });

    console.log(`[PUT /api/medicine-histories/${params.id}] 更新成功`, medicineHistory);
    return NextResponse.json(medicineHistory);
  } catch (error) {
    console.error(`[PUT /api/medicine-histories/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[DELETE /api/medicine-histories/${params.id}] 削除リクエスト受信`);

    await prisma.medicineHistory.delete({
      where: { id: Number(params.id) },
    });

    console.log(`[DELETE /api/medicine-histories/${params.id}] 削除成功`);
    return NextResponse.json({ message: "medicineHistory deleted" }, { status: 200 });
  } catch (error) {
    console.error(`[DELETE /api/medicine-histories/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}
