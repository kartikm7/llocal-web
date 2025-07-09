import { Separator } from "@/components/ui/separator";

export default function Philosophy() {
  return (
    <div className="w-full h-screen flex flex-col gap-5 justify-center items-center">
      <div className="w-3/5 text-xs md:text-base space-y-5">
        <h1 className="text-2xl md:text-7xl font-libre">Philosophy</h1>
        <Separator className="" />
        <p>
          The reason behind <span className="font-semibold">LLocal</span> is that there are so many client platforms,
          but they are all aimed at developers and enthusiasts but none of them are <span className="font-semibold">aimed at the general public.</span>
        </p>
        <p>
          To address this and make the process of utilizing Large Language Models easier I have built LLocal.
          The process of hosting and running is done by Ollama, which is bundled with LLocal.
          The idea of utilizing <span className="font-semibold">LLocally</span> (haha I feel like the joke is getting old) running LLM&apos;s ensures that your data is with you.
          With <span className="font-semibold">LLocal</span> and <span className="font-semibold">Ollama</span>, <span className="font-semibold">your data is stored safely in your own machine.</span> Further, making LLocal <span className="font-semibold">open sourced</span> means
          <span className="font-semibold"> anyone and everyone can possibly contribute </span> and if not be able to contribute <span className="font-semibold">at the very least can learn from the project.</span>
        </p>
        <p>
          That was and is my thought process. <br />
          <span className="font-semibold">Kartikeya Mishra.</span>
        </p>
      </div>
    </div>
  );
}
