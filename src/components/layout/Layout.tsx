import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children?: ReactNode;
  hideFooter?: boolean;
}

export function Layout({ children, hideFooter }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--color-background)] transition-colors duration-300">
      <Header />
      <main>{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}