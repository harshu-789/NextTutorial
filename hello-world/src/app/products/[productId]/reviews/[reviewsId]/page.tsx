import { notFound , redirect} from "next/navigation"


function getRandomInt(count : number){
    return Math.floor(Math.random()*count)
}

export default async function ReviewDetails({
    params,
}: {
    params : Promise<{productId: string, reviewsId : string}>
}) {
    const random = getRandomInt(2)
    if(random ===0){
        throw new Error("Error loading view")
    }
{
const {productId, reviewsId} = await params
if(parseInt(reviewsId)>1000){
    notFound()
    redirect("/products")
}
    return <h1> Review {reviewsId} for product {productId}</h1>
}
}