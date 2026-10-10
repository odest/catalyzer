import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offline",
};

export default function OfflineLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
