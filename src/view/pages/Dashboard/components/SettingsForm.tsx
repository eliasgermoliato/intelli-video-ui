import { MagicWandIcon } from "@radix-ui/react-icons";
import { Button } from "@/view/components/ui/Button";
import { Label } from "@/view/components/ui/Label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/view/components/ui/Select";
import { Separator } from "@/view/components/ui/Separator";
import { Slider } from "@/view/components/ui/Slider";

export function SettingsForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label>Prompt</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione um prompt" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="title">Título do vídeo</SelectItem>
            <SelectItem value="description">Descrição do vídeo</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <div className="space-y-2">
        <Label>Modelo</Label>
        <Select disabled defaultValue="gpt-3.5">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gpt-3.5">GPT 3.5-turbo 16k</SelectItem>
          </SelectContent>
        </Select>
        <span className="block text-xs text-muted-foreground italic">
          Você poderá customizar essa opção em breve
        </span>
      </div>

      <Separator />

      <div className="space-y-3">
        <Label>Temperatura</Label>
        <Slider min={0} max={1} step={0.1} />
        <span className="block text-xs text-muted-foreground italic">
          Valores mais altos tendem a deixar o resultado mais criativo mas com
          possíveis erros
        </span>
      </div>

      <Separator />

      <Button
        type="submit"
        className="w-full bg-slate-950 hover:bg-slate-950/90"
      >
        Executar
        <MagicWandIcon className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
}
