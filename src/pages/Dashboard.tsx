
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Image, FileText, Users, CreditCard, Eye, LogOut, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ImageRefiner from '@/components/ImageRefiner';
import TextRefiner from '@/components/TextRefiner';
import DataGenerator from '@/components/DataGenerator';
import CardGenerator from '@/components/CardGenerator';
import AccountGenerator from '@/components/AccountGenerator';
import CloakerSimulator from '@/components/CloakerSimulator';
import { useIsMobile } from '@/hooks/use-mobile';
import { Drawer, DrawerContent, DrawerClose } from '@/components/ui/drawer';

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('zucksafe_user');
  const isMobile = useIsMobile();
  
  const handleLogout = () => {
    localStorage.removeItem('zucksafe_user');
    navigate('/');
  };
  
  const modules = [
    {
      id: 'image',
      name: 'Refinador de Criativos',
      icon: <Image className="w-5 h-5" />,
      component: ImageRefiner
    }, 
    {
      id: 'text',
      name: 'Refinador de Texto',
      icon: <FileText className="w-5 h-5" />,
      component: TextRefiner
    }, 
    {
      id: 'data',
      name: 'Dados Brasileiros',
      icon: <Users className="w-5 h-5" />,
      component: DataGenerator
    }, 
    {
      id: 'cards',
      name: 'Cartões de Teste',
      icon: <CreditCard className="w-5 h-5" />,
      component: CardGenerator
    }, 
    {
      id: 'accounts',
      name: 'Gerador de Email',
      icon: <Users className="w-5 h-5" />,
      component: AccountGenerator
    }, 
    {
      id: 'cloaker',
      name: 'Cloaker Safe',
      icon: <Eye className="w-5 h-5" />,
      component: CloakerSimulator
    }
  ];
  
  const handleModuleSelect = (moduleId) => {
    setActiveModule(moduleId);
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderContent = () => {
    if (activeModule === 'home') {
      return (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Bem-vindo ao ZuckSafe
            </h2>
            <p className="text-gray-400 mb-8">
              Selecione um módulo na barra lateral para começar a gerar seus dados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <Card 
                key={module.id} 
                className="bg-gray-800/50 border-gray-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer hover:scale-105" 
                onClick={() => handleModuleSelect(module.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {module.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{module.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );
    }
    
    const activeModuleData = modules.find(m => m.id === activeModule);
    if (activeModuleData) {
      const Component = activeModuleData.component;
      return <Component />;
    }
    
    return null;
  };

  const renderSidebar = () => {
    const sidebarContent = (
      <nav className="p-4 space-y-2">
        <button 
          onClick={() => handleModuleSelect('home')} 
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
            activeModule === 'home' 
              ? 'bg-cyan-500 text-black font-medium' 
              : 'text-gray-400 hover:bg-gray-800 hover:text-white'
          }`}
        >
          <Shield className="w-5 h-5" />
          <span>Início</span>
        </button>
        
        {modules.map(module => (
          <button 
            key={module.id} 
            onClick={() => handleModuleSelect(module.id)} 
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
              activeModule === module.id 
                ? 'bg-cyan-500 text-black font-medium' 
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            {module.icon}
            <span>{module.name}</span>
          </button>
        ))}
      </nav>
    );
    
    if (isMobile) {
      return (
        <>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setIsMenuOpen(true)} 
            className="fixed right-4 top-20 z-40 bg-gray-800 border-gray-700 text-gray-300"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DrawerContent className="bg-gray-900 text-white">
              <div className="flex justify-between items-center px-4 py-2 border-b border-gray-800">
                <h2 className="text-lg font-medium">Menu</h2>
                <DrawerClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                  </Button>
                </DrawerClose>
              </div>
              {sidebarContent}
            </DrawerContent>
          </Drawer>
        </>
      );
    } else {
      return (
        <aside className="w-64 bg-gray-900/50 border-r border-gray-800 min-h-screen">
          {sidebarContent}
        </aside>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/c2e803d1-757b-4fdd-972b-bef45d34a3ab.png" alt="ZuckSafe Logo" className="h-[100px] w-auto -mb-8 -mt-8 -ml-2" />
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">{userEmail}</span>
            <Button 
              onClick={handleLogout} 
              variant="outline" 
              size="sm" 
              className="border-gray-600 text-gray-400 hover:bg-red-500 hover:border-red-500 hover:text-white"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {renderSidebar()}

        {/* Main Content */}
        <main className={`flex-1 p-6 ${isMobile ? 'w-full' : ''}`}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
