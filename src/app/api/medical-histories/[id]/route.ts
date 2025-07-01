import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[GET /api/medical-histories/${params.id}] リクエスト受信`);

    const medicalHistory = await prisma.medicalHistory.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!medicalHistory) {
      console.warn(`[GET /api/medical-histories/${params.id}] 見つかりません`);
      return NextResponse.json({ error: "medicalHistory not found" }, { status: 404 });
    }

    console.log(`[GET /api/medical-histories/${params.id}] 取得成功`, medicalHistory);
    return NextResponse.json(medicalHistory);
  } catch (error) {
    console.error(`[GET /api/medical-histories/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[PUT /api/medical-histories/${params.id}] 更新リクエスト受信`);
    const data = await req.json();
    console.log(`[PUT /api/medical-histories/${params.id}] データ`, data);

    const medicalHistory = await prisma.medicalHistory.update({
      where: { id: Number(params.id) },
      data,
    });

    console.log(`[PUT /api/medical-histories/${params.id}] 更新成功`, medicalHistory);
    return NextResponse.json(medicalHistory);
  } catch (error) {
    console.error(`[PUT /api/medical-histories/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[DELETE /api/medical-histories/${params.id}] 削除リクエスト受信`);

    await prisma.medicalHistory.delete({
      where: { id: Number(params.id) },
    });

    console.log(`[DELETE /api/medical-histories/${params.id}] 削除成功`);
    return NextResponse.json({ message: "medicalHistory deleted" }, { status: 200 });
  } catch (error) {
    console.error(`[DELETE /api/medical-histories/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}
