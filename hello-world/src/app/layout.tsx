import { Metadata } from "next"

export const metadata: Metadata = {
    title : {
        default: "Hello World",
            template:"%s | Learning Next.js",
            // absolute :"", 
    }
}
export default function RootLayout({
    children,
}:{
    children: React.ReactNode
} ){
    return(
        <html>
            <head />
            <body>{children}</body>
        </html>
    )
}