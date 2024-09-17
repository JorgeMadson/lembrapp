import { dbConfig } from "@/db"
import { Client } from 'pg';

const createTable = `
  CREATE TABLE lembretes(
    id serial PRIMARY KEY,
    data_evento date,
    nome text
  );
`;

const client = new Client(dbConfig);

client.query(createTable, (err, result) => {
    if (err) {
        console.error('Error creating table', err);
    } else {
        console.log('Table created successfully', result);
    }

    client.end();
});