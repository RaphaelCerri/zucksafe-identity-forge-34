
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Users, RefreshCw, Download, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';

const AdAccountCreator = () => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [quantity, setQuantity] = useState(5);
  const [platform, setPlatform] = useState('metaads'); // Default platform
  const { toast } = useToast();

  // Generate a random proxy IP
  const generateProxy = () => {
    const ipBlocks = [
      ['45', '67', '89', '123', '178', '203'],
      ['12', '34', '56', '78', '91', '112', '231'],
      ['45', '67', '89', '123', '178', '203'],
      ['10', '25', '50', '75', '100', '150', '200', '250']
    ];
    
    const ip = ipBlocks.map(block => block[Math.floor(Math.random() * block.length)]).join('.');
    const port = Math.floor(Math.random() * 10000) + 20000;
    const countries = ['US', 'CA', 'UK', 'DE', 'NL', 'FR', 'SG', 'JP', 'BR'];
    const country = countries[Math.floor(Math.random() * countries.length)];
    
    return {
      ip: `${ip}:${port}`,
      country,
      type: ['HTTP', 'SOCKS5', 'HTTPS'][Math.floor(Math.random() * 3)]
    };
  };

  // Generate more diverse first and last names
  const generateName = () => {
    const firstNames = [
      // Brazilian names
      'Ana', 'Carlos', 'Maria', 'João', 'Fernanda', 'Ricardo', 'Julia', 'Pedro', 'Beatriz', 'Lucas',
      'Sophia', 'Gabriel', 'Isabella', 'Matheus', 'Laura', 'Guilherme', 'Manuela', 'Arthur', 'Valentina', 'Davi',
      // International names
      'Emma', 'James', 'Olivia', 'William', 'Ava', 'John', 'Sophia', 'Michael', 'Charlotte', 'Alexander',
      'Liam', 'Mia', 'Noah', 'Amelia', 'Benjamin', 'Harper', 'Elijah', 'Evelyn', 'Oliver', 'Abigail'
    ];
    
    const lastNames = [
      // Brazilian last names
      'Silva', 'Santos', 'Oliveira', 'Souza', 'Lima', 'Pereira', 'Costa', 'Ferreira', 'Rodrigues', 'Almeida',
      'Nascimento', 'Carvalho', 'Araújo', 'Ribeiro', 'Gomes', 'Martins', 'Rocha', 'Machado', 'Nunes', 'Monteiro',
      // International last names
      'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson',
      'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White'
    ];
    
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    
    return `${firstName} ${lastName}`;
  };

  // Generate a complex password that doesn't include the person's name
  const generatePassword = () => {
    const specials = ['!', '@', '#', '$', '%', '&', '*'];
    const words = ['secure', 'tiger', 'eagle', 'diamond', 'ocean', 'forest', 'mountain', 'river', 'sunset', 'pixel'];
    const word1 = words[Math.floor(Math.random() * words.length)];
    const word2 = words[Math.floor(Math.random() * words.length)];
    const number = Math.floor(Math.random() * 9999) + 1000;
    const special = specials[Math.floor(Math.random() * specials.length)];
    
    return `${word1.charAt(0).toUpperCase()}${word1.slice(1)}${number}${special}${word2}`;
  };

  // Generate a more random email
  const generateEmail = (name: string) => {
    const domains = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'protonmail.com', 'icloud.com'];
    const domain = domains[Math.floor(Math.random() * domains.length)];
    
    // Remove spaces and get first name and last name
    const parts = name.toLowerCase().split(' ');
    const firstName = parts[0];
    const lastName = parts.length > 1 ? parts[parts.length - 1] : '';
    
    // Generate random patterns for the email
    const patterns = [
      `${firstName}.${lastName}${Math.floor(Math.random() * 999)}`,
      `${firstName}_${lastName}${Math.floor(Math.random() * 99)}`,
      `${firstName}${lastName}${Math.floor(Math.random() * 999)}`,
      `${firstName.charAt(0)}${lastName}${Math.floor(Math.random() * 9999)}`,
      `${firstName}${lastName.charAt(0)}${Math.floor(Math.random() * 999)}`,
      `${firstName.substr(0, 3)}${lastName}${Math.floor(Math.random() * 99)}`
    ];
    
    const username = patterns[Math.floor(Math.random() * patterns.length)];
    return `${username}@${domain}`;
  };

  const generateAdAccount = () => {
    const name = generateName();
    const email = generateEmail(name);
    const password = generatePassword();
    
    // Generate numbers for account data
    const accountAge = 30 + Math.floor(Math.random() * 300); // days
    const spendLimit = 10000 + Math.floor(Math.random() * 90000); // limit in USD
    const pages = 10 + Math.floor(Math.random() * 40); // associated pages
    
    // Generate proxy data
    const proxy = generateProxy();
    
    return {
      email,
      password,
      name,
      accountAge,
      spendLimit,
      pages,
      status: Math.random() > 0.5 ? 'Aquecida' : 'Não Aquecida',
      healthScore: 70 + Math.floor(Math.random() * 30), // 70-100
      proxy
    };
  };

  const generateAccounts = async () => {
    setIsGenerating(true);
    
    // Simulate generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const newAccounts = Array.from({ length: quantity }, generateAdAccount);
    setAccounts(newAccounts);
    
    setIsGenerating(false);
  };

  const generateSingleAccount = async () => {
    setIsGenerating(true);
    
    // Simulate generation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newAccount = generateAdAccount();
    setAccounts([newAccount]);
    
    setIsGenerating(false);
  };

  const copyAccount = (account: any) => {
    const accountData = `Email: ${account.email}
Senha: ${account.password}
Nome: ${account.name}
Idade da Conta: ${account.accountAge} dias
Limite de Gasto: $${account.spendLimit}
Páginas: ${account.pages}
Status: ${account.status}
Score de Saúde: ${account.healthScore}%
Proxy: ${account.proxy.ip} (${account.proxy.country}, ${account.proxy.type})`;
    
    navigator.clipboard.writeText(accountData);
    toast({
      title: "Copiado!",
      description: "Dados da conta copiados para a área de transferência",
    });
  };

  const exportAccounts = () => {
    const csvContent = [
      'Email,Senha,Nome,Idade da Conta,Limite de Gasto,Páginas,Status,Score de Saúde,Proxy',
      ...accounts.map(account => 
        `"${account.email}","${account.password}","${account.name}","${account.accountAge} dias","$${account.spendLimit}","${account.pages}","${account.status}","${account.healthScore}%","${account.proxy.ip} (${account.proxy.country})"`
      )
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `contas_${platform}_${new Date().getTime()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Exportado!",
      description: `${accounts.length} contas exportadas com sucesso`,
    });
  };

  // Platform selection buttons
  const platforms = [
    { id: 'metaads', name: 'Meta Ads', color: 'from-blue-500 to-indigo-500' },
    { id: 'googleads', name: 'Google Ads', color: 'from-red-500 to-yellow-500' },
    { id: 'tiktokads', name: 'TikTok Ads', color: 'from-pink-500 to-purple-500' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Criador de Contas Ads Aquecidas</h2>
          <p className="text-gray-400">Gera contas simuladas de alta performance para campanhas</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {platforms.map(p => (
            <Button
              key={p.id}
              onClick={() => setPlatform(p.id)}
              className={`bg-gradient-to-r ${p.color} hover:opacity-90 text-white font-bold ${platform === p.id ? 'ring-2 ring-white' : ''}`}
            >
              {p.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end gap-4">
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-300 mb-2 block">
            Quantidade de contas a gerar
          </label>
          <Input
            type="number"
            min="1"
            max="50"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="bg-gray-700 border-gray-600 text-white"
          />
        </div>
        
        <div className="flex gap-2">
          <Button 
            onClick={generateSingleAccount}
            disabled={isGenerating}
            className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-black font-bold"
          >
            {isGenerating ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                <span>Gerando...</span>
              </div>
            ) : (
              <>
                <Users className="w-4 h-4 mr-2" />
                Gerar 1 Conta
              </>
            )}
          </Button>
          
          <Button 
            onClick={generateAccounts}
            disabled={isGenerating}
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black font-bold"
          >
            {isGenerating ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                <span>Gerando...</span>
              </div>
            ) : (
              <>
                <RefreshCw className="w-4 h-4 mr-2" />
                Gerar {quantity} Contas
              </>
            )}
          </Button>
        </div>
      </div>

      {accounts.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-white">{accounts.length} conta(s) gerada(s) para {platforms.find(p => p.id === platform)?.name}</p>
            <Button
              onClick={exportAccounts}
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold"
            >
              <Download className="w-4 h-4 mr-2" />
              Exportar CSV
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accounts.map((account, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span>Conta Ads #{index + 1}</span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyAccount(account)}
                      className="border-gray-600 text-gray-400 hover:bg-green-500 hover:border-green-500 hover:text-black"
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
                      <p className="text-gray-400 text-xs">IDADE DA CONTA</p>
                      <p className="text-white text-sm">{account.accountAge} dias</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">LIMITE DE GASTO</p>
                      <p className="text-white text-sm">${account.spendLimit}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-gray-400 text-xs">PÁGINAS</p>
                      <p className="text-white text-sm">{account.pages}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">STATUS</p>
                      <p className={`font-medium ${account.status === 'Aquecida' ? 'text-green-400' : 'text-yellow-400'}`}>
                        {account.status}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-xs">SCORE DE SAÚDE</p>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            account.healthScore > 90 ? 'bg-green-500' : 
                            account.healthScore > 80 ? 'bg-green-400' : 'bg-yellow-400'
                          }`}
                          style={{ width: `${account.healthScore}%` }}
                        />
                      </div>
                      <span className="text-white">{account.healthScore}%</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 p-2 bg-gray-900/70 rounded-lg border border-gray-700">
                    <p className="text-gray-400 text-xs mb-1">PROXY DEDICADO</p>
                    <div className="flex justify-between items-center">
                      <p className="text-cyan-400 font-mono text-sm">{account.proxy.ip}</p>
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {account.proxy.country} · {account.proxy.type}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdAccountCreator;
