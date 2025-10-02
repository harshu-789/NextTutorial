export const metadata = {
    title: 'Home',
    description: 'Welcome to the home page',
}

export default function RootLayout({
    children,
}:{
    children: React.ReactNode
} ){
    return(
        <html>
            <body>{children}</body>
        </html>
    )
}
