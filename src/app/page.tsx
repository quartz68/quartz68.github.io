import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Projects
} from '@/components/sections';

import SmoothScroll from '@/components/smooth-scroll';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="flex min-h-[100dvh] flex-col">
        <Header loader={true} />
        <main className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </SmoothScroll>
  );
}
