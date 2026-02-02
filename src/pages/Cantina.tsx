import { SimplePage } from "@/pages/_shared/SimplePage";
import { useI18n } from "@/i18n/I18nProvider";

export default function Cantina() {
  const { t } = useI18n();
  return (
    <SimplePage title={t("page_cantina_title")}>
      <p className="text-muted-foreground">Página Cantina/Cafeteria (UI + rotas).</p>
    </SimplePage>
  );
}
