"use client";
import { CustomCursorElement } from "@/components/custom-cursor-element";
import { InView } from "@/components/motion-primitives/in-view";
import { ScrollView, ScrollViewStaggerWrapper } from "@/components/scroll-view";
import { Badge } from "@/components/ui/badge";
import { SERVICES_LIST } from "@/content/services";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function ServicesSection2() {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden" id="services">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
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
            Comprehensive Event Management
            </motion.h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>
            At Irenic Events, we offer a diverse portfolio of services designed to bring your vision to life, regardless of scale or complexity. 
            <br /> 
            From meticulous planning to flawless execution, we manage every detail to ensure your event is engaging, impactful, and perfectly aligned with your objectives.
            <br />
            Explore our core offerings below.
            </p>
          </ScrollView>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="space-y-10">
            {SERVICES_LIST.map((service, index) => (
              <motion.div
                key={service.name}
                className="group overflow-hidden border-b border-primary/20 py-10 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ 
                  backgroundColor: "oklch(0.65 0.22 60 / 0.03)",
                  paddingLeft: "1rem",
                }}
              >
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                  <div className="self-end lg:col-span-2">
                    <div className="flex flex-col gap-8 ">
                      <div className="space-y-4">
                        <ScrollView>
                          <motion.h3 
                            className="text-title text-2xl font-medium group-hover:text-primary transition-colors duration-300"
                            whileHover={{ x: 5 }}
                          >
                            {service.name}
                          </motion.h3>
                        </ScrollView>

                        <ScrollView stagger delay={0.04}>
                          <div>
                            {service.tags.map((tag, tagIndex) => (
                              <motion.div 
                                key={tagIndex} 
                                className="inline-block"
                                whileHover={{ scale: 1.1, rotate: 2 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <ScrollViewStaggerWrapper>
                                  <Badge
                                    className="mr-2 mb-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                                  >
                                    {tag}
                                  </Badge>
                                </ScrollViewStaggerWrapper>
                              </motion.div>
                            ))}
                          </div>
                        </ScrollView>
                      </div>
                      <ScrollView delay={0.04}>
                        <motion.p 
                          className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          {service.description}
                        </motion.p>
                      </ScrollView>
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <CustomCursorElement
                      cursor={
                        <div className="text-zinc-950 text-lg font-medium">
                          View
                        </div>
                      }
                    >
                      <InView
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: 20,
                            filter: "blur(14px)",
                            scale: 0.5,
                            originX: 0,
                            originY: 0,
                          },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            filter: "blur(0px)",
                            transition: {
                              delay: 0.01,
                              duration: 0.5,
                            },
                          },
                        }}
                        viewOptions={{
                          margin: "0px 0px -250px 0px",
                          once: true,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: 1 }}
                          transition={{ duration: 0.3 }}
                          className="relative overflow-hidden rounded-lg"
                        >
                          <Link href={service.url}>
                            <Image
                              src={service.img}
                              alt={service.name}
                              height="480"
                              width="720"
                              loading="lazy"
                              className="object-cover object-top transition-all duration-700 w-full aspect-[16/9] grayscale-[0.3] group-hover:grayscale-0"
                            />
                          </Link>
                        </motion.div>
                      </InView>
                    </CustomCursorElement>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
