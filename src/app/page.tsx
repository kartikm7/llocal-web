import DotPattern from "@/components/dot-pattern";
import Demo from "../../public/llocal-large.png";
import DemoDeepBlue from "../../public/llocal-deepblue.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BeamButton } from "../components/beam-button";
import { NavbarItem, NavbarLayout } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/border-beam";
import AnimatedGradientText from "@/components/animated-gradient-text";
import { MagicCard, MagicContainer } from "@/components/magic-card";
import { Separator } from "@/components/ui/separator";
import { ContainerScroll } from "@/components/container-scroll-animation";
import AnimatedShinyText from "@/components/animated-shiny-text";
import { DownloadDropdown } from "@/components/download-dropdown";
import { Cursor } from "@/components/cursor";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <div className="hero flex flex-col w-full min-h-screen justify-center items-center ">
        <ContainerScroll
          titleComponent={
            <div className="text-center flex flex-col justify-center items-center gap-5 md:mb-20">
              <AnimatedGradientText className="text-xs p-1 md:p-2">
                ✨ Officially recognized by Ollama!
              </AnimatedGradientText>
              <div>
                <div>
                  <Cursor
                    attachToParent
                    variants={{
                      initial: { height: 0, opacity: 0, scale: 0.3 },
                      animate: { height: "auto", opacity: 1, scale: 1 },
                      exit: { height: 0, opacity: 0, scale: 0.3 },
                    }}
                    transition={{
                      type: "spring",
                      duration: 0.3,
                      bounce: 0.1,
                    }}
                    className="overflow-hidden"
                    springConfig={{
                      bounce: 0.01,
                    }}
                  >
                    <p className="text-xs backdrop-blur-lg p-2 rounded-full border-2 border-white border-opacity-50"><span className="font-semibold">Double L</span> for the <span className="font-semibold">LL in LLM</span>, <span className="italic">but could not fit in the M</span></p>
                  </Cursor>
                  <h1 className="font-light text-8xl">llocal</h1>

                </div>
                <p className="">
                  a fully open sourced client for utilizing <br /> locally
                  running large language models
                </p>
              </div>
              <DownloadDropdown>
                <div className="relative text-2xl font-light p-4 bg-foreground text-background rounded-lg hover:scale-95 hover:opacity-95 transition-all">
                  <h1>Download</h1>
                  <BorderBeam
                    borderWidth={2}
                    duration={12}
                    delay={9}
                    colorFrom="#FFE604"
                    colorTo="#FF00A8"
                  />
                </div>
              </DownloadDropdown>
              {/* <p className="opacity-75">Free & Open Source</p> */}
            </div>
          }
        >
          <div className="flex flex-col gap-2">
            <Image
              src={Demo}
              alt="llocal screenshot"
              className="object-cover rounded-2xl"
            />
            <Image
              src={DemoDeepBlue}
              alt="llocal screenshot"
              className=" md:hidden object-cover rounded-2xl"
            />
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
      <div className="features relative p-5 w-full flex flex-col justify-evenly items-center gap-5">
        <h1 className="text-7xl justify-self-start">Features</h1>
        <MagicContainer
          className={
            "grid grid-cols-1 md:grid-cols-3 w-5/6 gap-5 justify-items-center items-center text-light text-2xl"
          }
        >
          <MagicCard className="flex flex-col h-[250px] gap-2">
            <h1 className="">Chat with Files</h1>
            <Separator />
            <p className="text-sm">
              {"Seamlessly interact with PDF, PPTX, DOCX, CSV, and TXT files."}
            </p>
          </MagicCard>
          <MagicCard className="flex flex-col h-[250px] gap-2">
            <p className="">Web Search</p>
            <Separator />
            <p className="text-sm">
              You can not only perform a DuckDuckGo search but also make the LLM
              read content from a link.
            </p>
          </MagicCard>
          <MagicCard className="flex flex-col h-[250px] gap-2">
            <p className="">Images</p>
            <Separator />
            <p className="text-sm">
              Vision models are also supported so you can upload your images and
              chat with them!
            </p>
          </MagicCard>
          <MagicCard className="flex flex-col h-[250px] justify-evenly gap-2">
            <h1 className="">Multiple Models</h1>
            <Separator />
            <p className="text-sm">
              {
                "Out of the box support, for Ollama. So you can use all possible open sourced LLM's like Llama, Gemma, Phi, Mistral and many more!"
              }
            </p>
          </MagicCard>
          <MagicCard className="flex flex-col h-[250px]  gap-2">
            <p className="">Themes</p>
            <Separator />
            <p className="text-sm">
              As of now, there are 5 themes to choose from all supporting both
              light and dark mode. <br /> <br />{" "}
            </p>
          </MagicCard>
          <MagicCard className="flex flex-col h-[250px] gap-2">
            <p className="">Privacy</p>
            <Separator />
            <p className="text-sm">
              All your data is stored llocally, all the models run llocally.
              (hahaha) <br /> <br />{" "}
            </p>
          </MagicCard>
        </MagicContainer>
        <AnimatedGradientText className="font-light">
          Other than this, llocal can do everything expected out of the box!
        </AnimatedGradientText>
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
