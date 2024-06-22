import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Guide(){
  return <div className="w-full h-screen flex flex-col gap-5 justify-center items-center">
  <div className="w-3/5 text-xs lg:text-base space-y-2 md:space-y-5">
    <div className="space-y-2">
    <h1 className="text-xs md:text-5xl lg:text-7xl">Guide</h1>
    <p className="hidden md:block text-orange-400">Do read, if you&apos;re not well versed with LLM&apos;s. (not that tough, but important.)</p>
    </div>
    <Separator className="" />
    <ul className="space-y-2 overflow-scroll ">
      <li>- Download and Install LLocal.</li>
      <li>- If you&apos;ve not installed Ollama, let LLocal guide you on that. Follow each step prompted, and LLocal will download the installer for you. This would take about 2 minutes.</li>
      <li>- Now that, LLocal and Ollama are both setup you can, start downloading models. This can be done through the <span className="text-orange-400">Pull a model section in settings</span>, which can be accessed through the command centre of the sidebar.</li>
      <li>- There are some recommendations below the Pull a model section, but I feel a general consumer should have slightly more knowledge on what model is correct for them.<span className="text-orange-400"> If you are not interested and just want to get going, then pull phi3 or gemma:2b</span>.</li>
      <li>- So the model you use llocally depends a lot more on your machine than your choice, so if you have a dedicated graphics card with 6-8GB of VRAM you can make use of models around 7-8B parameters if you&abos;re machine has no VRAM or lesser than 6GB I would highly recommend models with 3.5B parameters and lesser to be run <br /> (like tinyllama, gemma:2b, phi3, etc.).</li>
      <li>- You can find out about the supported models via <Link href="https://www.ollama.ai/library" target="_blank">Ollama.ai</Link></li>
      <li>- Voila! You&apos;re all set now!</li>
    </ul>
    <Separator className="" />
    <p className="">For more information regarding supported models you can check out: <Link href='https://www.ollama.com/library' target="_blank" className="text-orange-400 hover:underline transition-all">ollama.ai/library</Link> </p>
  </div>

</div>
}