// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="text-center py-4 text-white text-sm bg-blue-500">
      © {new Date().getFullYear()} Mini LinkedIn. All rights reserved.
    </footer>
  );
}
