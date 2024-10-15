import Image from "next/image";
import About from "./_components/About";
import CarouselComponent from "./_components/CarouselComponent";
import Hero from "./_components/Hero";
import PitchUpdateTab from "./_components/PitchUpdateTab";
import Press from "./_components/Press";
import Team from "./_components/Team";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <main className=" md:px-[13%]">
        <Hero />
      </main>
      <div className="bg-gray-100 py-14">
        <CarouselComponent />
      </div>
      <PitchUpdateTab />
      <div className="md:px-[13%]">
        <hr className="my-10" />
        <About />
        <hr className="my-10" />
        <Team />
        <hr className="my-10" />
        <Press />
        <hr className="my-10" />
        <div className="flex justify-center my-10">
          <div className='flex flex-col justify-between items-center'>
            <div className='flex gap-3 items-center'>
              <Image src="https://uploads.republic.com/p/offerings/hierarchical_offerings/logos/small/000/007/717/7717-1706912407-d30bb81eff1885a766825f78ca98af1da48b4550.png" width={70} height={70} />
              <h1 className='text-5xl font-bold'>Avawatz</h1>
              <button className="border-2 px-4 py-2">Follow</button>
              <button className="border-2 px-3 py-1">167</button>
            </div>
            <p className="text-green-600 my-4">Avawatz successfully raised $103,596 from 26 investors on October 1, 2024 </p>
          </div>
        </div>

      </div>
      <Footer />

    </>
  );
}
