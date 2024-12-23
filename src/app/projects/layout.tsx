
import { Header } from '@/components/sections';

import SmoothScroll from '@/components/smooth-scroll';

export default function ProjectLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        {children}
      </div>
    
  );
}
