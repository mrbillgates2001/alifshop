import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title:
		"alifshop.uz - muddatli to'lovga sotib olish imkoniyati mavjud internet-magazin",
	description: "Muddatli to'lovga sotib olish imkoniyati",
	keywords:
		"alifshop.uz, muddatli to'lovga sotib olish imkoniyati, muddatli to'lovga sotib olish, to'lovga sotib olish, to'lovga sotib olish imkoniyati, to'lovga sotib olish imkoniyati mavjud internet-magazin",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<main className="container max-w-[1340px] mx-auto py-2 px-5">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
