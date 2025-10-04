import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: { productId: string };
};

// ✅ Generate dynamic metadata
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const productId = (await params).productId;

  // Simulate fetching product title (e.g., from DB/API)
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${productId}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
    description: `Details about product ${title}`,
  };
}

// ✅ Product details page
export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;

  return(<>

  <Link href= "/">Home</Link>
  <h1>Welcome to Product Details Page for {productId}</h1>
  </> 
  )
}
