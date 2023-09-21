import { FileIcon, UploadIcon } from "@radix-ui/react-icons";
import { Button } from "../../../components/ui/Button";
import { Textarea } from "../../../components/ui/Textarea";
import { Label } from "../../../components/ui/Label";
import { Separator } from "../../../components/ui/Separator";

export function VideoForm() {
  return (
    <form className="space-y-6">
      <label
        htmlFor="video"
        className="w-full h-28 flex border rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/10"
      >
        <FileIcon className="w-4 h-4" />
        Selecione um vídeo
      </label>

      <input type="file" id="video" accept="video/mp4" className="sr-only" />

      <Separator />

      <div className="space-y-2">
        <Label htmlFor="transcription-prompt">Prompt de transcrição</Label>
        <Textarea
          id="transcription-prompt"
          className="h-20 leading-relaxed resize-none"
          placeholder="Inclua palavras-chaves mencionadas no vídeo separadas por vírgula (,)"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-slate-950 hover:bg-slate-950/90"
      >
        Carregar vídeo
        <UploadIcon className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
}
