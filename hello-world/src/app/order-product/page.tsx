"use client"
import { useRouter } from "next/navigation"

export default function OrderProductPage() {
    const router = useRouter()
    const handleClick = () =>{
        // Redirect to the home page
        router.push("/")
        console.log("Order placed")
    }
    return(
        <>
        <h1>Order Product</h1>
        <button onClick={handleClick}>Place order</button>
        </>
    )
}