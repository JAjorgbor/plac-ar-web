"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { forwardRef, useImperativeHandle, useRef } from "react";

const DemoSection = forwardRef<HTMLElement>((props, ref) => {
  const parentRef = useRef<HTMLElement>(null);

  // Expose parentRef to parent via the forwarded ref
  useImperativeHandle(ref, () => parentRef.current as HTMLElement);

  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end start"],
  });

  // Animate opacity and y based on scroll
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.9, 1.4]);
  const radius = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["100%", "5%", "-10%"]
  );
  const down = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-200%", "10%", "100%"]
  );
  return (
    <section className="max-w-7xl sticky top-0 z-30 overflow-hidden mx-auto ">
      <div className="overflow-y-hidden">
        <motion.div
          className=" left-1/2 -translate-x-1/2 z-50"
          style={{ y: down, position: "absolute" }}
          // initial={{ top: "-100%" }}
          // animate={isInView ? { top: "8%" } : { top: "-100%" }}
          transition={{ ease: "easeInOut" }}
        >
          <Image
            src="/demo-phone.png"
            alt="Demo Image"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          style={{
            scale: scale,
            // opacity: appear,
            borderTopRightRadius: radius,
            borderTopLeftRadius: radius,
            originX: 0.5,
            originY: 1,
          }}
          // whileInView={{
          //   scale: 1,
          //   opacity: 1,
          //   borderTopRightRadius: "0%",
          //   borderTopLeftRadius: "0%",
          //   transition: { duration: 1, ease: "easeInOut" },
          // }}
          // viewport={{ once: true }}
          className="bg-[url(/demo-background.png)] h-screen w-full bg-cover"
        />
      </div>
    </section>
  );
});
export default DemoSection;
DemoSection.displayName = "DemoSection";
