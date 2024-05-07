import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
//import * as fs from 'fs';
import { NextResponse } from 'next/server'
import executeQuery from '../../../../lib/db';
//let privateKey = fs.readFileSync('private.key');

export async function POST(request: Request) {
  interface User {
    email: string;
    password: string;
    // Add other properties if needed
  }
    try {
        const req:User = await request.json();
        const { email, password }: User = req;
        const query = 'SELECT * FROM `users` WHERE email = ?';
        const user = await executeQuery({ query, values: [email] });
        if(user.length===0){
          return Response.json({
            message: "User not found"
          }, {
            status: 401,
          })
        }
        const match = await bcrypt.compare(password, user[0].password)

          if (!match) {
            // handle incorrect password error
            return Response.json({
              message: "Invalid email"
            }, {
              status: 401,
            })
          }
          const token = jwt.sign(
            { id: user[0].user_id, role: user[0].role },
            "1uSj/q9zqKERruCYgGjaliVN7vrJOjFtzzVnsQ5/nuc="
          )
          return new Response(
            JSON.stringify(user[0]),
            {
              status: 200,
              headers: { 'Set-Cookie': `acces_token=${token} ;HttpOnly` },
            })
      } catch (error) {
        console.error(error);
        return Response.json({ success: false, error: 'Internal Server Error' });
      }
}