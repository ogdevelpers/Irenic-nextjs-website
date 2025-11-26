"use client";
import PortfolioCard from "@/components/portfolio-card";
import { PORTFOLIO_CONTENT } from "@/content/portfolio";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { ScrollView } from "@/components/scroll-view";

export default function PortfolioSection() {
  return (
    <section
      className="py-16 md:py-32 bg-gray-50 dark:bg-transparent relative overflow-hidden"
      id="portfolio"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="mx-auto max-w-5xl space-y-12 px-6 relative z-10">
        <motion.div 
          className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ScrollView>
            <h2 className="text-4xl font-semibold">
              The Irenic ecosystem brings together our models
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="max-w-sm sm:ml-auto">
            Showcasing Memorable Experiences We have Crafted for Our Clients
            </p>
          </ScrollView>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {PORTFOLIO_CONTENT.map((item, index) => (
            <motion.div 
              key={index} 
              className={index % 2 === 1 ? "md:mt-20" : ""}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <PortfolioCard card={item} />
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#link"
              className="hover:bg-primary/10 dark:hover:border-primary/50 bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border border-primary/20 p-1 pl-4 shadow-md shadow-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <span className="text-foreground text-base group-hover:text-primary transition-colors duration-300">Explore Projects</span>
              <span className="dark:border-background block h-8 w-1 border-l bg-primary/30 dark:bg-primary/50"></span>

              <motion.div 
                className="bg-primary group-hover:bg-primary size-8 overflow-hidden rounded-full duration-500 -rotate-45"
                whileHover={{ rotate: -45 }}
              >
                <div className="flex w-16 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                  <span className="flex size-8">
                    <ArrowRight className="m-auto size-4 text-primary-foreground" />
                  </span>
                  <span className="flex size-8">
                    <ArrowRight className="m-auto size-4 text-primary-foreground" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
