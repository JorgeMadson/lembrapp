import { Client } from 'pg';

/**
 Baseado nesse tutorial:
 https://tembo.io/docs/getting-started/postgres_guides/connecting-to-postgres-with-nodejs
 */

// Database connection configuration
export const dbConfig = {
  user: 'postgres',
  password: 'senha',
  host: 'localhost',
  port: 5432, // ou a porta que estiver usando
  database: 'lembrapp',
};

async function main() {
  const client = new Client(dbConfig);

  try {
    // Conectar ao banco de dados
    await client.connect();
    console.log('Connected to PostgreSQL database');

    // Executar a query
    const result = await client.query('SELECT * FROM employees');
    console.log('Query result:', result.rows);
  } catch (err) {
    console.error('Error executing query or connecting to database', err);
  } finally {
    try {
      // Fechar a conexão
      await client.end();
      console.log('Connection to PostgreSQL closed');
    } catch (err) {
      console.error('Error closing connection', err);
    }
  }
}

main();
