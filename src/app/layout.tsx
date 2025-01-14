// Import Open Sans from next/font/google
import { Open_Sans } from "next/font/google";

// Configure Open Sans with specific subsets and weights
const openSans = Open_Sans({
  subsets: ["latin"], // Define character subsets
  weight: ["400", "600", "700"], // Specify font weights
});


export const metadata = {
  title: "Tanika's Portfolio",
  description: "Welcome to my website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {children}
      </body>
    </html >
  );
}
