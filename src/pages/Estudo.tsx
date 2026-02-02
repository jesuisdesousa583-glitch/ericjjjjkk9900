import { SimplePage } from "@/pages/_shared/SimplePage";
import { useI18n } from "@/i18n/I18nProvider";

export default function Estudo() {
  const { t } = useI18n();
  return (
    <SimplePage title={t("page_estudo_title")}>
      <p className="text-muted-foreground">
        Conteúdo do estudo bíblico (UI replicada). Depois conectamos os textos e seções exatas do ZIP.
      </p>
    </SimplePage>
  );
}
