

// File: app/about/page.tsx
import Image from 'next/image';


export default function AboutPage() {
  return (
    <main className='font-sans font-semibold'>
      <section className="w-full px-6 py-10 gradient-bg">
        <h1 className="text-xl lg:text-3xl font-bold mb-6">
          About <span className="text-[#00D9C0]">Me</span>
        </h1>
        <div className='flex  flex-col gap-20 lg:flex-row-reverse '>
        <div className="w-full relative h-40 mb-8 flex justify-center ">
          <Image
            src="/dots2.png"
            alt="Designer working illustration"
            // fill
            className="object-contain absolute"
            priority
            height={600}
            width={600}
            />
          <Image 
            src="/Group-2.png" 
            alt="Designer working illustration" 
            // fill
            className="object-contain absolute  top-20"
            priority
            height={500}
            width={400}
          />
        </div>
         
         <div className='flex flex-col justify-center mt-36 md:mt-44 lg:mt-5'>
        <h2 className="text-lg font-medium mb-4">Who I Am</h2>
        
        <p className="text-sm opacity-80 mb-6 ">
          I am a creative Frontend developer with over 1.5 years of experience creating beautiful 
          and functional websites. My passion is creating websites that not only look 
          great but also provide an exceptional user experience.
        </p>
        </div>
        </div>
        <h2 className="text-lg font-medium mb-4">My Expertise</h2>
        
        <ul className="text-sm opacity-80 mb-6 space-y-2">
          <li>• Web and mobile application UI/UX Development</li>
          <li>• Frontend developer</li>
          <li>• API intigration and database MongoDB</li>
          <li>• User research and usability testing</li>
          
        </ul>
        
        {/* <h2 className="text-lg font-medium mb-4">Tools & Technologies</h2>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="px-3 py-1 bg-[#2A2A2A] rounded-full text-xs"></span>
          <span className="px-3 py-1 bg-[#2A2A2A] rounded-full text-xs">Reactjs</span>
         
        </div> */}

        <h2 className="text-lg font-medium mb-4">Skills</h2>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="px-3 py-1 bg-[#2A2A2A] rounded-full text-xs">Nextjs</span>
          <span className="px-3 py-1 bg-[#2A2A2A] rounded-full text-xs">Reactjs</span>
          <span className="px-3 py-1 bg-[#2A2A2A] rounded-full text-xs">Typescript</span>
          <span className="px-3 py-1 bg-[#2A2A2A] rounded-full text-xs">Javascript</span>
          <span className="px-3 py-1 bg-[#2A2A2A] rounded-full text-xs">Python</span>
          <span className="px-3 py-1 bg-[#2A2A2A] rounded-full text-xs">HTML</span>
          <span className="px-3 py-1 bg-[#2A2A2A] rounded-full text-xs">Tailwind css</span>
          <span className="px-3 py-1 bg-[#2A2A2A] rounded-full text-xs">Git and GitHub</span>
        </div>



        
      </section>
    </main>
  );
}