
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Eye, Users, CreditCard, FileText, Image } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Image className="w-8 h-8" />,
      title: "Refinador de Criativos",
      description: "Remove metadados e altera hash das imagens para evitar detecção"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Refinador de Texto", 
      description: "Modifica textos com caracteres unicode invisíveis"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dados Brasileiros",
      description: "Gera CPF, endereços, nomes e dados completos válidos"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Cartões de Teste",
      description: "Números de cartão válidos para testes de anúncios"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Contas Falsas",
      description: "Emails e perfis para Gmail, Facebook e Instagram"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Simulador Cloaker",
      description: "Códigos de redirecionamento prontos para usar"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                ZuckSafe
              </span>
            </div>
            <Button 
              onClick={() => navigate('/login')}
              variant="outline" 
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
            >
              Fazer Login
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            ZuckSafe
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto animate-fade-in">
            A plataforma definitiva para gerar identidades falsas e evitar bloqueios em ads
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in">
            Você está a um clique de ter acesso à plataforma mais poderosa para gerar dados falsos, 
            testar cadastros, evitar bloqueios e simular criativos como um profissional.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-bold px-8 py-6 text-lg animate-scale-in"
              onClick={() => window.open('https://pay.perfectpay.com.br', '_blank')}
            >
              LIBERE SEU ACESSO POR R$97 - VITALÍCIO
            </Button>
            <p className="text-sm text-gray-500">
              Após a compra, acesse com o mesmo email usado na compra
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Por que escolher o ZuckSafe?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">100% Seguro</h3>
              <p className="text-gray-400">Dados gerados localmente, sem armazenamento em servidores</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Para Profissionais</h3>
              <p className="text-gray-400">Desenvolvido para media buyers, afiliados e profissionais de ads</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Acesso Vitalício</h3>
              <p className="text-gray-400">Pague uma vez e tenha acesso para sempre</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold text-white">ZuckSafe</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 ZuckSafe. Todos os direitos reservados. Sem reembolso.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
