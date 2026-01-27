import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // <-- import Footer

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // ensures footer sticks to bottom
        }}
      >
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main> {/* main takes remaining space */}
        <Footer /> {/* added footer */}
      </body>
    </html>
  );
}
