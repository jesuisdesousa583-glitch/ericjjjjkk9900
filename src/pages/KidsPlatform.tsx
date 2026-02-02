import { SimplePage } from "@/pages/_shared/SimplePage";
import { useI18n } from "@/i18n/I18nProvider";

export default function KidsPlatform() {
  const { t } = useI18n();
  return (
    <SimplePage title={t("page_kids_title")}>
      <p className="text-muted-foreground">Página Kids (UI + rotas).</p>
    </SimplePage>
  );
}
