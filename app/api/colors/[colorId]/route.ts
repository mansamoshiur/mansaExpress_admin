import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { colorId: string } }
) {
  try {
    const { name, value } = await req.json();

    if (!params.colorId) {
      return new NextResponse("color id is required", { status: 400 });
    }

    const color = await db.color.update({
      where: {
        id: params.colorId,
      },
      data: {
        name,
        value,
      },
    });
    return NextResponse.json(color);
  } catch (error) {
    console.log("[Color_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { colorId: string } }
) {
  try {
    if (!params.colorId) {
      return new NextResponse("color id is required", { status: 404 });
    }
    const color = await db.color.delete({
      where: {
        id: params.colorId,
      },
    });
    return NextResponse.json(color);
  } catch (error) {
    console.log("Color_DELETE", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
