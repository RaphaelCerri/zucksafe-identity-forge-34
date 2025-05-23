import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Eye, Users, CreditCard, FileText, Image, BarChart, Zap, BookOpen, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Landing = () => {
  const navigate = useNavigate();
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
      {/* Header - 100% Transparente e sobreposto */}
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/f99afcc4-763b-4462-a8cf-a1a91788c39f.png" alt="ZuckSafe Logo" className="h-[120px] w-auto -mb-6 -mt-6 md:h-[120px] sm:h-[80px]" />
            </div>
            
            <div className="flex space-x-4">
              <Button size="lg" onClick={() => window.open('https://pay.perfectpay.com.br', '_blank')} className="bg-white/40 border-2 border-white text-white font-bold w-auto transition duration-300 ease-in-out hover:bg-white/10 text-xs sm:text-sm md:text-base px-3 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3">
                Adquirir Agora
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Grudada no topo */}
      <section className="relative w-full h-screen top-0 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/lovable-uploads/ecf4153f-8771-41f5-be83-039d3fa203a8.png" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
          {/* Gradient overlay from bottom to middle */}
          <div className="absolute inset-0" style={{
          background: `linear-gradient(to top, #06090f 0%, #06090f 25%, transparent 50%)`
        }}></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto text-center relative z-10 flex flex-col justify-center h-full pt-32">
          <div className="flex justify-center flex-col items-center mb-8">
            <h1 className="font-bold font-mono -mb-2 text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">Todas soluções</h1>
            <h2 className="font-mono font-bold text-white text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">em uma só plataforma</h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-12 max-w-4xl mx-auto animate-fade-in leading-relaxed px-4">
            Escolha sua plataforma: simule dados com precisão ou crie perfis otimizados para ambientes de validação de campanhas.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center mb-20 sm:mb-24 md:mb-32">
            <Button size="lg" onClick={() => {
            const sectionToScrollTo = document.getElementById('products-section');
            if (sectionToScrollTo) {
              sectionToScrollTo.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }} className="bg-transparent border-2 border-white text-white font-bold w-auto transition duration-300 ease-in-out hover:bg-white/10 text-xs sm:text-sm md:text-base px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3">
              Conheça Nossos Produtos
            </Button>
          </div>
        </div>
      </section>
      
      {/* Word Carousel Section */}
      <section className="px-4 overflow-hidden bg-teal-600 py-[22px]">
        <div className="container mx-auto">
          <div className="relative">
            <div className="animate-scroll-mobile md:animate-scroll whitespace-nowrap">
              <span className="inline-block font-mono text-gray-300 text-lg sm:text-xl md:text-2xl">
                conta quente • proxy blindado • perfil limpo • geração de dados • risco zero • geração de cartões • 
                conta quente • proxy blindado • perfil limpo • geração de dados • risco zero • geração de cartões • 
                conta quente • proxy blindado • perfil limpo • geração de dados • risco zero • geração de cartões
              </span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section id="products-section" className="py-20 px-2">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12">Nossas Soluções</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-16 max-w-6xl mx-auto">
            {/* ZuckSafe Card */}
            <Card className="bg-gray-800/50 border-gray-700 hover:border-cyan-400 transition-all duration-300 p-4 sm:p-6 animate-fade-in">
              <CardContent className="p-0 space-y-4 sm:space-y-6">
                <div className="flex justify-center">
                  <h1 className="font-bold text-3xl sm:text-4xl text-green-500">ZuckSafe</h1>
                </div>
                
                <p className="text-gray-300 text-sm">Plataforma completa para geração de dados, cartões para validação, contas auxiliares, e otimização de elementos visuais e textuais.</p>
                <Button size="lg" onClick={() => window.open('https://pay.perfectpay.com.br', '_blank')} className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black font-bold py-4 sm:py-6 bg-blue-500 hover:bg-blue-400 text-xs sm:text-sm md:text-base">
                  ADIQUIRIR SEU ACESSO AGORA
                </Button>
                <p className="text-xs sm:text-sm text-gray-300">Acesso vitalício por R$97,90</p>
              </CardContent>
            </Card>
            
            {/* ZuckSafeAds Card */}
            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-400 transition-all duration-300 p-4 sm:p-6 animate-fade-in">
              <CardContent className="p-0 space-y-4 sm:space-y-6">
                <div className="flex justify-center">
                  <h1 className="font-bold text-3xl sm:text-4xl text-blue-500">ZuckAds</h1>
                </div>
                
                <p className="text-gray-300 text-sm">Ambiente especializado para criação automatizada de perfis com estrutura otimizada para validação de campanhas em plataformas de anúncios.</p>
                <Button size="lg" onClick={() => window.open('https://pay.perfectpay.com.br', '_blank')} className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-bold py-4 sm:py-6 text-xs sm:text-sm md:text-base">
                  CRIAR PERFIS OTIMIZADOS AGORA
                </Button>
                <p className="text-xs sm:text-sm text-gray-300">Acesso vitalício por R$97,90</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Combo Zuck Card - Full Width */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="bg-gray-800/50 border-2 border-gray-800 hover:border-orange-500 transition-all duration-300 p-4 sm:p-6 animate-fade-in shadow-xl shadow-orange-500/10 py-8 sm:py-12 md:py-[48px] px-[16px]">
              <CardContent className="p-0 space-y-4 sm:space-y-6">
                <div className="flex justify-center -mb-1 -mt-6 my-0">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <h1 className="text-xl sm:text-2xl font-bold text-green-500">ZuckSafe</h1>
                    <span className="text-2xl sm:text-3xl font-bold text-white">+</span>
                    <h1 className="font-bold text-xl sm:text-2xl text-blue-500">ZuckAds</h1>
                  </div>
                </div>
                <h2 className="font-bold bg-gradient-to-r from-red-400 via-red-400 to-purple-400 bg-clip-text text-3xl sm:text-4xl text-amber-500">🔥 Combo Zuck 🔥</h2>
                <p className="text-gray-200 text-lg sm:text-xl px-4 sm:px-0">Acesso completo a ambas as plataformas com preço especial e benefícios exclusivos.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 py-2">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                    <span className="text-gray-300 text-sm sm:text-base">Painel ZuckSafe completo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BarChart className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                    <span className="text-gray-300 text-sm sm:text-base">Painel ZuckSafeAds completo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                    <span className="text-gray-300 text-sm sm:text-base">Prioridade de acesso</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                    <span className="text-gray-300 text-sm sm:text-base">Economia de 25%</span>
                  </div>
                </div>
                <Button size="lg" onClick={() => window.open('https://pay.perfectpay.com.br', '_blank')} className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-4 text-xs sm:py-6 sm:px-8 sm:text-lg rounded shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500">ADQUIRA O COMBO AGORA</Button>
                <p className="text-base sm:text-lg font-semibold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-gray-300">
                  Acesso vitalício por apenas R$147,90
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Features */}
          <div className="mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-16">Funcionalidades</h2>
            
            {/* ZuckSafe Features */}
            <div className="mb-20">
              <div className="flex justify-center items-center mb-8">
                <h1 className="font-bold text-green-500 text-3xl sm:text-4xl">ZuckSafe</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {zuckSafeFeatures.map((feature, index) => <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-105 animate-fade-in">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="text-green-400 mb-4 flex justify-center">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
            
            {/* ZuckSafeAds Features */}
            <div>
              <div className="flex justify-center items-center mb-8">
                <h1 className="font-bold text-3xl sm:text-4xl text-blue-400">ZuckAds</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {zuckSafeAdsFeatures.map((feature, index) => <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 animate-fade-in">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="text-blue-400 mb-4 flex justify-center">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
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
          <p className="text-xs text-center max-w-4xl mx-auto text-zinc-700 px-4">
            Plataforma voltada para testes, simulações e desenvolvimento. Nenhum dado deve ser utilizado em operações reais. Uso indevido é de responsabilidade do usuário.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="/lovable-uploads/c2e803d1-757b-4fdd-972b-bef45d34a3ab.png" alt="ZuckSafe Logo" className="h-[80px] sm:h-[100px] w-auto -mb-6 -mt-10" />
          </div>
          <p className="text-gray-400 text-xs sm:text-sm mb-4">
            © 2024 ZuckSafe. Todos os direitos reservados.
          </p>
          <div className="flex justify-center space-x-4">
            <button onClick={() => navigate('/termos-de-uso')} className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Termos de Uso</button>
            <span className="text-gray-600">|</span>
            <button onClick={() => navigate('/politica-de-privacidade')} className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Política de Privacidade</button>
          </div>
        </div>
      </footer>
    </div>;
};
export default Landing;