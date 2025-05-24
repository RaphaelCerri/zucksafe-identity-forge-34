import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Image, FileText, Users, CreditCard, Eye, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ImageRefiner from '@/components/ImageRefiner';
import TextRefiner from '@/components/TextRefiner';
import DataGenerator from '@/components/DataGenerator';
import CardGenerator from '@/components/CardGenerator';
import AccountGenerator from '@/components/AccountGenerator';
import CloakerSimulator from '@/components/CloakerSimulator';
const Dashboard = () => {
  const [activeModule, setActiveModule] = useState('home');
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('zucksafe_user');
  const handleLogout = () => {
    localStorage.removeItem('zucksafe_user');
    navigate('/');
  };
  const modules = [{
    id: 'image',
    name: 'Refinador de Criativos',
    icon: <Image className="w-5 h-5" />,
    component: ImageRefiner
  }, {
    id: 'text',
    name: 'Refinador de Texto',
    icon: <FileText className="w-5 h-5" />,
    component: TextRefiner
  }, {
    id: 'data',
    name: 'Dados Brasileiros',
    icon: <Users className="w-5 h-5" />,
    component: DataGenerator
  }, {
    id: 'cards',
    name: 'Cartões de Teste',
    icon: <CreditCard className="w-5 h-5" />,
    component: CardGenerator
  }, {
    id: 'accounts',
    name: 'Gerador de Email',
    icon: <Users className="w-5 h-5" />,
    component: AccountGenerator
  }, {
    id: 'cloaker',
    name: 'Cloaker Safe',
    icon: <Eye className="w-5 h-5" />,
    component: CloakerSimulator
  }];
  const renderContent = () => {
    if (activeModule === 'home') {
      return <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Bem-vindo ao ZuckSafe
            </h2>
            <p className="text-gray-400 mb-8">
              Selecione um módulo na barra lateral para começar a gerar seus dados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => <Card key={module.id} className="bg-gray-800/50 border-gray-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setActiveModule(module.id)}>
                <CardContent className="p-6 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {module.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{module.name}</h3>
                </CardContent>
              </Card>)}
          </div>
        </div>;
    }
    const activeModuleData = modules.find(m => m.id === activeModule);
    if (activeModuleData) {
      const Component = activeModuleData.component;
      return <Component />;
    }
    return null;
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/c2e803d1-757b-4fdd-972b-bef45d34a3ab.png" alt="ZuckSafe Logo" className="h-[100px] w-auto -mb-8 -mt-8 -ml-2" />
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">{userEmail}</span>
            <Button onClick={handleLogout} variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:bg-red-500 hover:border-red-500 hover:text-white">
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900/50 border-r border-gray-800 min-h-screen">
          <nav className="p-4 space-y-2">
            <button onClick={() => setActiveModule('home')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeModule === 'home' ? 'bg-cyan-500 text-black font-medium' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
              <Shield className="w-5 h-5" />
              <span>Início</span>
            </button>
            
            {modules.map(module => <button key={module.id} onClick={() => setActiveModule(module.id)} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeModule === module.id ? 'bg-cyan-500 text-black font-medium' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
                {module.icon}
                <span>{module.name}</span>
              </button>)}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>;
};
export default Dashboard;
