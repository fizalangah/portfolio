// File: app/contact/page.tsx
import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className='font-sans font-semibold'>
      <section className="w-full px-6 py-10 gradient-bg flex justify-center flex-col items-center">

        <h1 className="text-xl lg:text-3xl font-bold mb-6">
          Get In <span className="text-[#00D9C0]">Touch</span>
        </h1>

        <div className='flex lg:flex-row flex-col gap-20'>
          <div className="w-1/2 relative my-4 flex justify-center mt-10 lg:mt-20">
            <Image
              src="/Group-3.png"
              alt="Chart illustration"
              // fill
              className="object-contain"
              priority
              height={500}
              width={300}
            />
          </div>
          {/* < form action="https://formspree.io/f/mvgorqqy"
  method="POST"></form> */}

          <form action="https://formspree.io/f/xblgpjoj"
  method="POST">
    <div
   className="flex justify-center flex-col mt-8 space-y-4 w-[280px] md:w-[400px] lg:w-[500px]"
         >
          
            <div>
              <label htmlFor="name" className="block text-sm mb-1">Name</label>
              <input
                type="text"
                id="name"
                name='name'
                className="w-full bg-[#2A2A2A] px-4 py-2 rounded-lg text-sm"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input
                type="email"
                id="email"
                name='email'
                className="w-full bg-[#2A2A2A] px-4 py-2 rounded-lg text-sm"
                placeholder="Your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-1">Message</label>
              <textarea
                id="message"
                name='message'
                rows={4}
                className="w-full bg-[#2A2A2A] px-4 py-2 rounded-lg text-sm"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="px-6 py-2 bg-[#00D9C0] text-black rounded-full text-sm font-medium">
              Send Message
            </button>
            </div>
          </form>
        </div>

      </section>
    </main>
  );
}
