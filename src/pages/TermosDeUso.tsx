
import React from 'react';
import { Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TermosDeUso = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
              <Shield className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                ZuckSafe
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto bg-gray-800/30 rounded-lg shadow-lg p-8 backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-white mb-8 pb-4 border-b border-gray-700">Termos de Uso</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Esta plataforma é disponibilizada exclusivamente para uso educacional, de simulação e teste. Nenhum dado gerado neste ambiente deve ser utilizado em contextos comerciais, bancários ou jurídicos. Ao acessar qualquer conteúdo ou funcionalidade deste projeto, o usuário concorda com os termos aqui apresentados e se compromete a utilizar as informações de forma ética e legal. O não cumprimento destas diretrizes é de responsabilidade única e exclusiva do usuário.
            </p>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ao adquirir qualquer produto da plataforma, o usuário entende que está acessando um sistema de uso limitado a ambientes de teste, e por isso não há política de reembolso. Todas as compras são finais.
            </p>
            
            <div className="mt-12">
              <Button 
                onClick={() => navigate('/')} 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
              >
                Voltar para Home
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-8 px-4 mt-20">
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
    </div>
  );
};

export default TermosDeUso;
