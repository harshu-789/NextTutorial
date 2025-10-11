import { Metadata } from "next"

export const metadata: Metadata = {
    title:{
        absolute: "Blog Page",
    }
}

export default  async function Blog(){
    await new Promise((resolve) => 
        setTimeout (() =>{
            resolve("Intentional Delay")
        },2000));
    return <h1> Welcome to Blog Page</h1>
}