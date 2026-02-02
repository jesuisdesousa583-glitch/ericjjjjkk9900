import { SimplePage } from "@/pages/_shared/SimplePage";
import { useI18n } from "@/i18n/I18nProvider";

export default function Missoes() {
  const { t } = useI18n();
  return (
    <SimplePage title={t("page_missoes_title")}>
      <p className="text-muted-foreground">Página Missões (UI + rotas).</p>
    </SimplePage>
  );
}
