
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy, Users, RefreshCw, Search, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DataGenerator = () => {
  const [generatedData, setGeneratedData] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [cep, setCep] = useState('');
  const [isSearchingCep, setIsSearchingCep] = useState(false);
  const [addressData, setAddressData] = useState<any>(null);
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

  const getRandomValidCep = async () => {
    // Lista de CEPs reais válidos de diferentes regiões do Brasil
    const validCeps = [
      '01310100', // São Paulo - SP
      '22071900', // Rio de Janeiro - RJ
      '30130000', // Belo Horizonte - MG
      '40070110', // Salvador - BA
      '70040010', // Brasília - DF
      '60160230', // Fortaleza - CE
      '80020080', // Curitiba - PR
      '52020030', // Recife - PE
      '69900076', // Rio Branco - AC
      '57020020', // Maceió - AL
      '68906072', // Macapá - AP
      '69400000', // Boa Vista - RR
      '78005470', // Cuiabá - MT
      '79002290', // Campo Grande - MS
      '74023010', // Goiânia - GO
      '64000100', // Teresina - PI
      '64001120', // Teresina - PI
      '65010000', // São Luís - MA
      '88010400', // Florianópolis - SC
      '64000280', // Teresina - PI
      '49010000', // Aracaju - SE
      '59012080', // Natal - RN
      '76801059', // Porto Velho - RO
      '68900073', // Macapá - AP
      '77001002', // Palmas - TO
      '01001000', // São Paulo - SP
      '20040020', // Rio de Janeiro - RJ
      '31112000', // Belo Horizonte - MG
      '41820021', // Salvador - BA
      '71020031', // Brasília - DF
      '60055141', // Fortaleza - CE
      '81200100', // Curitiba - PR
      '50070280', // Recife - PE
    ];
    
    const randomCep = validCeps[Math.floor(Math.random() * validCeps.length)];
    
    try {
      const response = await fetch(`https://viacep.com.br/ws/${randomCep}/json/`);
      const data = await response.json();
      
      if (!data.erro) {
        return data;
      }
    } catch (error) {
      console.log('Erro ao buscar CEP:', error);
    }
    
    // Fallback para endereço fictício caso a API falhe
    return null;
  };

  const searchCep = async () => {
    const cleanCep = cep.replace(/\D/g, '');
    
    if (cleanCep.length !== 8) {
      toast({
        title: "CEP inválido!",
        description: "Digite um CEP com 8 dígitos",
        variant: "destructive",
      });
      return;
    }

    setIsSearchingCep(true);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await response.json();

      if (data.erro) {
        toast({
          title: "CEP não encontrado!",
          description: "Verifique o CEP digitado e tente novamente",
          variant: "destructive",
        });
        setAddressData(null);
      } else {
        setAddressData(data);
        toast({
          title: "CEP encontrado!",
          description: "Endereço carregado com sucesso",
        });
      }
    } catch (error) {
      toast({
        title: "Erro na consulta!",
        description: "Não foi possível consultar o CEP",
        variant: "destructive",
      });
      setAddressData(null);
    } finally {
      setIsSearchingCep(false);
    }
  };

  const generateData = async () => {
    setIsGenerating(true);
    
    // Simula carregamento
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const firstNames = ['Ana', 'Carlos', 'Maria', 'João', 'Fernanda', 'Ricardo', 'Julia', 'Pedro', 'Beatriz', 'Lucas'];
    const lastNames = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Lima', 'Pereira', 'Costa', 'Ferreira', 'Rodrigues', 'Almeida'];
    
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const gender = Math.random() > 0.5 ? 'Masculino' : 'Feminino';
    const birthYear = 1980 + Math.floor(Math.random() * 30);
    const birthMonth = 1 + Math.floor(Math.random() * 12);
    const birthDay = 1 + Math.floor(Math.random() * 28);
    
    // Busca um endereço real aleatório
    const realAddress = await getRandomValidCep();
    
    let endereco;
    if (realAddress) {
      // Gera um número aleatório para a rua
      const numeroRua = 100 + Math.floor(Math.random() * 999);
      endereco = {
        rua: `${realAddress.logradouro || 'Rua não informada'}, ${numeroRua}`,
        bairro: realAddress.bairro || 'Bairro não informado',
        cidade: realAddress.localidade,
        estado: realAddress.uf,
        cep: realAddress.cep
      };
    } else {
      // Fallback para endereço fictício
      const streets = ['Rua das Flores', 'Avenida Brasil', 'Rua da Paz', 'Avenida Central', 'Rua do Comércio'];
      const cities = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Brasília', 'Fortaleza', 'Curitiba', 'Recife'];
      const states = ['SP', 'RJ', 'MG', 'BA', 'DF', 'CE', 'PR', 'PE'];
      
      endereco = {
        rua: `${streets[Math.floor(Math.random() * streets.length)]}, ${100 + Math.floor(Math.random() * 999)}`,
        bairro: `${['Centro', 'Vila Nova', 'Jardim América', 'Copacabana', 'Boa Vista'][Math.floor(Math.random() * 5)]}`,
        cidade: cities[Math.floor(Math.random() * cities.length)],
        estado: states[Math.floor(Math.random() * states.length)],
        cep: `${Math.floor(Math.random() * 99999).toString().padStart(5, '0')}-${Math.floor(Math.random() * 999).toString().padStart(3, '0')}`
      };
    }
    
    const data = {
      nome: `${firstName} ${lastName}`,
      cpf: generateCPF(),
      rg: `${Math.floor(Math.random() * 99999999)}-${Math.floor(Math.random() * 10)}`,
      genero: gender,
      nascimento: `${birthDay.toString().padStart(2, '0')}/${birthMonth.toString().padStart(2, '0')}/${birthYear}`,
      endereco,
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
          <p className="text-gray-400">Gera dados pessoais completos e válidos com endereços reais</p>
        </div>
        <Button 
          onClick={generateData}
          disabled={isGenerating}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold"
        >
          {isGenerating ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Gerando...</span>
            </div>
          ) : (
            <>
              <RefreshCw className="w-4 h-4 mr-2 text-white" />
              Gerar Dados
            </>
          )}
        </Button>
      </div>

      {/* Seção de busca de CEP */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <MapPin className="w-5 h-5" />
            <span>Buscar Endereço Real por CEP</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="Digite o CEP (ex: 01310-100)"
              className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
              maxLength={9}
            />
            <Button
              onClick={searchCep}
              disabled={isSearchingCep}
              className="bg-green-500 hover:bg-green-600 text-white font-bold"
            >
              {isSearchingCep ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Search className="w-4 h-4 text-white" />
              )}
            </Button>
          </div>
          
          {addressData && (
            <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
              <h4 className="text-green-400 font-semibold mb-2">Endereço Encontrado:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p className="text-gray-300"><strong>CEP:</strong> {addressData.cep}</p>
                <p className="text-gray-300"><strong>UF:</strong> {addressData.uf}</p>
                <p className="text-gray-300"><strong>Cidade:</strong> {addressData.localidade}</p>
                <p className="text-gray-300"><strong>Bairro:</strong> {addressData.bairro}</p>
                <p className="text-gray-300 col-span-2"><strong>Logradouro:</strong> {addressData.logradouro}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

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
                    className="border-gray-600 text-gray-400 hover:bg-green-500 hover:border-green-500 hover:text-white"
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
                    className="border-gray-600 text-gray-400 hover:bg-green-500 hover:border-green-500 hover:text-white"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              ))}
              
              <Button 
                onClick={copyAll}
                className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-bold"
              >
                <Copy className="w-4 h-4 mr-2 text-white" />
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
