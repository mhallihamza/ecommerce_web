import * as bcrypt from 'bcrypt';
import executeQuery from '../../../../lib/db';

export async function POST(request: Request) {
    interface User {
        email: string;
        password: string;
        first_name: string;
        last_name: string;
        gender: string;
        phone_number: string;
        // Add other properties if needed
      }

    try {
      
        const req:User = await request.json();
        const { email, password, first_name, last_name, gender, phone_number }: User = req;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const result = await executeQuery({
            query: 'INSERT INTO users(email, password, first_name, last_name, gender, phone_number) VALUES(?, ?, ?, ?, ?, ?)',
            values: [email, hash, first_name, last_name, gender, phone_number],
          });
        console.log('Database Insert Result:', result);
      return Response.json(result)
  } catch ( error ) {
      console.log( error );
  }
  }
