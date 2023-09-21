import { GeneratedContent } from "./components/GeneratedContent";
import { AsideContent } from "./components/AsideContent";
import { Button } from "@/view/components/ui/Button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full px-6 py-3 flex items-center justify-between border-b bg-slate-950 fixed">
        <h1 className="text-xl font-bold tracking-[-1px] text-white">
          intelli.video
        </h1>
        <div>
          <Button variant="secondary" className="">
            <GitHubLogoIcon className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </header>

      <main className="mt-11 flex-1 p-6 flex gap-6">
        <GeneratedContent />
        <AsideContent />
      </main>
    </div>
  );
}
