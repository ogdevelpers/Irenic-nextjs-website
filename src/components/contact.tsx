"use client";
import { Mail, MapPin, PhoneCall, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ScrollView } from "./scroll-view";
import { motion } from "motion/react";

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-32 bg-gray-50 dark:bg-transparent relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <ScrollView>
                <motion.h2 
                  className="text-4xl font-semibold lg:text-5xl"
                  whileInView={{ scale: [1, 1.02, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Get in touch
                </motion.h2>
              </ScrollView>
              <ScrollView>
                <p className="mt-6">
                Reach out directly or visit us at our office. We are ready to discuss your next event.
                </p>
              </ScrollView>
            </div>
            <ScrollView delay={0.2}>
              <ul className="mt-8 divide-y divide-primary/20 border-y border-primary/20 *:flex *:items-center *:gap-3 *:py-3">
                {[
                  { icon: Mail, text: "bhavin@irenicevents.com", href: "mailto:bhavin@irenicevents.com" },
                  { icon: PhoneCall, text: "+91 8097981084", href: "tel:+918097981084" },
                  { icon: Globe, text: "www.irenicevents.com", href: "#link" },
                  { icon: MapPin, text: "A - 101/102, Knox Plaza, Off Link Road Mindspace, Chincholi Bunder, Malad West, Mumbai, Maharashtra 400064", href: "#link" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 10 }}
                  >
                    <Link 
                      href={item.href} 
                      className="hover:text-primary transition-colors duration-300 group flex items-center gap-3"
                    >
                      <motion.div
                        className="text-primary group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                      >
                        <item.icon className="size-5" />
                      </motion.div>
                      <span>{item.text}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </ScrollView>
          </div>
          <div className="lg:col-span-3">
            <ScrollView>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="mx-auto mt-12 max-w-lg p-8 shadow-lg shadow-primary/10 sm:p-16 w-full border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div>
                  <h3 className="text-lg font-semibold">
                    Let&apos;s get you to the right place
                  </h3>
                  <p className="mt-4 text-sm">
                    Have a question or need a quote? Fill out the form below.
                  </p>
                </div>

                <form
                  action=""
                  className="**:[&>label]:block mt-12 space-y-6 *:space-y-3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <Label htmlFor="name">Full name</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      required 
                      className="focus:border-primary focus:ring-primary"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <Label htmlFor="email">Work Email</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      required 
                      className="focus:border-primary focus:ring-primary"
                    />
                  </motion.div>

                  {/* <div>
                            <Label htmlFor="country">Country/Region</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Country/Region" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">DR Congo</SelectItem>
                                    <SelectItem value="2">United States</SelectItem>
                                    <SelectItem value="3">France</SelectItem>
                                </SelectContent>
                            </Select>
                        </div> */}

                  {/* <div>
                            <Label htmlFor="website">Company Website</Label>
                            <Input type="url" id="website" />
                            <span className="text-muted-foreground inline-block text-sm">Must start with 'https'</span>
                        </div> */}

                  {/* <div>
                            <Label htmlFor="job">Job function</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Job Function" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Finance</SelectItem>
                                    <SelectItem value="2">Education</SelectItem>
                                    <SelectItem value="3">Legal</SelectItem>
                                    <SelectItem value="4">More</SelectItem>
                                </SelectContent>
                            </Select>
                        </div> */}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label htmlFor="msg">Message</Label>
                    <Textarea 
                      id="msg" 
                      rows={3} 
                      className="focus:border-primary focus:ring-primary"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Submit
                    </Button>
                  </motion.div>
                </form>
              </Card>
              </motion.div>
            </ScrollView>
          </div>
        </div>
      </div>
    </section>
  );
}
