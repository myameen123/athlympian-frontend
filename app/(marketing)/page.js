import HeroSection from "./_components/hero-section";
import Services from "./_components/services";

export default function Home() {
  return (
    <div className="flex flex-col  ">
      <HeroSection />
      {/* in below div mt-[100vh] */}
      <div className="flex-1 bg-slate-100  h-full">
        <div className="">
          <Services />
        </div>
      </div>
    </div>
  );
}
