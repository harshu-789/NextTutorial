import { Metadata } from "next"
import { ErrorWrapper } from "./error-wrapper"

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
            {/* For simulating errors i have to wrap the children with the ErrorBoundary */}
        </html>
    )
}