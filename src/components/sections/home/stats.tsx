"use client";
import { ScrollView } from "@/components/scroll-view";
import { motion, useMotionValue, animate, useTransform } from "motion/react";
import { useEffect, useState } from "react";

function AnimatedNumber({ value, prefix = "+" }: { value: number; prefix?: string }) {
  const motionValue = useMotionValue(0);
  const roundedValue = useTransform(motionValue, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 1.5,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [motionValue, value]);

  useEffect(() => {
    const unsubscribe = roundedValue.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return () => unsubscribe();
  }, [roundedValue]);

  return (
    <motion.span className="text-5xl font-bold text-primary">
      {prefix}
      {displayValue}
    </motion.span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden" id="stats">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 relative z-10">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <ScrollView>
            <motion.h2 
              className="text-4xl font-medium lg:text-5xl"
              whileInView={{ scale: [1, 1.02, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Creating Unforgettable Experiences
            </motion.h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>
              At Irenic, we dont just organize events — we craft memorable
              experiences that bring people together, celebrate achievements,
              and create lasting connections.
            </p>
          </ScrollView>
        </div>
        <ScrollView stagger delay={0.04}>
          <div className="grid gap-12 divide-y divide-primary/20 *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4 p-6 rounded-lg hover:bg-primary/5 transition-colors duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
              >
                <AnimatedNumber value={300} />
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
              <p className="group-hover:text-primary transition-colors duration-300">Events Managed</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4 p-6 rounded-lg hover:bg-primary/5 transition-colors duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
              >
                <AnimatedNumber value={150} />
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
              <p className="group-hover:text-primary transition-colors duration-300">Satisfied Clients</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4 p-6 rounded-lg hover:bg-primary/5 transition-colors duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
              >
                <AnimatedNumber value={15} />
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
              <p className="group-hover:text-primary transition-colors duration-300">Countries Served</p>
            </motion.div>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
