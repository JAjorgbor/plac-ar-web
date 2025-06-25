import DemoSection from "@/components/home/demo-section";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section className="max-w-7xl mx-auto p-5 snap-start">
        {/* hero section */}
        <div className="h-screen  relative">
          <div className="space-y-4 mb-12">
            <h1 className="text-4xl font-semibold md:w-1/2">
              Don&rsquo;t just picture the vision &mdash; place it. Real rooms,
              real time, real dope.
            </h1>
            <p>
              Turn your taste into space &mdash; AR that works as hard as your
              vision.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                className="bg-green-900 text-white py-1 px-4 rounded-3xl"
              >
                Get in Early
              </button>
              <button
                type="button"
                className="text-green-900 bg-white py-1 px-4 rounded-3xl border-2 border-green-900"
              >
                How it works
              </button>
            </div>
          </div>
          {/* Shapes */}
          <div className="flex gap-6 items-end absolute w-full top-[10%]">
            <div className="inline-block h-[250px] w-[150px] rounded-r-[80px] border-8 border-gray-400" />
            <div className="flex flex-col gap-6 flex-grow">
              <div className="flex gap-6 items-end">
                <div className="inline-block h-[80px] w-[150px] rounded-t-full bg-pink border-8 bg-[#FDE3FA] border-[#f5c9f0]" />
                <div className="inline-block bg-green-700 border-8 border-green-900 rounded-4xl rounded-tl-none h-[50px] w-[200px]" />
                <div className="inline-block bg-[#7EF1EA] min-w-[500px] flex-grow h-[500px] rounded-tl-[100px] border-8 border-[#097a73]" />
              </div>
              <div className="inline-block w-full bg-yellow-300 border-8 border-yellow-700 h-[80px] rounded-bl-[300px] rounded-r-[150px]" />
            </div>
          </div>
        </div>
      </section>

      <DemoSection />

      <section className="max-w-7xl mx-auto relative p-5 my-12 overflow-hidden snap-start">
        <div className="absolute top-14 left-1/2 w-[300px] transform -translate-x-1/2 text-center space-y-4">
          <h2 className="text-xl">The Platform</h2>
          <h3 className="text-4xl font-semibold uppercase">
            Created Over 80,000 3D Models
          </h3>
          <p>
            Design personalized, brand-consistent, Interiors without much skill
            just creativity
          </p>
          <button
            type="button"
            className="bg-green-900 text-white py-1 px-4 rounded-3xl"
          >
            Get in Early
          </button>
        </div>
        <div className="overflow-auto h-screen p-3 snap-y snap-mandatory">
          <div className="flex justify-between h-screen snap-start">
            <Image
              src="/example.png"
              alt="example"
              height={500}
              width={300}
              className="rounded-4xl object-cover h-[70%] mb-auto"
            />
            <Image
              src="/example.png"
              alt="example"
              height={500}
              width={300}
              className="rounded-4xl object-cover h-[70%] mt-auto"
            />
          </div>
          <div className="flex justify-between h-screen snap-start">
            <Image
              src="/example.png"
              alt="example"
              height={500}
              width={300}
              className="rounded-4xl object-cover h-[70%] mb-auto"
            />
            <Image
              src="/example.png"
              alt="example"
              height={500}
              width={300}
              className="rounded-4xl object-cover h-[70%] mt-auto"
            />
          </div>
          <div className="flex justify-between h-screen snap-start">
            <Image
              src="/example.png"
              alt="example"
              height={500}
              width={300}
              className="rounded-4xl object-cover h-[70%] mb-auto"
            />
            <Image
              src="/example.png"
              alt="example"
              height={500}
              width={300}
              className="rounded-4xl object-cover h-[70%] mt-auto"
            />
          </div>
          <div className="flex justify-between h-screen snap-start">
            <Image
              src="/example.png"
              alt="example"
              height={500}
              width={300}
              className="rounded-4xl object-cover h-[70%] mb-auto"
            />
            <Image
              src="/example.png"
              alt="example"
              height={500}
              width={300}
              className="rounded-4xl object-cover h-[70%] mt-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
