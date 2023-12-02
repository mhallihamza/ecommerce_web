import excuteQuery from "../../../../lib/db"

export async function GET() {
    try {
        const query = 'SELECT * FROM `brands`';
        const results = await excuteQuery({ query });
        return Response.json({ success: true, data: results });
      } catch (error) {
        console.error(error);
        return Response.json({ success: false, error: 'Internal Server Error' });
      }
}

export async function POST(request: Request) {
    interface Brand {
        brand_name : string;
        brand_image : string;
        // Add other properties if needed
      }

    const res:Brand = await request.json();
    const { brand_name, brand_image }: Brand = res;
    try {

      const result = await excuteQuery({
          query: 'INSERT INTO brands(brand_name, brand_image) VALUES(?,?)',
          values: [brand_name, brand_image],
      });
      console.log( "ttt",result );
      return Response.json(res)
  } catch ( error ) {
      console.log( error );
  }
  }
