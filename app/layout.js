import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "MrT Stephens",
    description: "A website about MrT Stephens.",
    templateCreator: {
        name: "MrT Stephens",
        url: "https://mrt-stephens.github.io/",
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
