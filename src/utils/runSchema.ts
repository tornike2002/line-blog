import fs from "fs"
import path from "path"
import pool from "../config/db"

export async function runSchema(){
    try{
        const schemaPath = path.join(process.cwd(), "./schema.sql");
        const schema = fs.readFileSync(schemaPath, "utf-8");
        await pool.query(schema);
        console.log("Schema created successfully");
    }catch(err){
        console.log("Error creating schema:", err);
    }
}