import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
} from '@/components/sections';
import Blog from '@/components/sections/blog/blog';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header loader={true} />
      <main className="flex-1">
        <Hero />
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:w-1/3 order-2 md:order-1 border-l-0 border-r-0 border-t border-b-0 md:border-r md:border-t-0">
            <About />
            <Contact />
          </div>
          <div className="order-1 md:order-2 md:w-2/3">
            <Blog />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
