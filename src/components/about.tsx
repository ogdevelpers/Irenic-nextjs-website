import { Circle, Cpu, Lock, Sparkles, Zap } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";

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
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              About Us
            </h2>
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
          <Image
            className="rounded-(--radius) grayscale-75 object-cover aspect-[16/9] w-full"
            src="/images/office.jpeg"
            alt="team image"
            height="480"
            width="720"
            loading="lazy"
          />
        </ScrollView>
        <ScrollView>
          <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
            {ourPrinciples.map((principle, index) => (
              <div className="space-y-3" key={index}>
                <div className="flex items-center gap-2">
                  <Circle className="size-4" />
                  <h3 className="text-sm font-medium">{principle.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
