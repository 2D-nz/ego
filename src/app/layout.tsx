import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "./nav";

export const metadata: Metadata = {
	title: "2D-nz",
	description: "Projeto sobre Denis Lima",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className="max-h-screen h-screen p-0 m-0 bg-[#F8D6B3]">
				<Nav />
				{children}
			</body>
		</html>
	);
}
