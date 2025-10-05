import { notFound , redirect} from "next/navigation"

export default async function ReviewDetails({
    params,
}: {
    params : Promise<{productId: string, reviewsId : string}>
}){
const {productId, reviewsId} = await params
if(parseInt(reviewsId)>1000){
    // notFound()
    redirect("/products")
}
    return <h1> Review {reviewsId} for product {productId}</h1>
}