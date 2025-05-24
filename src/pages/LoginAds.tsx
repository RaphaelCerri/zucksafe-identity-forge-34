import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const LoginAds = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsLoading(true);

    // Simula verificação
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Qualquer email libera acesso
    localStorage.setItem('zucksafeads_user', email);
    navigate('/dashboard-ads');
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex flex-col items-center justify-center mb-4">
            <img src="/lovable-uploads/8c3894ed-1b41-4b5d-ae03-3d94ab889c03.png" alt="ZuckSafeAds Logo" className="h-[150px] w-auto -mb-8 -mt-8 -ml-2" />
            <p className="text-gray-400">Acesse sua conta para continuar</p>
          </div>
        </div>

        {/* Login Card */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Acessar ZuckSafeAds</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Email usado na compra
                </label>
                <Input type="email" placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-400" required />
              </div>
              
              <Button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-bold py-4 sm:py-6 text-xs sm:text-sm md:text-base">
                {isLoading ? <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Verificando acesso...</span>
                  </div> : 'Acessar Plataforma'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Ainda não tem acesso?{' '}
                <button onClick={() => navigate('/')} className="text-green-400 hover:text-green-300">
                  Adquirir agora
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default LoginAds;