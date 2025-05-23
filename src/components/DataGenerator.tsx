
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Users, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DataGenerator = () => {
  const [generatedData, setGeneratedData] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateCPF = () => {
    const cpf = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
    
    // Calcula primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += cpf[i] * (10 - i);
    }
    let remainder = 11 - (sum % 11);
    cpf.push(remainder >= 10 ? 0 : remainder);
    
    // Calcula segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += cpf[i] * (11 - i);
    }
    remainder = 11 - (sum % 11);
    cpf.push(remainder >= 10 ? 0 : remainder);
    
    return cpf.join('').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const generateData = async () => {
    setIsGenerating(true);
    
    // Simula carregamento
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const firstNames = ['Ana', 'Carlos', 'Maria', 'João', 'Fernanda', 'Ricardo', 'Julia', 'Pedro', 'Beatriz', 'Lucas'];
    const lastNames = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Lima', 'Pereira', 'Costa', 'Ferreira', 'Rodrigues', 'Almeida'];
    const streets = ['Rua das Flores', 'Avenida Brasil', 'Rua da Paz', 'Avenida Central', 'Rua do Comércio'];
    const cities = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Brasília', 'Fortaleza', 'Curitiba', 'Recife'];
    const states = ['SP', 'RJ', 'MG', 'BA', 'DF', 'CE', 'PR', 'PE'];
    
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const gender = Math.random() > 0.5 ? 'Masculino' : 'Feminino';
    const birthYear = 1980 + Math.floor(Math.random() * 30);
    const birthMonth = 1 + Math.floor(Math.random() * 12);
    const birthDay = 1 + Math.floor(Math.random() * 28);
    
    const data = {
      nome: `${firstName} ${lastName}`,
      cpf: generateCPF(),
      rg: `${Math.floor(Math.random() * 99999999)}-${Math.floor(Math.random() * 10)}`,
      genero: gender,
      nascimento: `${birthDay.toString().padStart(2, '0')}/${birthMonth.toString().padStart(2, '0')}/${birthYear}`,
      endereco: {
        rua: `${streets[Math.floor(Math.random() * streets.length)]}, ${100 + Math.floor(Math.random() * 999)}`,
        bairro: `${['Centro', 'Vila Nova', 'Jardim América', 'Copacabana', 'Boa Vista'][Math.floor(Math.random() * 5)]}`,
        cidade: cities[Math.floor(Math.random() * cities.length)],
        estado: states[Math.floor(Math.random() * states.length)],
        cep: `${Math.floor(Math.random() * 99999).toString().padStart(5, '0')}-${Math.floor(Math.random() * 999).toString().padStart(3, '0')}`
      },
      telefone: `(${10 + Math.floor(Math.random() * 90)}) 9${Math.floor(Math.random() * 9999).toString().padStart(4, '0')}-${Math.floor(Math.random() * 9999).toString().padStart(4, '0')}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Math.floor(Math.random() * 99)}@gmail.com`
    };
    
    setGeneratedData(data);
    setIsGenerating(false);
  };

  const copyField = (value: string, field: string) => {
    navigator.clipboard.writeText(value);
    toast({
      title: "Copiado!",
      description: `${field} copiado para a área de transferência`,
    });
  };

  const copyAll = () => {
    if (!generatedData) return;
    
    const fullData = `Nome: ${generatedData.nome}
CPF: ${generatedData.cpf}
RG: ${generatedData.rg}
Gênero: ${generatedData.genero}
Nascimento: ${generatedData.nascimento}
Endereço: ${generatedData.endereco.rua}
Bairro: ${generatedData.endereco.bairro}
Cidade: ${generatedData.endereco.cidade}
Estado: ${generatedData.endereco.estado}
CEP: ${generatedData.endereco.cep}
Telefone: ${generatedData.telefone}
Email: ${generatedData.email}`;
    
    navigator.clipboard.writeText(fullData);
    toast({
      title: "Copiado!",
      description: "Todos os dados copiados para a área de transferência",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Gerador de Dados Brasileiros</h2>
          <p className="text-gray-400">Gera dados pessoais completos e válidos</p>
        </div>
        <Button 
          onClick={generateData}
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
              Gerar Dados
            </>
          )}
        </Button>
      </div>

      {generatedData && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Dados Pessoais */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Dados Pessoais</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: 'Nome', value: generatedData.nome },
                { label: 'CPF', value: generatedData.cpf },
                { label: 'RG', value: generatedData.rg },
                { label: 'Gênero', value: generatedData.genero },
                { label: 'Nascimento', value: generatedData.nascimento },
                { label: 'Telefone', value: generatedData.telefone },
                { label: 'Email', value: generatedData.email }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-mono">{item.value}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyField(item.value, item.label)}
                    className="border-gray-600 text-gray-400 hover:bg-cyan-500 hover:border-cyan-500 hover:text-black"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Endereço */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Endereço Completo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: 'Rua', value: generatedData.endereco.rua },
                { label: 'Bairro', value: generatedData.endereco.bairro },
                { label: 'Cidade', value: generatedData.endereco.cidade },
                { label: 'Estado', value: generatedData.endereco.estado },
                { label: 'CEP', value: generatedData.endereco.cep }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-mono">{item.value}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyField(item.value, item.label)}
                    className="border-gray-600 text-gray-400 hover:bg-cyan-500 hover:border-cyan-500 hover:text-black"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              ))}
              
              <Button 
                onClick={copyAll}
                className="w-full mt-4 bg-green-500 hover:bg-green-600 text-black font-bold"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copiar Todos os Dados
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default DataGenerator;
