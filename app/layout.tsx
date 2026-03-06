export const metadata = {
  title: "Debora ❤️ Alim",
  description: "A special page for Debora",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
