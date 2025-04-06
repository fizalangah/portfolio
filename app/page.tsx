import Link from "next/link";
// import RecentWorks from "./components/Recentwork";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <section className="relative w-full px-6 py-8 j gradient-bg">
        <div className="mt-8 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col items-center w-1/2 justify-center">
            <h1 className="text-xl lg:text-4xl font-bold flex flex-col justify-center">
              <span className="text-[#00D9C0] lg:text-6xl">CREATIVE</span>
              <span className="text-4xl lg:text-4xl">Frontend Developer</span>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link href="https://linkedin.com/in/fiza-ali-33543b2b7">
                  <button className="px-6 py-2 bg-[#00D9C0] hover:bg-black hover:text-white text-black text-sm rounded-full">
                    Hire me
                  </button>
                </Link>
                <Link href="/Fiza-Langah-2.pdf">
                  <button className="px-6 py-2 bg-black hover:bg-[#00D9C0] hover:text-black text-white text-sm rounded-full">
                    Download CV
                  </button>
                </Link>
              </div>

            </h1>


          </div>


          <div className="mt-8 w-full relative h-40 lg:h-80 lg:w-1/2 flex justify-center">
            <Image
              src="/dots.png"
              alt="UI Designer illustration"
              // fill
              className="object-contain "
              priority
              height={400}
              width={300}
            />
            <Image
              src="/Group-1.png"
              alt="UI Designer illustration"
              fill
              className="object-contain lg:mt-[100px] "
              priority

            />
          </div>
        </div>
      </section>

      {/* <RecentWorks showPreview={true} /> */}
      <div className="flex justify-center mt-8 font-sans font-semibold ">
        <Link href="/works" className="text-sm  text-[#00D9C0]">
          View all →
        </Link>
      </div>


    </main>
  );
}


