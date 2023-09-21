import { Textarea } from "@/view/components/ui/Textarea";

export function GeneratedContent() {
  return (
    <div className="flex flex-col flex-1 gap-4">
      <div className="grid grid-rows-2 gap-4 flex-1">
        <Textarea
          placeholder="Inclua o prompt para a IA..."
          readOnly
          className="resize-none p-4 leading-relaxed"
        />
        <Textarea
          placeholder="Resultado gerado pela IA..."
          readOnly
          className="resize-none p-4 leading-relaxed"
        />
      </div>

      <p className="text-sm text-muted-foreground">
        Lembre-se: você pode utilizar a variável{" "}
        <code className="font-bold text-blue-900">{"{transcription} "}</code>
        no seu prompt para adicionar o conteúdo da transcrição do vídeo
        selecionado.
      </p>
    </div>
  );
}
