import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    // Fazer
    console.log(request);
    return NextResponse.json({ message: "Lista todos os lembretes" }, { status: 200 });
}

export async function POST(request: NextRequest) {
    // Fazer
    console.log(request);
    return NextResponse.json({ message: "Cria um novo lembrete" }, { status: 200 });
}

export async function PATCH(request:NextRequest) {
    // Fazer
    console.log(request);
    return NextResponse.json({ message: "Edita um novo lembrete" }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
    // Fazer
    console.log(request);
    return NextResponse.json({ message: "Deleta um lembrete" }, { status: 200 })
}