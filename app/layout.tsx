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
        <body cz-shortcut-listen="true">
          {children}
        </body>
    </ClerkProvider>
      </html>
  );
}