import { Separator } from "@/view/components/ui/Separator";
import { VideoForm } from "./VideoForm";
import { SettingsForm } from "./SettingsForm";

export function AsideContent() {
  return (
    <aside className="w-80 space-y-6">
      <VideoForm />
      <Separator />
      <SettingsForm />
    </aside>
  );
}
