import excuteQuery from "../../../../lib/db"

export async function GET() {
    try {
        const query = 'SELECT products.product_id, products.product_name, products.product_price, product_images.image_url, categories.category_name FROM products LEFT JOIN product_images ON products.product_id = product_images.product_id LEFT JOIN categories ON products.category_id = categories.category_id';
        const results = await excuteQuery({ query });
        return Response.json( results );
      } catch (error) {
        console.error(error);
        return Response.json({ success: false, error: 'Internal Server Error' });
      }
}

export async function POST(request: Request) {
    interface Product {
        product_name: string;
        product_price: number;
        stock_quantity: number;
        attributes: string;
        category_id: number;
        brand_id?: number | null;
        // Add other properties if needed
      }

    const res:Product = await request.json();
    const { product_name, product_price, stock_quantity, attributes, category_id, brand_id = null }: Product = res;
    try {

      const result = await excuteQuery({
          query: 'INSERT INTO products(product_name,product_price,stock_quantity,attributes,category_id,brand_id) VALUES(?,?,?,?,?,?)',
          values: [product_name,product_price,stock_quantity,attributes,category_id,brand_id],
      });
      console.log( "ttt",result );
      return Response.json(res)
  } catch ( error ) {
      console.log( error );
  }
  }
