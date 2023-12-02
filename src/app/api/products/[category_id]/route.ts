import executeQuery from "../../../../../lib/db";

export async function GET(request: Request, { params }: { params: { category_id: string } }) {

    try {
      const query = 'SELECT products.product_id, products.product_name, products.product_price, products.category_id, product_images.image_url FROM `products` LEFT JOIN `product_images` ON products.product_id = product_images.product_id WHERE products.category_id = ?';
      const results = await executeQuery({ query, values: [params.category_id] });
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