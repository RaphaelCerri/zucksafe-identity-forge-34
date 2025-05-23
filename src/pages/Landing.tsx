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
      {/* Header */}
      <header className="border-b border-gray-800 bg-transparent backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2 -mb-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/c2e803d1-757b-4fdd-972b-bef45d34a3ab.png" alt="ZuckSafe Logo" className="h-[120px] w-auto -mb-6 -mt-6" />
            </div>
            <div className="flex space-x-4">
              
              
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/lovable-uploads/ecf4153f-8771-41f5-be83-039d3fa203a8.png')`
      }}>
          {/* Gradient overlay from bottom to middle */}
          <div style={{
          background: `linear-gradient(to top, #06090f 0%, #06090f 25%, transparent 50%)`
        }} className="absolute inset-0 z-0"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto text-center relative z-10">
          <div className="flex justify-center flex-col items-center mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4" style={{
            color: '#1BB98B'
          }}>
              Todas soluções
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold" style={{
            color: '#1BB98B'
          }}>
              em uma só plataforma
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto animate-fade-in leading-relaxed">
            Escolha sua plataforma: simule dados com precisão ou crie perfis otimizados para ambientes de validação de campanhas.
          </p>
          
          {/* CTA Button */}
          <Button size="lg" onClick={() => {
          const sectionToScrollTo = document.getElementById('products-section');
          if (sectionToScrollTo) {
            sectionToScrollTo.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }} className="animate-fade-in bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold">
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
                  <h1 style={{
                  color: '#1bb88c'
                }} className="font-bold text-4xl text-green-500">ZuckSafe</h1>
                </div>
                
                <p className="text-gray-300 text-sm">Plataforma completa para geração de dados, cartões para validação, contas auxiliares, e otimização de elementos visuais e textuais.</p>
                <Button size="lg" onClick={() => window.open('https://pay.perfectpay.com.br', '_blank')} className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black font-bold py-6 bg-blue-500 hover:bg-blue-400">
                  ADIQUIRIR SEU ACESSO AGORA
                </Button>
                <p className="text-sm text-gray-500">Acesso vitalício por R$97,90</p>
              </CardContent>
            </Card>
            
            {/* ZuckSafeAds Card */}
            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-400 transition-all duration-300 p-6 animate-fade-in">
              <CardContent className="p-0 space-y-6">
                <div className="flex justify-center">
                  <h1 style={{
                  color: '#3b7fe4'
                }} className="font-bold text-4xl text-blue-500">ZuckAds</h1>
                </div>
                
                <p className="text-gray-300 text-sm">Ambiente especializado para criação automatizada de perfis com estrutura otimizada para validação de campanhas em plataformas de anúncios.</p>
                <Button size="lg" onClick={() => window.open('https://pay.perfectpay.com.br', '_blank')} className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-bold py-6">
                  CRIAR PERFIS OTIMIZADOS AGORA
                </Button>
                <p className="text-sm text-gray-500">Acesso vitalício por R$97,90</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Combo Zuck Card - Full Width */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="bg-gray-800/50 border-2 border-pink-400 hover:border-blue-400 transition-all duration-300 p-6 animate-fade-in shadow-xl shadow-pink-500/10 py-[48px]">
              <CardContent className="p-0 space-y-6">
                <div className="flex justify-center -mb-1 -mt-6 my-0">
                  <div className="flex items-center space-x-3">
                    <h1 style={{
                    color: '#1bb88c'
                  }} className="font-bold text-slate-50 text-2xl">ZuckSafe</h1>
                    <span className="text-3xl font-bold text-white">+</span>
                    <h1 style={{
                    color: '#3b7fe4'
                  }} className="font-bold text-slate-50 text-2xl">ZuckAds</h1>
                  </div>
                </div>
                <h2 className="font-bold text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-4xl">Combo Zuck</h2>
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
            <h2 className="text-3xl font-bold text-white mb-16">Funcionalidades</h2>
            
            {/* ZuckSafe Features */}
            <div className="mb-20">
              <div className="flex justify-center items-center mb-8">
                <h1 style={{
                color: '#1bb88c'
              }} className="font-bold text-green-500 text-4xl">ZuckSafe</h1>
              </div>
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
              <div className="flex justify-center items-center mb-8">
                <h1 className="text-6xl font-bold" style={{
                color: '#3b7fe4'
              }}>ZuckAds</h1>
              </div>
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
          <p className="text-xs text-center max-w-4xl mx-auto text-zinc-700">
            Plataforma voltada para testes, simulações e desenvolvimento. Nenhum dado deve ser utilizado em operações reais. Uso indevido é de responsabilidade do usuário.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="/lovable-uploads/c2e803d1-757b-4fdd-972b-bef45d34a3ab.png" alt="ZuckSafe Logo" className="h-[100px] w-auto -mb-6 -mt-10" />
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