
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Eye, Users, CreditCard, FileText, Image, BarChart, Zap, BookOpen, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Handle mouse movement for animation
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  }, []);

  // Set up mouse event listener
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  const zuckSafeFeatures = [{
    icon: <Image className="w-8 h-8" />,
    title: "Otimização de Criativos",
    description: "Remove metadados e ajusta parâmetros visuais de imagens para uso em validação de campanhas"
  }, {
    icon: <FileText className="w-8 h-8" />,
    title: "Refinador de Texto",
    description: "Ajusta estruturas textuais com modificação discreta para adequação em múltiplos contextos"
  }, {
    icon: <Users className="w-8 h-8" />,
    title: "Geração de Perfis Brasileiros",
    description: "Nome, CPF, endereço, telefone e dados complementares"
  }, {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Cartões ZuckFace",
    description: "Geração de números formatados e estruturados para uso em validações e fluxos simulados"
  }, {
    icon: <Shield className="w-8 h-8" />,
    title: "Contas Auxiliares",
    description: "Perfis para Gmail, Facebook, Instagram e outras plataformas, prontos para uso"
  }, {
    icon: <Eye className="w-8 h-8" />,
    title: "Cloaker Zuck",
    description: "Códigos inteligentes para redirecionamento com ajuste de rotas e dispositivos"
  }];
  
  const zuckSafeAdsFeatures = [{
    icon: <Users className="w-8 h-8" />,
    title: "Perfis Ads Otimizados",
    description: "Criação de contas com estrutura configurada para campanhas em ambientes de análise (Google, Facebook, TikTok)"
  }, {
    icon: <BarChart className="w-8 h-8" />,
    title: "Dados Estratégicos",
    description: "Perfis com parâmetros ideais para performance e estruturação"
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

      {/* Hero Section with Dynamic Dots Background */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Dynamic dots background */}
        <div className="absolute inset-0 bg-gray-900">
          <div className="dots-background" style={{ 
            backgroundSize: "24px 24px",
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 2px, transparent 2px)`,
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.1s ease-out'
          }}>
          </div>
          <div className="dots-background" style={{ 
            backgroundSize: "32px 32px",
            backgroundImage: `radial-gradient(circle, rgba(56, 189, 248, 0.2) 3px, transparent 3px)`,
            transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px)`,
            transition: 'transform 0.2s ease-out'
          }}>
          </div>
          <div className="dots-background" style={{ 
            backgroundSize: "48px 48px",
            backgroundImage: `radial-gradient(circle, rgba(14, 165, 233, 0.15) 4px, transparent 4px)`,
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
            transition: 'transform 0.3s ease-out'
          }}>
          </div>

          {/* Gradient overlay on top of dots */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            ZuckSafe
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto animate-fade-in leading-relaxed">
            Escolha sua plataforma: simule dados com precisão ou crie perfis otimizados para ambientes de validação de campanhas.
          </p>
          
          {/* CTA Button */}
          <Button size="lg" className="animate-fade-in bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold" onClick={() => {
          const sectionToScrollTo = document.getElementById('products-section');
          if (sectionToScrollTo) {
            sectionToScrollTo.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }}>
            Conheça Nossos Produtos
          </Button>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-20 px-4" id="products-section">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Nossas Soluções</h2>
          
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
                <p className="text-gray-300">Plataforma completa para geração de dados, cartões para validação, contas auxiliares, e otimização de elementos visuais e textuais.</p>
                <Button size="lg" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-bold py-6" onClick={() => window.open('https://pay.perfectpay.com.br', '_blank')}>ADIQUIRIR SEU ACESSO AGORA</Button>
                <p className="text-sm text-gray-500">Acesso vitalício por R$97,90</p>
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
                <p className="text-gray-300">Ambiente especializado para criação automatizada de perfis com estrutura otimizada para validação de campanhas em plataformas de anúncios.</p>
                <Button size="lg" className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black font-bold py-6" onClick={() => window.open('https://pay.perfectpay.com.br', '_blank')}>CRIAR PERFIS OTIMIZADOS AGORA</Button>
                <p className="text-sm text-gray-500">Acesso vitalício por R$97,90</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Combo Zuck Card - Full Width */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="bg-gray-800/50 border-2 border-pink-400 hover:border-blue-400 transition-all duration-300 p-6 animate-fade-in shadow-xl shadow-pink-500/10">
              <CardContent className="p-0 space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text">Combo Zuck</h2>
                <p className="text-gray-200 text-xl">Acesso completo a ambas as plataformas com preço especial e benefícios exclusivos.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-pink-400" />
                    <span className="text-gray-300">Painel ZuckSafe completo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BarChart className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Painel ZuckSafeAds completo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-pink-400" />
                    <span className="text-gray-300">Prioridade de acesso</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Economia de 25%</span>
                  </div>
                </div>
                <Button size="lg" className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white font-bold py-8 text-lg" onClick={() => window.open('https://pay.perfectpay.com.br', '_blank')}>
                  ADQUIRA O COMBO COMPLETO AGORA
                </Button>
                <p className="text-lg font-semibold text-transparent bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text">
                  Acesso vitalício por apenas R$147,90
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
      <section className="py-8 px-4 bg-black/30">
        <div className="container mx-auto">
          <p className="text-xs text-gray-500 text-center max-w-4xl mx-auto">
            Plataforma voltada para testes, simulações e desenvolvimento. Nenhum dado deve ser utilizado em operações reais. Uso indevido é de responsabilidade do usuário.
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
          <p className="text-gray-400 text-sm mb-4">
            © 2024 ZuckSafe. Todos os direitos reservados.
          </p>
          <div className="flex justify-center space-x-4">
            <button onClick={() => navigate('/termos-de-uso')} className="text-sm text-gray-400 hover:text-white transition-colors">Termos de Uso</button>
            <span className="text-gray-600">|</span>
            <button onClick={() => navigate('/politica-de-privacidade')} className="text-sm text-gray-400 hover:text-white transition-colors">Política de Privacidade</button>
          </div>
        </div>
      </footer>
    </div>;
};

export default Landing;
