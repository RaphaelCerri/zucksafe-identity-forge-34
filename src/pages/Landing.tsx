import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Eye, Users, CreditCard, FileText, Image, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Landing = () => {
  const navigate = useNavigate();
  const zuckSafeFeatures = [{
    icon: <Image className="w-8 h-8" />,
    title: "Refinador de Criativos",
    description: "Remove metadados e altera hash das imagens para evitar detecção"
  }, {
    icon: <FileText className="w-8 h-8" />,
    title: "Refinador de Texto",
    description: "Modifica textos com caracteres unicode invisíveis"
  }, {
    icon: <Users className="w-8 h-8" />,
    title: "Dados Brasileiros",
    description: "Gera CPF, endereços, nomes e dados completos válidos"
  }, {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Cartões de Teste",
    description: "Números de cartão válidos para testes de anúncios"
  }, {
    icon: <Shield className="w-8 h-8" />,
    title: "Contas Falsas",
    description: "Emails e perfis para Gmail, Facebook e Instagram"
  }, {
    icon: <Eye className="w-8 h-8" />,
    title: "Simulador Cloaker",
    description: "Códigos de redirecionamento prontos para usar"
  }];
  const zuckSafeAdsFeatures = [{
    icon: <Users className="w-8 h-8" />,
    title: "Contas Ads Aquecidas",
    description: "Contas simuladas com alto limite de Business Managers"
  }, {
    icon: <BarChart className="w-8 h-8" />,
    title: "Dados Estratégicos",
    description: "Perfis otimizados para performance em campanhas"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
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
            <div className="flex space-x-4">
              
              
            </div>
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
            Escolha sua plataforma: gere dados fake com precisão ou crie contas simuladas aquecidas com potencial de alto desempenho em campanhas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-16 max-w-6xl mx-auto">
            {/* ZuckSafe Card */}
            <Card className="bg-gray-800/50 border-gray-700 hover:border-cyan-400 transition-all duration-300 p-6 animate-fade-in">
              <CardContent className="p-0 space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-black" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white">ZuckSafe</h2>
                <p className="text-gray-300">
                  Plataforma completa para geração de dados falsos, cartões de teste, contas simuladas e refinamento de criativos.
                </p>
                <Button size="lg" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-bold py-6" onClick={() => window.open('https://pay.perfectpay.com.br', '_blank')}>
                  GERAR IDENTIDADES FALSAS AGORA
                </Button>
                <p className="text-sm text-gray-500">
                  Acesso vitalício por R$97
                </p>
              </CardContent>
            </Card>
            
            {/* ZuckSafeAds Card */}
            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-400 transition-all duration-300 p-6 animate-fade-in">
              <CardContent className="p-0 space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <BarChart className="w-8 h-8 text-black" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white">ZuckSafeAds</h2>
                <p className="text-gray-300">
                  Ferramenta especializada para criação de contas de anúncios simuladas com alto limite de Business Managers.
                </p>
                <Button size="lg" className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black font-bold py-6" onClick={() => window.open('https://pay.perfectpay.com.br', '_blank')}>
                  CRIAR CONTAS AQUECIDAS E ESTRATÉGICAS
                </Button>
                <p className="text-sm text-gray-500">
                  Acesso vitalício por R$97
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Features */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-16">Nossas Soluções</h2>
            
            {/* ZuckSafe Features */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8">ZuckSafe</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {zuckSafeFeatures.map((feature, index) => <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105 animate-fade-in">
                    <CardContent className="p-6 text-center">
                      <div className="text-cyan-400 mb-4 flex justify-center">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
            
            {/* ZuckSafeAds Features */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-8">ZuckSafeAds</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {zuckSafeAdsFeatures.map((feature, index) => <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-105 animate-fade-in">
                    <CardContent className="p-6 text-center">
                      <div className="text-green-400 mb-4 flex justify-center">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-4">Aviso Legal</h2>
          <p className="text-gray-400">
            Ambas as plataformas são voltadas para testes, educação e simulações. 
            Nenhuma informação deve ser utilizada para finalidades ilegais.
          </p>
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
    </div>;
};
export default Landing;