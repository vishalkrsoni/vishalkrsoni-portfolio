import "./globals.css";

export const metadata = {
  title: "Vishal Kr Soni | Senior Software Engineer",
  description:
    "Portfolio of Vishal Kr Soni, Senior Software Engineer specializing in MERN, microservices, real-time systems, and scalable backend architecture.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
