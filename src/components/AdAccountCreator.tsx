
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Users, RefreshCw, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdAccountCreator = () => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [quantity, setQuantity] = useState(5);
  const { toast } = useToast();

  const generateAdAccount = () => {
    const firstNames = ['ana', 'carlos', 'maria', 'joao', 'fernanda', 'ricardo', 'julia', 'pedro', 'beatriz', 'lucas'];
    const lastNames = ['silva', 'santos', 'oliveira', 'souza', 'lima', 'pereira', 'costa', 'ferreira', 'rodrigues', 'almeida'];
    const domains = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com'];
    
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const domain = domains[Math.floor(Math.random() * domains.length)];
    const number = Math.floor(Math.random() * 99) + 1;
    
    const email = `${firstName}.${lastName}${number}@${domain}`;
    const password = `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)}${number}#${lastName.charAt(0).toUpperCase()}`;
    const name = `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${lastName.charAt(0).toUpperCase()}${lastName.slice(1)}`;
    
    // Gera números aleatórios para dados da conta
    const accountAge = 30 + Math.floor(Math.random() * 300); // dias
    const spendLimit = 10000 + Math.floor(Math.random() * 90000); // limite em USD
    const bmLimit = 5 + Math.floor(Math.random() * 15); // limite de BMs
    const pages = 10 + Math.floor(Math.random() * 40); // páginas associadas
    
    return {
      email,
      password,
      name,
      accountAge,
      spendLimit,
      bmLimit,
      pages,
      status: Math.random() > 0.3 ? 'Ativo' : 'Limitado',
      healthScore: 70 + Math.floor(Math.random() * 30) // 70-100
    };
  };

  const generateAccounts = async () => {
    setIsGenerating(true);
    
    // Simula geração
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const newAccounts = Array.from({ length: quantity }, generateAdAccount);
    setAccounts(newAccounts);
    
    setIsGenerating(false);
  };

  const copyAccount = (account: any) => {
    const accountData = `Email: ${account.email}
Senha: ${account.password}
Nome: ${account.name}
Idade da Conta: ${account.accountAge} dias
Limite de Gasto: $${account.spendLimit}
Limite de BMs: ${account.bmLimit}
Páginas: ${account.pages}
Status: ${account.status}
Score de Saúde: ${account.healthScore}%`;
    
    navigator.clipboard.writeText(accountData);
    toast({
      title: "Copiado!",
      description: "Dados da conta copiados para a área de transferência",
    });
  };

  const exportAccounts = () => {
    const csvContent = [
      'Email,Senha,Nome,Idade da Conta,Limite de Gasto,Limite de BMs,Páginas,Status,Score de Saúde',
      ...accounts.map(account => 
        `"${account.email}","${account.password}","${account.name}","${account.accountAge} dias","$${account.spendLimit}","${account.bmLimit}","${account.pages}","${account.status}","${account.healthScore}%"`
      )
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'contas_ads_aquecidas.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Exportado!",
      description: `${accounts.length} contas exportadas com sucesso`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Criador de Contas Ads Aquecidas</h2>
          <p className="text-gray-400">Gera contas simuladas com alto limite de Business Managers</p>
        </div>
        <div className="flex items-center space-x-4">
          <select 
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="bg-gray-700 border-gray-600 text-white rounded px-3 py-2"
          >
            <option value={5}>5 contas</option>
            <option value={10}>10 contas</option>
            <option value={20}>20 contas</option>
          </select>
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
                Gerar Contas
              </>
            )}
          </Button>
        </div>
      </div>

      {accounts.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-white">{accounts.length} conta(s) gerada(s)</p>
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
                      <p className="text-gray-400 text-xs">LIMITE DE BMs</p>
                      <p className="text-white text-sm">{account.bmLimit}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">PÁGINAS</p>
                      <p className="text-white text-sm">{account.pages}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-gray-400 text-xs">STATUS</p>
                      <p className={`font-medium ${account.status === 'Ativo' ? 'text-green-400' : 'text-yellow-400'}`}>
                        {account.status}
                      </p>
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
