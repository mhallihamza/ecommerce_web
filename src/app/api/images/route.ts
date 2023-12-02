import excuteQuery from "../../../../lib/db"

export async function GET() {
    try {
        const query = 'SELECT * FROM `product_images`';
        const results = await excuteQuery({ query });
        return Response.json({ success: true, data: results });
      } catch (error) {
        console.error(error);
        return Response.json({ success: false, error: 'Internal Server Error' });
      }
}

export async function POST(request: Request) {
    interface Image {
        image_url: string;
        product_id: number;
        // Add other properties if needed
      }

    const res:Image = await request.json();
    const { image_url, product_id }: Image = res;
    try {

      const result = await excuteQuery({
          query: 'INSERT INTO product_images(image_url, product_id) VALUES(?,?)',
          values: [image_url, product_id],
      });
      console.log( "ttt",result );
      return Response.json(res)
  } catch ( error ) {
      console.log( error );
  }
  }
