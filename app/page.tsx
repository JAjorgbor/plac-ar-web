"use client";
import DemoSection from "@/components/home/demo-section";
import Footer from "@/components/scaffold/footer";
import ExampleSection from "@/components/home/example-section";
import { motion, useScroll, useTransform } from "motion/react";
// import Image from "next/image";
import { useRef } from "react";

export default function HomePage() {
  const parentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start start", "end end"],
  });

  // Animate opacity and y based on scroll
  const right = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rightFast = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "500px", "100%"]
  );
  const left = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "-500px", "-100%"]
  );
  const up = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "-500px", "-100%"]
  );
  const down = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "500px", "100%"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.1, 0]);
  return (
    <main ref={parentRef}>
      <section className="max-w-7xl mx-auto p-5 sticky top-0 overflow-x-hidden">
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
              <motion.div style={{ x: rightFast, opacity }}>
                <button
                  type="button"
                  className="bg-green-900 text-white py-1.5 px-4 rounded-3xl"
                >
                  Get in Early
                </button>
              </motion.div>
              <motion.div style={{ x: left, y: down, opacity }}>
                <button
                  type="button"
                  className="text-green-900 bg-white py-1 px-4 rounded-3xl border-2 border-green-900"
                >
                  How it works
                </button>
              </motion.div>
            </div>
          </div>
          {/* Shapes */}
          <div className="flex gap-6 items-end absolute w-full top-[10%]">
            <motion.div
              style={{ x: left, opacity }}
              className="inline-block h-[250px] w-[150px] rounded-r-[80px] border-8 border-gray-400"
            />
            <div className="flex flex-col gap-6 flex-grow">
              <div className="flex gap-6 items-end">
                <motion.div
                  style={{ y: up, opacity }}
                  className="flex gap-6 items-end"
                >
                  <div className="inline-block h-[80px] w-[150px] rounded-t-full bg-pink border-8 bg-[#FDE3FA] border-[#f5c9f0]" />
                  <div className="inline-block bg-green-700 border-8 border-green-900 rounded-4xl rounded-tl-none h-[50px] w-[200px]" />
                </motion.div>
                <motion.div
                  style={{ x: right, opacity }}
                  className="inline-block bg-[#7EF1EA] min-w-[500px] flex-grow h-[500px] rounded-tl-[350px] border-8 border-[#097a73]"
                />
              </div>
              <motion.div
                style={{ x: right, opacity }}
                className="inline-block w-full bg-yellow-300 border-8 border-yellow-700 h-[80px] rounded-bl-[300px] rounded-r-[150px]"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="h-[150vh]" />
      <DemoSection ref={parentRef} />
      <div className="h-[800vh]" />

      <ExampleSection ref={parentRef} />
      <div className="h-[400vh]" />
      <Footer />
    </main>
  );
}
