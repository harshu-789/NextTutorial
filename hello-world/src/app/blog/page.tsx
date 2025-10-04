import { Metadata } from "next"

export const metadata: Metadata = {
    title:{
        absolute: "Blog Page",
    }
}

export default function Blog(){
    return <h1> Welcome to Blog Page</h1>
}