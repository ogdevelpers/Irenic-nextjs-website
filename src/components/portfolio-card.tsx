"use client";
import Image from "next/image";
import { CustomCursorElement } from "./custom-cursor-element";
import { ScrollView } from "./scroll-view";
import { motion } from "motion/react";

export default function PortfolioCard({
  card,
}: {
  card: {
    name: string;
    description: string;
    img: string;
    url: string;
  };
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <CustomCursorElement
        cursor={<div className="text-zinc-950 text-lg font-medium">View</div>}
      >
        <ScrollView>
          <motion.div 
            className="group relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.03, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <a href={card.url} target="_blank" rel="noreferrer" className="block">
              <div className="relative overflow-hidden rounded-md">
                <Image
                  className="w-full grayscale-[0.3] group-hover:grayscale-0 rounded-md object-cover object-top transition-all duration-700"
                  height="480"
                  width="720"
                  src={card.img}
                  alt={card.name}
                />
              </div>
              <motion.div 
                className="mt-4"
                initial={{ x: 0 }}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-title text-2xl font-medium group-hover:text-primary transition-colors duration-300">
                  {card.name}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {card.description}
                </p>
              </motion.div>
            </a>
          </motion.div>
        </ScrollView>
      </CustomCursorElement>
    </motion.div>
  );
}
