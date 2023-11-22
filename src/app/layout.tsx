import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                       model
                                   }: {
    children: React.ReactNode,
    model: React.ReactNode,

}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            {children}
            {model}
        </div>

        </body>
        </html>
    )
}
