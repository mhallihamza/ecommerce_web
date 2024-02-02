const { Vonage } = require('@vonage/server-sdk');

export async function POST(request: Request) {
    const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
    const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
    const req = await request.json();
    const { phone_number } = req;
    try {
        const vonage = new Vonage({
            apiKey: VONAGE_API_KEY,
            apiSecret: VONAGE_API_SECRET
          });
          const result = await vonage.verify.start({
            number: phone_number,
            brand: "HAMZA MHALLI"
          })
      return Response.json(result)
  } catch ( error ) {
      console.log( error );
  }
  }