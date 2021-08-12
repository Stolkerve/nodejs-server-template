import mysql2, {Connection} from "mysql2/promise"

export class MySqlConnection
{
  private static connection: Connection;
  static async Init() {
    this.connection = await mysql2.createConnection({
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "123",
      database: "todo_project",
      dateStrings: true,
      
    })

    if(!this.connection) {
      process.exit(1);
    }

    //await this.Query("CREATE DATABASE IF NOT EXISTS example_db");
  }

  static async Query(query: string, values: any | any[] | { [param: string]: any } = undefined) {
    return await this.connection.query(query, values);
  }

}