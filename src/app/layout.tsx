import './globals.css';

export const metadata = {
  title: 'Tanika Jangam',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/TJ.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
