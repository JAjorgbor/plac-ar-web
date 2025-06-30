"use client";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";
import { forwardRef, useImperativeHandle, useRef } from "react";

const ExampleSection = forwardRef<HTMLElement>(({}, ref) => {
  const parentRef = useRef<HTMLElement>(null);

  // Expose parentRef to parent via the forwarded ref
  useImperativeHandle(ref, () => parentRef.current as HTMLElement);

  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end start"],
  });

  // Animate opacity and y based on scroll
  const down = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  return (
    <section className="max-w-7xl mx-auto bg-white z-30 sticky top-0 px-5 my-12 h-screen overflow-hidden">
      <div className="flex sticky top-0 z-20 justify-between">
        <div className="size-[300px] inline-block " />
        <div className="w-[300px] text-center space-y-4">
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
        <div className="size-[300px] bg-white relative z-20 inline-block " />
      </div>
      <motion.div style={{ y: down }} className="py-16">
        <div className="flex justify-between h-screen">
          <Image
            src="/example.png"
            alt="example"
            height={500}
            width={300}
            className="rounded-4xl object-cover object-center h-[70%] mb-auto"
          />
          <Image
            src="/example.png"
            alt="example"
            height={500}
            width={300}
            className="rounded-4xl object-cover object-center h-[70%] mt-auto"
          />
        </div>
        <div className="flex justify-between h-screen">
          <Image
            src="/example.png"
            alt="example"
            height={500}
            width={300}
            className="rounded-4xl object-cover object-center h-[70%] mb-auto"
          />
          <Image
            src="/example.png"
            alt="example"
            height={500}
            width={300}
            className="rounded-4xl object-cover object-center h-[70%] mt-auto"
          />
        </div>
        <div className="flex justify-between h-screen">
          <Image
            src="/example.png"
            alt="example"
            height={500}
            width={300}
            className="rounded-4xl object-cover object-center h-[70%] mb-auto"
          />
          <Image
            src="/example.png"
            alt="example"
            height={500}
            width={300}
            className="rounded-4xl object-cover object-center h-[70%] mt-auto"
          />
        </div>
        <div className="flex justify-between h-screen">
          <Image
            src="/example.png"
            alt="example"
            height={500}
            width={300}
            className="rounded-4xl object-cover object-center h-[70%] mb-auto"
          />
          <Image
            src="/example.png"
            alt="example"
            height={500}
            width={300}
            className="rounded-4xl object-cover object-center h-[70%] mt-auto"
          />
        </div>
      </motion.div>
    </section>
  );
});
export default ExampleSection;

ExampleSection.displayName = "ExampleSection";
