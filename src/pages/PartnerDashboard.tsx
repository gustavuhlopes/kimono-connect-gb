import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Package, DollarSign, QrCode, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const PartnerDashboard = () => {
  const navigate = useNavigate();
  const [qrCode, setQrCode] = useState("");

  const handleLogout = () => {
    navigate("/partner");
  };

  const handleCheckIn = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement check-in logic
    console.log("Check-in:", qrCode);
    setQrCode("");
  };

  const handleCheckOut = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement check-out logic
    console.log("Check-out:", qrCode);
    setQrCode("");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-heading font-bold text-primary">KIMONO GLOBE</h1>
              <p className="text-sm text-muted-foreground">Academia GB Centro - São Paulo</p>
            </div>
            <Button variant="ghost" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="card-elevated p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Reservas Hoje</p>
                <p className="text-3xl font-heading font-bold">12</p>
              </div>
            </div>
          </Card>

          <Card className="card-elevated p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Próxima Coleta</p>
                <p className="text-xl font-heading font-bold">Em 2 horas</p>
              </div>
            </div>
          </Card>

          <Card className="card-elevated p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Comissão (Mês)</p>
                <p className="text-3xl font-heading font-bold">R$ 2.450</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Actions */}
        <Card className="card-elevated p-8">
          <Tabs defaultValue="checkin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="checkin" className="text-lg font-heading">
                Check-in (Retirada)
              </TabsTrigger>
              <TabsTrigger value="checkout" className="text-lg font-heading">
                Check-out (Devolução)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="checkin">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <QrCode className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-heading font-bold mb-2">Retirada de Kimono</h2>
                  <p className="text-muted-foreground">
                    Escaneie ou digite o código de reserva do cliente
                  </p>
                </div>

                <form onSubmit={handleCheckIn} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Código da Reserva</label>
                    <Input
                      type="text"
                      value={qrCode}
                      onChange={(e) => setQrCode(e.target.value)}
                      placeholder="XXXXXXXX ou escaneie QR Code"
                      className="text-center text-lg"
                      required
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full">
                    Confirmar Retirada
                  </Button>
                </form>

                <div className="mt-8 p-6 bg-muted rounded-lg">
                  <h3 className="font-heading font-bold mb-2">Instruções:</h3>
                  <ol className="text-sm text-muted-foreground space-y-2">
                    <li>1. Solicite o código de reserva do cliente</li>
                    <li>2. Digite ou escaneie o QR Code</li>
                    <li>3. O sistema indicará qual kimono entregar</li>
                    <li>4. Confirme a entrega com o cliente</li>
                  </ol>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="checkout">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <Package className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-heading font-bold mb-2">Devolução de Kimono</h2>
                  <p className="text-muted-foreground">
                    Escaneie a etiqueta do kimono devolvido
                  </p>
                </div>

                <form onSubmit={handleCheckOut} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Etiqueta do Kimono</label>
                    <Input
                      type="text"
                      value={qrCode}
                      onChange={(e) => setQrCode(e.target.value)}
                      placeholder="KG-XXXXX ou escaneie etiqueta"
                      className="text-center text-lg"
                      required
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full">
                    Confirmar Devolução
                  </Button>
                </form>

                <div className="mt-8 p-6 bg-muted rounded-lg">
                  <h3 className="font-heading font-bold mb-2">Instruções:</h3>
                  <ol className="text-sm text-muted-foreground space-y-2">
                    <li>1. Receba o kimono usado do cliente</li>
                    <li>2. Escaneie a etiqueta do kimono</li>
                    <li>3. O sistema mudará o status para SUJO</li>
                    <li>4. Deposite o kimono no Container Selado</li>
                  </ol>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Commission History */}
        <Card className="card-elevated p-8 mt-8">
          <h2 className="text-2xl font-heading font-bold mb-6">Histórico de Comissões</h2>
          <div className="space-y-4">
            {[
              { month: "Janeiro 2025", rentals: 85, commission: "R$ 2.450,00" },
              { month: "Dezembro 2024", rentals: 72, commission: "R$ 2.100,00" },
              { month: "Novembro 2024", rentals: 68, commission: "R$ 1.980,00" },
            ].map((item) => (
              <div key={item.month} className="flex justify-between items-center p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">{item.month}</p>
                  <p className="text-sm text-muted-foreground">{item.rentals} aluguéis</p>
                </div>
                <p className="text-xl font-heading font-bold text-primary">{item.commission}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PartnerDashboard;
