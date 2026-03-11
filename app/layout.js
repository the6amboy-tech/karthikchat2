import "./globals.css";

export const metadata = {
  title: "Karthik Chat",
  description: "Modern Video Calling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
