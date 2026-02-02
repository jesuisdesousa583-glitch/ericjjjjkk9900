import { SimplePage } from "@/pages/_shared/SimplePage";
import { useI18n } from "@/i18n/I18nProvider";

export default function MinisterioJovens() {
  const { t } = useI18n();
  return (
    <SimplePage title={t("page_jovens_title")}>
      <p className="text-muted-foreground">Página do Ministério dos Jovens (UI + rotas).</p>
    </SimplePage>
  );
}
