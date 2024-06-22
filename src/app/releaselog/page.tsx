import Markdown from "react-markdown";
import file from "../../../public/changelog.md";
import remarkGfm from "remark-gfm";
import "github-markdown-css";
import { Separator } from "@/components/ui/separator";
export default function Changelog() {
  return (
    <div className="w-full py-24 md:py-48 flex flex-col gap-5 justify-start items-center">
      <div className="w-3/5 text-xs lg:text-base space-y-2 md:space-y-5">
        <h1 className="text-2xl md:text-7xl">Release log</h1>
        <Separator />
        <div className="markdown-body overflow-scroll h-[50%] !bg-transparent">
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: (props) => (
                <a href={props.href} className="!text-orange-400 opacity-90 hover:opacity-100 transition-all">
                  {props.children}
                </a>
              ),
            }}
          >
            {file}
          </Markdown>
        </div>
      </div>
    </div>
  );
}
