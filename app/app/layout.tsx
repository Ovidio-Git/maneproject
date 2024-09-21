import './globals.css';

export const metadata = {
  title: 'Mane App',
  description:
    'A user admin dashboard configured with Next.js, Tailwind CSS, TypeScript, and Prettier.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full flex-col">{children}</body>
    </html>
  );
}
