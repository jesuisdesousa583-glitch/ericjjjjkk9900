import { useParams, Link } from "react-router-dom";
import { SimplePage } from "@/pages/_shared/SimplePage";

const TITLE_BY_SLUG: Record<string, string> = {
  diaconato: "Diaconato",
  interseccao: "Intersecção",
  "irmaos-a-obra": "Irmãos a Obra",
  cantina: "Cantina",
  "ministerio-de-casais": "Ministério de Casais",
  "grupo-de-senhoras": "Grupo de Senhoras",
  "ministerio-infantil": "Ministério Infantil",
};

export default function MinisterioDetalhe() {
  const { slug } = useParams();
  const title = (slug && TITLE_BY_SLUG[slug]) || "Ministério";

  return (
    <SimplePage title={title}>
      <p className="text-muted-foreground">Detalhe do ministério “{slug}” (UI + rotas).</p>
      <div className="mt-6">
        <Link to="/ministerios" className="underline underline-offset-4">
          Voltar para ministérios
        </Link>
      </div>
    </SimplePage>
  );
}
