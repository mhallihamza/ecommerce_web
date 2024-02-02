const { Vonage } = require('@vonage/server-sdk');

export async function POST(request: Request) {
    const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
    const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
    const req = await request.json();
    const { REQUEST_ID,CODE } = req;
    try {
        const vonage = new Vonage({
            apiKey: VONAGE_API_KEY,
            apiSecret: VONAGE_API_SECRET
          });
          const result = await vonage.verify.check(REQUEST_ID, CODE);
      return Response.json(result)
  } catch ( error ) {
      console.log( error );
  }
  }