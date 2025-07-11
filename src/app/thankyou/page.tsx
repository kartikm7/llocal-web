"use client"

import AnimatedGradientBackground from "@/components/animated-gradient-background";
import AnimatedGradientText from "@/components/animated-gradient-text";
import AnimatedShinyText from "@/components/animated-shiny-text";
import { useRouter } from "next/navigation";

export default function Philosophy() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/guide")
  }
  return (
    <div className="relative w-full h-screen flex flex-col gap-5 justify-center items-center p-16 max-w-screen overflow-hidden">
      <div className="space-y-8">
        <h1 className="text-center motion-preset-focus-lg motion-duration-2000 font-libre text-4xl md:text-7xl">Thank <span className="italic">you!</span></h1>
        <div
          onClick={handleClick}
          className="motion-preset-slide-up motion-delay-1500 group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"

        >
          <AnimatedShinyText className="items-center text-center cursor-pointer text-sm md:text-base justify-center px-4 py-1 transition ease-out  hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 w-fit">
            New to LLMs? You can checkout this guide!
          </AnimatedShinyText>
        </div>
      </div>
      <AnimatedGradientBackground containerClassName="rotate-180 -z-10" />
    </div>
  );
}
