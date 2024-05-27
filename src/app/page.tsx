import DotPattern from "@/components/dot-pattern";
import Background from "../../public/gradient-bg.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BeamButton } from "./beam-button";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="text-center flex flex-col gap-5">
        <div>
          <h1 className="font-light text-8xl">llocal</h1>
          <p className="">
            a fully open sourced client for utilizing <br /> locally running
            large language models
          </p>
        </div>

        <BeamButton className="text-2xl p-6 font-light hover:scale-95  transition-all ">Download</BeamButton>
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "opacity-75 [mask-image:linear-gradient(to_top,white,transparent,transparent)] "
        )}
      />
    </main>
  );
}
