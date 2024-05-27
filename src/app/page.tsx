import DotPattern from "@/components/dot-pattern";
import Demo from "../../public/llocal-large.png";
import DemoDeepBlue from "../../public/llocal-deepblue.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BeamButton } from "./beam-button";
import { NavbarItem, NavbarLayout } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/border-beam";
import AnimatedGradientText from "@/components/animated-gradient-text";
import { MagicCard, MagicContainer } from "@/components/magic-card";
import { Separator } from "@/components/ui/separator";
import { ContainerScroll } from "@/components/container-scroll-animation";
import AnimatedShinyText from "@/components/animated-shiny-text";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <div className="hero flex flex-col w-full min-h-screen justify-center items-center ">
        <ContainerScroll
          titleComponent={
            <div className="text-center flex flex-col justify-center items-center gap-5 md:mb-20">
              <div>
                <h1 className="font-light text-8xl">llocal</h1>
                <p className="">
                  a fully open sourced client for utilizing <br /> locally
                  running large language models
                </p>
              </div>
              <BeamButton className="text-2xl p-6">Download</BeamButton>
              <p className="opacity-75">
                100k+ Downloads | Free & Open Source
              </p>
            </div>
          }
        >
          <div className="flex flex-col gap-2">
          <Image src={Demo} alt="llocal screenshot" className="object-cover rounded-2xl"/>
          <Image src={DemoDeepBlue} alt="llocal screenshot" className=" md:hidden object-cover rounded-2xl"/>            
          </div>
        </ContainerScroll>

        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "opacity-50 h-screen [mask-image:linear-gradient(to_right,white,transparent,transparent)]"
          )}
        />
      </div>
      <div className="features relative p-5 w-full h-screen flex flex-col justify-evenly items-center">
        <h1 className="text-7xl justify-self-start">Features</h1>
        <MagicContainer
          className={
            "flex h-[500px] justify-self-center text-light text-2xl w-5/6 flex-col gap-4 lg:h-[250px] lg:flex-row"
          }
        >
          <MagicCard className="flex flex-col justify-evenly gap-2">
            <h1 className="">Multiple Models</h1>
            <Separator />
            <p className="text-sm">{"Out of the box support, for Ollama. So you can use all possible open sourced LLM's like Llama 3, Gemma, Phi3, Mixtral and many more!"}</p>
          </MagicCard>
          <MagicCard className="flex flex-col  gap-2">
            <p className="">Themes</p>
            <Separator />
            <p className="text-sm">As of now, there are 5 themes to choose from all supporting both light and dark mode. <br /> <br />  </p>
          </MagicCard>
          <MagicCard className="flex flex-col gap-2">
            <p className="">Privacy</p>
            <Separator />
            <p className="text-sm">All your data is stored llocally, all the models run llocally. (hahaha) <br /> <br /> </p>
          </MagicCard>
        </MagicContainer>
        <AnimatedGradientText className="font-light">Other than this, llocal can do everything expected out of the box!</AnimatedGradientText>
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "opacity-50 h-screen [mask-image:linear-gradient(to_left,white,transparent,transparent)]"
          )}
        />
      </div>
    </main>
  );
}
