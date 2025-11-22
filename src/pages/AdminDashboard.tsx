import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Users, TrendingUp, Truck, LogOut, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-heading font-bold text-primary">KIMONO GLOBE</h1>
              <p className="text-sm text-muted-foreground">Painel Administrativo Central</p>
            </div>
            <Button variant="ghost" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="card-elevated p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Kimonos</p>
                <p className="text-3xl font-heading font-bold">248</p>
              </div>
            </div>
          </Card>

          <Card className="card-elevated p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Academias Parceiras</p>
                <p className="text-3xl font-heading font-bold">15</p>
              </div>
            </div>
          </Card>

          <Card className="card-elevated p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Receita (Mês)</p>
                <p className="text-3xl font-heading font-bold">R$ 18K</p>
              </div>
            </div>
          </Card>

          <Card className="card-elevated p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Coletas Pendentes</p>
                <p className="text-3xl font-heading font-bold">3</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Tabs */}
        <Card className="card-elevated p-8">
          <Tabs defaultValue="inventory" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="inventory" className="font-heading">
                Inventário
              </TabsTrigger>
              <TabsTrigger value="partners" className="font-heading">
                Parceiros
              </TabsTrigger>
              <TabsTrigger value="logistics" className="font-heading">
                Logística
              </TabsTrigger>
              <TabsTrigger value="reports" className="font-heading">
                Relatórios
              </TabsTrigger>
            </TabsList>

            {/* Inventory Tab */}
            <TabsContent value="inventory">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-heading font-bold">Gestão de Inventário</h2>
                  <Button className="btn-hero">
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar Kimono
                  </Button>
                </div>

                <div className="grid gap-4">
                  {[
                    { id: "KG-001", size: "A3", location: "GB Centro - SP", status: "LIMPO", cycles: 12 },
                    { id: "KG-002", size: "A2", location: "GB Ipanema - RJ", status: "SUJO", cycles: 8 },
                    { id: "KG-003", size: "A4", location: "GB Asa Sul - DF", status: "LIMPO", cycles: 15 },
                    { id: "KG-004", size: "A3", location: "GB Centro - SP", status: "EM MANUTENÇÃO", cycles: 24 },
                  ].map((kimono) => (
                    <Card key={kimono.id} className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-6">
                          <div>
                            <p className="text-sm text-muted-foreground">ID</p>
                            <p className="font-heading font-bold">{kimono.id}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Tamanho</p>
                            <p className="font-medium">{kimono.size}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Localização</p>
                            <p className="font-medium">{kimono.location}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Ciclos</p>
                            <p className="font-medium">{kimono.cycles}</p>
                          </div>
                        </div>
                        <div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            kimono.status === "LIMPO" ? "bg-green-100 text-green-700" :
                            kimono.status === "SUJO" ? "bg-yellow-100 text-yellow-700" :
                            "bg-red-100 text-red-700"
                          }`}>
                            {kimono.status}
                          </span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Partners Tab */}
            <TabsContent value="partners">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-heading font-bold">Academias Parceiras</h2>
                  <Button className="btn-hero">
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar Parceiro
                  </Button>
                </div>

                <div className="grid gap-4">
                  {[
                    { name: "GB Centro", city: "São Paulo, SP", rentals: 85, commission: 15 },
                    { name: "GB Ipanema", city: "Rio de Janeiro, RJ", rentals: 72, commission: 15 },
                    { name: "GB Asa Sul", city: "Brasília, DF", rentals: 45, commission: 15 },
                  ].map((partner) => (
                    <Card key={partner.name} className="p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-heading font-bold text-lg mb-1">{partner.name}</h3>
                          <p className="text-muted-foreground">{partner.city}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Aluguéis (mês)</p>
                          <p className="text-2xl font-heading font-bold">{partner.rentals}</p>
                          <p className="text-sm text-muted-foreground">Comissão: {partner.commission}%</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Logistics Tab */}
            <TabsContent value="logistics">
              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-bold">Logística e Courier</h2>

                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="font-heading font-bold text-lg mb-4">Coletas Pendentes</h3>
                  <div className="space-y-3">
                    {[
                      { location: "GB Centro - SP", dirty: 8, status: "Pronto para coleta" },
                      { location: "GB Ipanema - RJ", dirty: 6, status: "Pronto para coleta" },
                      { location: "GB Asa Sul - DF", dirty: 3, status: "Aguardando limite (5)" },
                    ].map((item) => (
                      <div key={item.location} className="flex justify-between items-center p-4 bg-background rounded-lg">
                        <div>
                          <p className="font-medium">{item.location}</p>
                          <p className="text-sm text-muted-foreground">{item.dirty} kimonos sujos</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm">{item.status}</span>
                          {item.dirty >= 5 && (
                            <Button className="btn-hero">
                              Agendar Coleta
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-4">Histórico de Rotas</h3>
                  <div className="space-y-3">
                    {[
                      { date: "20/01/2025", route: "SP Centro → Lavanderia", kimonos: 15, status: "Concluído" },
                      { date: "18/01/2025", route: "RJ Ipanema → Lavanderia", kimonos: 12, status: "Concluído" },
                      { date: "15/01/2025", route: "DF Asa Sul → Lavanderia", kimonos: 8, status: "Concluído" },
                    ].map((route, idx) => (
                      <div key={idx} className="flex justify-between items-center p-4 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{route.route}</p>
                          <p className="text-sm text-muted-foreground">{route.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{route.kimonos} kimonos</p>
                          <p className="text-sm text-green-600">{route.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Reports Tab */}
            <TabsContent value="reports">
              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-bold">Relatórios Financeiros</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="font-heading font-bold mb-4">Receita por Academia</h3>
                    <div className="space-y-3">
                      {[
                        { name: "GB Centro - SP", revenue: "R$ 5.950" },
                        { name: "GB Ipanema - RJ", revenue: "R$ 5.040" },
                        { name: "GB Asa Sul - DF", revenue: "R$ 3.150" },
                      ].map((item) => (
                        <div key={item.name} className="flex justify-between items-center">
                          <p className="text-muted-foreground">{item.name}</p>
                          <p className="font-heading font-bold text-primary">{item.revenue}</p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-heading font-bold mb-4">Custos Operacionais</h3>
                    <div className="space-y-3">
                      {[
                        { item: "Lavanderia (Janeiro)", cost: "R$ 3.200" },
                        { item: "Courier (Janeiro)", cost: "R$ 1.800" },
                        { item: "Comissões (Janeiro)", cost: "R$ 2.700" },
                      ].map((item) => (
                        <div key={item.item} className="flex justify-between items-center">
                          <p className="text-muted-foreground">{item.item}</p>
                          <p className="font-heading font-bold">{item.cost}</p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6 md:col-span-2">
                    <h3 className="font-heading font-bold mb-4">Payback por Kimono</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Custo médio por kimono: <strong>R$ 350</strong></p>
                      <p>Receita média por aluguel: <strong>R$ 70/dia</strong></p>
                      <p>Média de dias por aluguel: <strong>3 dias</strong></p>
                      <p>Payback estimado: <strong className="text-primary text-lg">~7 aluguéis (21 dias de uso)</strong></p>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
