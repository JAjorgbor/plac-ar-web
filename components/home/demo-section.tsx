"use client";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const DemoSection = () => {
  const parentRef = useRef(null);
  const isInView = useInView(parentRef, { once: true });
  console.log(isInView);
  return (
    <section
      ref={parentRef}
      className="max-w-7xl relative overflow-hidden mx-auto"
    >
      <motion.div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        initial={{ top: "-100%" }}
        animate={isInView ? { top: "8%" } : { top: "-100%" }}
        transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
      >
        <Image
          src="/demo-phone.png"
          alt="Demo Image"
          width={500}
          height={500}
        />
      </motion.div>
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
          borderTopRightRadius: "150%",
          borderTopLeftRadius: "150%",
          originX: 0.5,
          originY: 1,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
          borderTopRightRadius: "0%",
          borderTopLeftRadius: "0%",
          transition: { duration: 1, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="bg-[url(/demo-background.png)] h-screen w-full bg-cover"
      />
    </section>
  );
};
export default DemoSection;
