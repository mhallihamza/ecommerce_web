import executeQuery from "../../../../../lib/db";

export async function GET(request: Request, { params }: { params: { product_id: string } }) {

    try {
      const query = 'SELECT products.product_id, products.product_name, products.product_price, products.attributes, products.category_id, product_images.image_url, categories.category_name FROM products LEFT JOIN product_images ON products.product_id = product_images.product_id LEFT JOIN categories ON products.category_id = categories.category_id WHERE products.product_id = ?';
      const results = await executeQuery({ query, values: [params.product_id] });
      return Response.json(results);
    } catch (error) {
      console.error(error);
      return Response.json({ success: false, error: 'Internal Server Error' });
    }
  }
  
export async function PUT(request: Request) {
    console.log('PUT categorie');
}

export async function DELETE(request: Request) {
    console.log('DELETE categorie');
}