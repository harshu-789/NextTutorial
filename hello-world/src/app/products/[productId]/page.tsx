export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const productId =  (await params).productId;

  return <h1>Welcome to Product Details Page for {productId}</h1>;
}
