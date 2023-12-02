import excuteQuery from "../../../../lib/db"

export async function GET() {
    try {
        const query = 'SELECT categories.*,COUNT(products.product_id) AS product_count FROM categories LEFT JOIN products ON categories.category_id = products.category_id GROUP BY categories.category_id';
        const results = await excuteQuery({ query });
        return Response.json( results );
      } catch (error) {
        console.error(error);
        return Response.json({ success: false, error: 'Internal Server Error' });
      }
}

export async function POST(request: Request) {
    interface Category {
        category_name: string;
        category_image: string;
        category_description: string;
        // Add other properties if needed
      }

    const res:Category = await request.json();
    const { category_name, category_image, category_description }: Category = res;
    try {

      const result = await excuteQuery({
          query: 'INSERT INTO categories(category_name,category_image,category_description) VALUES(?,?,?)',
          values: [category_name,category_image,category_description],
      });
      console.log( "ttt",result );
      return Response.json(res)
  } catch ( error ) {
      console.log( error );
  }
  }
