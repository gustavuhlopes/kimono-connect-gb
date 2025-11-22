import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Shield, MapPin, Zap, Package, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-heading font-bold text-primary">KIMONO GLOBE</h1>
            <div className="flex gap-4">
              <Link to="/partner">
                <Button variant="ghost">Parceiro</Button>
              </Link>
              <Link to="/admin">
                <Button variant="ghost">Admin</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Treine em Qualquer<br />
              <span className="text-primary">Academia GB</span> do Mundo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Alugue kimonos oficiais Gracie Barra com higiene garantida. 
              Sem peso na mala, sem preocupações.
            </p>
          </div>

          {/* Booking Form */}
          <Card className="card-elevated p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Cidade</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a cidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sao-paulo">São Paulo, SP</SelectItem>
                    <SelectItem value="rio">Rio de Janeiro, RJ</SelectItem>
                    <SelectItem value="brasilia">Brasília, DF</SelectItem>
                    <SelectItem value="curitiba">Curitiba, PR</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tamanho</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tamanho" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a1">A1</SelectItem>
                    <SelectItem value="a2">A2</SelectItem>
                    <SelectItem value="a3">A3</SelectItem>
                    <SelectItem value="a4">A4</SelectItem>
                    <SelectItem value="a5">A5</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Data de Retirada</label>
                <Input type="date" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Data de Devolução</label>
                <Input type="date" />
              </div>
            </div>

            <div className="text-center">
              <Button className="btn-hero w-full md:w-auto">
                BUSCAR KIMONOS DISPONÍVEIS
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                A partir de <strong className="text-primary">R$ 70/dia</strong>
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-heading font-bold text-center mb-12">
            Por Que Escolher a KIMONO GLOBE?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-heading font-bold mb-3">Higiene Inegociável</h4>
              <p className="text-muted-foreground">
                Lavagem industrial certificada após cada uso. Embalagem selada e rastreável.
              </p>
            </Card>

            <Card className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-heading font-bold mb-3">Em Qualquer Lugar</h4>
              <p className="text-muted-foreground">
                Rede de academias GB parceiras em diversas cidades. Retire e devolva com facilidade.
              </p>
            </Card>

            <Card className="card-elevated p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-heading font-bold mb-3">Processo Rápido</h4>
              <p className="text-muted-foreground">
                Reserva online em minutos. QR Code para retirada instantânea na academia.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-heading font-bold text-center mb-4">
            Nossa Logística
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Desenvolvemos um sistema que garante qualidade e conveniência em cada etapa
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-elevated p-8">
              <div className="flex items-start gap-4 mb-4">
                <Package className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-heading font-bold mb-2">MVP Atual</h4>
                  <p className="text-muted-foreground mb-4">
                    Containers selados nas academias parceiras com coleta por courier agendada. 
                    Recepcionista faz check-in/check-out usando nosso painel.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Container selado para kimonos sujos</li>
                    <li>✓ Prateleiras para kimonos limpos</li>
                    <li>✓ Rastreamento por QR Code</li>
                    <li>✓ Logística de courier otimizada</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="card-elevated p-8 border-primary/20">
              <div className="flex items-start gap-4 mb-4">
                <Lock className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-heading font-bold mb-2">Visão Futura</h4>
                  <p className="text-muted-foreground mb-4">
                    Smart Lockers com acesso 24/7, eliminando a necessidade do recepcionista. 
                    Totalmente automatizado com sensores inteligentes.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>⚡ Acesso 24/7 sem recepcionista</li>
                    <li>⚡ Sensores de volume para coleta automática</li>
                    <li>⚡ Código de acesso personalizado</li>
                    <li>⚡ Divisórias inteligentes limpo/sujo</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-heading font-bold mb-6">
            Pronto Para Treinar?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Reserve seu kimono agora e treine com confiança em qualquer academia GB
          </p>
          <Button 
            size="lg" 
            className="bg-background text-primary hover:bg-background/90 font-heading font-bold uppercase px-8 py-6 text-lg"
          >
            Reservar Kimono Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="font-heading font-bold mb-3">KIMONO GLOBE</h5>
              <p className="text-sm text-muted-foreground">
                Facilitando o treino de Jiu-Jitsu para viajantes em todo o mundo.
              </p>
            </div>
            <div>
              <h5 className="font-heading font-bold mb-3">Links Rápidos</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Como Funciona</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Academias Parceiras</a></li>
                <li><Link to="/partner" className="text-muted-foreground hover:text-primary">Portal do Parceiro</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-heading font-bold mb-3">Contato</h5>
              <p className="text-sm text-muted-foreground">
                contato@kimonoglobe.com<br />
                +55 (11) 9999-9999
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2025 KIMONO GLOBE. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
