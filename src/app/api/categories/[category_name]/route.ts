import executeQuery from "../../../../../lib/db";

export async function GET(request: Request, { params }: { params: { category_name: string } }) {
    const categoryMapping: Record<string, string> = {
      'air-conditioner': 'air conditioner',
      'audio-video': 'audio & video',
      'gadgets': 'gadgets',
      'home-appliances': 'home appliances',
      'kitchen-appliances': 'kitchen appliances',
      'pcs-laptop': 'pcs & laptop',
      'refrigerator': 'refrigerator',
      'smart-home': 'smart Home',
    };
  
    const category = categoryMapping[params.category_name as keyof typeof categoryMapping];
  
    if (!category) {
      console.error(`Category not found for ${params.category_name}`);
      return Response.json({ success: false, error: 'Category not found' });
    }
  
    try {
      const query = 'SELECT * FROM `categories` WHERE category_name = ?';
      const results = await executeQuery({ query, values: [category] });
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