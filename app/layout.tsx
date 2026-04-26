import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <ClerkProvider>
        <body >
          {children}
        </body>
    </ClerkProvider>
      </html>
  );
}