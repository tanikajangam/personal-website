// /src/app/layout.tsx
import "./globals.css";
import LoadingScreen from "./loading";

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
      <body>
        <LoadingScreen>{children}</LoadingScreen>
      </body>
    </html>
  );
}
