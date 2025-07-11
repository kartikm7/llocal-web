"use client"
import AnimatedGradientText from "@/components/animated-gradient-text";
import AnimatedShinyText from "@/components/animated-shiny-text";
import { DownloadDropdown } from "@/components/download-dropdown";
import { MagicCard, MagicContainer } from "@/components/magic-card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container font-libre">
      <div id="root-section" className="flex flex-col w-full h-full justify-center items-center md:p-16">
        <div className="flex flex-col w-full mt-32 justify-center items-center gap-8">
          <div
            className="motion-preset-focus-lg motion-delay-2000 group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"

          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out  hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span className="font-poppins text-sm md:text-base">✨ Recognized by Ollama</span>
            </AnimatedShinyText>
          </div>
          <h1 id="main-text" className="font-libre text-center motion-preset-focus motion-duration-2000 motion-ease-in-out lg:text-left text-4xl md:text-7xl"><span className="italic">Seamless, private</span> and <span className="italic">powerful</span><br />chatting experience</h1>
          <DownloadDropdown>
            <h1 className="motion-preset-slide-up-lg motion-delay-1000 rounded-lg p-4 px-8 w-full bg-foreground text-background text-2xl md:text-4xl">
              Download
            </h1>
          </DownloadDropdown>
          <h2 className="font-poppins motion-preset-slide-up-lg motion-delay-1500 text-sm">7.5k+ Downloads | Free & Open sourced</h2>
        </div>
        <div className="h-full w-full relative mt-16">
          <Image src="/llocal-deepblue.png" alt="a screenshot of the llocal software with it's deepblue background" height={800} width={1200} className="rounded-2xl mx-auto motion-preset-focus motion-delay-1500 motion-duration-2000 motion-ease-in-out" quality={100} />
          <div className="hidden dark:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10
                  h-full w-full max-w-[1200px] opacity-60 blur-[600px] scale-y-105 scale-x-105
                  bg-[conic-gradient(at_top_left,_#3D56C0,_#0057FF)]">
          </div>
        </div>
        <div className="features relative w-full flex flex-col justify-evenly items-center gap-5 mt-16 font-poppins">
          <h1 className="text-4xl md:text-6xl justify-self-start">Features</h1>
          <MagicContainer
            className={
              "grid grid-cols-1 md:grid-cols-3  gap-5 justify-items-center items-center text-light text-2xl"
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
        </div>
      </div>
    </main>
  );
}
