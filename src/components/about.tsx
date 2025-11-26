"use client";
import { Circle, Cpu, Lock, Sparkles, Zap } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";
import { motion } from "motion/react";

const ourPrinciples = [
  {
    title: "Innovation",
    description:
      "Pushing creative boundaries with fresh ideas and technology for unique events.",
  },
  {
    title: "Precision",
    description:
      "Meticulous planning and flawless execution with an unwavering eye for detail.",
  },

  {
    title: "Partnership",
    description:
      "Collaborating closely with clients, building lasting relationships for shared success.",
  },
  {
    title: "Global Reach",
    description:
      "Seamless event management capabilities and cultural understanding, worldwide.",
  },
];

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden" id="about">
      {/* Animated background */}
      <motion.div
        className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12 relative z-10">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <motion.h2 
              className="text-balance text-4xl font-medium lg:text-5xl"
              whileInView={{ scale: [1, 1.02, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About Us
            </motion.h2>
          </ScrollView>
          <ScrollView>
            <p>
            Irenic Events stands at the forefront of experiential event management, operating globally to transform creative concepts into tangible, unforgettable realities. Founded on a bedrock of passion for detail and a commitment to excellence, we specialize in designing and delivering immersive events, impactful exhibitions, and perfectly curated MICE experiences.
            <br />
            <br />
            We are more than just planners; we are strategic partners dedicated to understanding your objectives and driving sustainable value for your business. Our holistic approach ensures meticulous planning, seamless execution, and a focus on building lasting relationships through powerful, shared experiences.
            </p>
          </ScrollView>
        </div>
        <ScrollView>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-lg"
          >
            <Image
              className="rounded-lg grayscale-[0.3] hover:grayscale-0 object-cover aspect-[16/9] w-full transition-all duration-700"
              src="/images/office.jpeg"
              alt="team image"
              height="480"
              width="720"
              loading="lazy"
            />
          </motion.div>
        </ScrollView>
        <ScrollView>
          <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
            {ourPrinciples.map((principle, index) => (
              <motion.div 
                className="space-y-3 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300 group"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className="text-primary"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Circle className="size-4 fill-current" />
                  </motion.div>
                  <h3 className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
