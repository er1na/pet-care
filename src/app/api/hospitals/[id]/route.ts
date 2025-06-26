import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[GET /api/hospitals/${params.id}] リクエスト受信`);

    const hospital = await prisma.hospital.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!hospital) {
      console.warn(`[GET /api/hospitals/${params.id}] 見つかりません`);
      return NextResponse.json({ error: "Hospital not found" }, { status: 404 });
    }

    console.log(`[GET /api/hospitals/${params.id}] 取得成功`, hospital);
    return NextResponse.json(hospital);
  } catch (error) {
    console.error(`[GET /api/hospitals/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[PUT /api/hospitals/${params.id}] 更新リクエスト受信`);
    const data = await req.json();
    console.log(`[PUT /api/hospitals/${params.id}] データ`, data);

    const hospital = await prisma.hospital.update({
      where: { id: Number(params.id) },
      data,
    });

    console.log(`[PUT /api/hospitals/${params.id}] 更新成功`, hospital);
    return NextResponse.json(hospital);
  } catch (error) {
    console.error(`[PUT /api/hospitals/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    console.log(`[DELETE /api/hospitals/${params.id}] 削除リクエスト受信`);

    await prisma.hospital.delete({
      where: { id: Number(params.id) },
    });

    console.log(`[DELETE /api/hospitals/${params.id}] 削除成功`);
    return NextResponse.json({ message: "Hospital deleted" }, { status: 200 });
  } catch (error) {
    console.error(`[DELETE /api/hospitals/${params.id}] エラー`, error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}
