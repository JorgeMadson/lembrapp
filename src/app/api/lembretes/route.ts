import { dbConfig } from "@/db";
import { NextResponse, NextRequest } from "next/server";
import { Pool } from "pg";

// Cria um pool de conexões
const pool = new Pool(dbConfig);

export async function GET() {
    try {
        const result = await pool.query('SELECT * FROM lembretes');
        return NextResponse.json({ result: result.rows }, { status: 200 });
    } catch (error) {
        console.error('Erro ao buscar lembretes:', error);
        return NextResponse.json({ error: 'Erro ao buscar lembretes' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const result = await pool.query(
            'INSERT INTO lembretes(data_evento, nome) VALUES ($1, $2) RETURNING *',
            [body.data_evento, body.nome]
        );
        return NextResponse.json({ result: result.rows[0] }, { status: 200 });
    } catch (error) {
        console.error('Erro ao inserir lembrete:', error);
        return NextResponse.json({ error: 'Erro ao inserir lembrete' }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    // Implementar lógica de atualização
    return NextResponse.json({ message: "Edita um novo lembrete" }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
    // Implementar lógica de deleção
    return NextResponse.json({ message: "Deleta um lembrete" }, { status: 200 });
}
