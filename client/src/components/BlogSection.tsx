import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const BlogSection = () => {
  const articles = [
    {
      title: "Penhora Ilegal de Conta Bancária",
      description: "Saiba como identificar bloqueios indevidos e como se proteger.",
      buttonText: "Saiba mais",
      link: "https://bancos.lodiadvocacia.com.br",
      color: "bg-gray-900 border-blue-500"
    },
    {
      title: "Assédio Moral no Ambiente de Trabalho",
      description: "Direitos do trabalhador em situações de constrangimento ou abuso.",
      buttonText: "Entenda seus direitos",
      link: "https://trabalhista.lodiadvocacia.com.br",
      color: "bg-gray-900 border-green-500"
    },
    {
      title: "BPC Loas para Crianças Autistas",
      description: "Como funciona o acesso ao BPC para crianças com Transtorno do Espectro Autista.",
      buttonText: "Saiba como solicitar",
      link: "https://familia.lodiadvocacia.com.br",
      color: "bg-gray-900 border-red-500"
    },
    {
      title: "Revisão de Contratos de Financiamento",
      description: "Quando é possível discutir cláusulas abusivas em financiamentos.",
      buttonText: "Reveja seu contrato",
      link: "https://consumidor.lodiadvocacia.com.br",
      color: "bg-gray-900 border-yellow-500"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Artigos Recentes
          </h2>
          <p className="text-lg text-gray-300">
            Informações importantes sobre seus direitos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <Card key={index} className={`border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 ${article.color}`}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
                <Button 
                  variant="outline"
                  className="w-full group"
                  onClick={() => window.open(article.link, '_blank')}
                >
                  {article.buttonText}
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;