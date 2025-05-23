
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, User, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AccountGenerator = () => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [platform, setPlatform] = useState('gmail');
  const { toast } = useToast();

  const generateAccount = () => {
    const firstNames = ['ana', 'carlos', 'maria', 'joao', 'fernanda', 'ricardo', 'julia', 'pedro', 'beatriz', 'lucas'];
    const lastNames = ['silva', 'santos', 'oliveira', 'souza', 'lima', 'pereira', 'costa', 'ferreira', 'rodrigues', 'almeida'];
    const cities = ['saopaulo', 'riodejaneiro', 'belohorizonte', 'salvador', 'brasilia', 'fortaleza', 'curitiba', 'recife'];
    
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const number = Math.floor(Math.random() * 99) + 1;
    const city = cities[Math.floor(Math.random() * cities.length)];
    
    const birthYear = 1980 + Math.floor(Math.random() * 25);
    const birthMonth = 1 + Math.floor(Math.random() * 12);
    const birthDay = 1 + Math.floor(Math.random() * 28);
    
    let email = '';
    switch (platform) {
      case 'gmail':
        email = `${firstName}.${lastName}${number}@gmail.com`;
        break;
      case 'hotmail':
        email = `${firstName}_${lastName}${number}@hotmail.com`;
        break;
      case 'outlook':
        email = `${firstName}.${lastName}${number}@outlook.com`;
        break;
    }
    
    const password = `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)}${number}#`;
    
    return {
      email,
      password,
      name: `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${lastName.charAt(0).toUpperCase()}${lastName.slice(1)}`,
      city: city.charAt(0).toUpperCase() + city.slice(1),
      birthday: `${birthDay.toString().padStart(2, '0')}/${birthMonth.toString().padStart(2, '0')}/${birthYear}`,
      platform
    };
  };

  const generateAccounts = async () => {
    setIsGenerating(true);
    
    // Simula geração
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newAccounts = Array.from({ length: 10 }, generateAccount);
    setAccounts(newAccounts);
    
    setIsGenerating(false);
  };

  const copyAccount = (account: any) => {
    const accountData = `Email: ${account.email}
Senha: ${account.password}
Nome: ${account.name}
Cidade: ${account.city}
Aniversário: ${account.birthday}`;
    
    navigator.clipboard.writeText(accountData);
    toast({
      title: "Copiado!",
      description: "Dados da conta copiados para a área de transferência",
    });
  };

  const platforms = [
    { id: 'gmail', name: 'Gmail' },
    { id: 'hotmail', name: 'Hotmail' },
    { id: 'outlook', name: 'Outlook' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Gerador de Contas Falsas</h2>
          <p className="text-gray-400">Gera contas válidas para diferentes plataformas</p>
        </div>
        <div className="flex items-center space-x-4">
          <select 
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="bg-gray-700 border-gray-600 text-white rounded px-3 py-2"
          >
            {platforms.map(p => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
          <Button 
            onClick={generateAccounts}
            disabled={isGenerating}
            className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-bold"
          >
            {isGenerating ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                <span>Gerando...</span>
              </div>
            ) : (
              <>
                <RefreshCw className="w-4 h-4 mr-2" />
                Gerar Contas
              </>
            )}
          </Button>
        </div>
      </div>

      {accounts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {accounts.map((account, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span className="capitalize">{account.platform}</span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyAccount(account)}
                    className="border-gray-600 text-gray-400 hover:bg-cyan-500 hover:border-cyan-500 hover:text-black"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-gray-400 text-xs">EMAIL</p>
                  <p className="text-white font-mono text-sm">{account.email}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">SENHA</p>
                  <p className="text-white font-mono">{account.password}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">NOME</p>
                  <p className="text-white">{account.name}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-gray-400 text-xs">CIDADE</p>
                    <p className="text-white text-sm">{account.city}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">ANIVERSÁRIO</p>
                    <p className="text-white text-sm">{account.birthday}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccountGenerator;
