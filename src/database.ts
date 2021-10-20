import Connection from 'mysql/lib/Connection';
import { createPool } from 'mysql2/promise';

export async function  connect(){

  const connection =  await createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'scrm-ittepic'
    });
    return connection;

}