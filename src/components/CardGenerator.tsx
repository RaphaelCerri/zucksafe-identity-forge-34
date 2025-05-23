import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, CreditCard, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CardGenerator = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [usedNames, setUsedNames] = useState<string[]>([]);
  const { toast } = useToast();

  // Large pool of Brazilian names to avoid repetition
  const firstNames = [
    'Ana', 'João', 'Maria', 'Pedro', 'Luísa', 'Carlos', 'Fernanda', 'Rafael', 
    'Juliana', 'Lucas', 'Mariana', 'Gustavo', 'Patrícia', 'Rodrigo', 'Camila', 
    'Eduardo', 'Vanessa', 'Marcelo', 'Beatriz', 'Felipe', 'Larissa', 'Ricardo', 
    'Amanda', 'Daniel', 'Natália', 'Paulo', 'Carolina', 'Diego', 'Letícia', 'Bruno',
    'Aline', 'Matheus', 'Gabriela', 'Leonardo', 'Renata', 'Alexandre', 'Mônica', 'André',
    'Débora', 'Vinícius', 'Jéssica', 'Fábio', 'Luciana', 'Roberto', 'Thaís', 'Thiago',
    'Eliane', 'Fernando', 'Carla', 'Guilherme', 'Roberta', 'Júlio', 'Flávia', 'Marcos',
    'Tatiana', 'Leandro', 'Érica', 'Victor', 'Cristina', 'Jorge', 'Daniela', 'Samuel',
    'Michele', 'Hugo', 'Sônia', 'Raul', 'Verônica', 'José', 'Cláudia', 'César',
    'Regina', 'Márcio', 'Adriana', 'Henrique', 'Bianca', 'Antônio', 'Silvia', 'Maurício'
  ];

  const lastNames = [
    'Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira',
    'Lima', 'Gomes', 'Costa', 'Ribeiro', 'Martins', 'Carvalho', 'Almeida', 'Lopes', 
    'Soares', 'Fernandes', 'Vieira', 'Barbosa', 'Rocha', 'Dias', 'Nascimento', 'Andrade',
    'Moreira', 'Nunes', 'Marques', 'Machado', 'Mendes', 'Freitas', 'Cardoso', 'Ramos',
    'Gonçalves', 'Araújo', 'Pinto', 'Monteiro', 'Cavalcanti', 'Correia', 'Teixeira', 'Medeiros',
    'Moraes', 'Pires', 'Duarte', 'Borges', 'Nogueira', 'Castro', 'Miranda', 'Campos',
    'Brito', 'Guimarães', 'Melo', 'Reis', 'Azevedo', 'Barros', 'Bezerra', 'Xavier',
    'Salles', 'Mesquita', 'Vasconcelos', 'Cordeiro', 'Fonseca', 'Toledo', 'Coelho', 'Dutra',
    'Assunção', 'Pacheco', 'Siqueira', 'Bueno', 'Braga', 'Mattos', 'Faria', 'Cruz'
  ];

  const generateCardNumber = () => {
    // Gera número com algoritmo de Luhn
    const prefix = '4532'; // Visa
    let number = prefix;
    
    for (let i = 0; i < 8; i++) {
      number += Math.floor(Math.random() * 10);
    }
    
    // Calcula dígito verificador
    let sum = 0;
    let shouldDouble = false;
    
    for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number[i]);
      
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    
    const checkDigit = (10 - (sum % 10)) % 10;
    number += checkDigit;
    
    return number.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
  };

  const getRandomName = () => {
    // Generate a pool of possible names
    const possibleNames = [];
    
    // Create at least 100 possible combinations to choose from
    for (let i = 0; i < 100; i++) {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      possibleNames.push(`${firstName} ${lastName}`);
    }
    
    // Filter out names that have been used already
    const availableNames = possibleNames.filter(name => !usedNames.includes(name));
    
    // If we've somehow used all names, reset the used names
    if (availableNames.length === 0) {
      setUsedNames([]);
      return possibleNames[0];
    }
    
    const randomName = availableNames[Math.floor(Math.random() * availableNames.length)];
    return randomName;
  };

  const generateCard = () => {
    const name = getRandomName();
    setUsedNames(prev => [...prev, name]);
    
    const currentYear = new Date().getFullYear();
    const expYear = currentYear + Math.floor(Math.random() * 5) + 1;
    const expMonth = 1 + Math.floor(Math.random() * 12);
    
    return {
      number: generateCardNumber(),
      name: name.toUpperCase(),
      expiry: `${expMonth.toString().padStart(2, '0')}/${expYear.toString().substr(2)}`,
      cvv: Math.floor(Math.random() * 900) + 100
    };
  };

  const generateCards = async () => {
    setIsGenerating(true);
    
    // Simula geração
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newCards = Array.from({ length: quantity }, generateCard);
    setCards(newCards);
    
    setIsGenerating(false);
  };

  const copyCard = (card: any) => {
    const cardData = `Número: ${card.number}
Nome: ${card.name}
Validade: ${card.expiry}
CVV: ${card.cvv}`;
    
    navigator.clipboard.writeText(cardData);
    toast({
      title: "Copiado!",
      description: "Dados do cartão copiados para a área de transferência",
    });
  };

  const exportCards = () => {
    const csvContent = [
      'Número,Nome,Validade,CVV',
      ...cards.map(card => `"${card.number}","${card.name}","${card.expiry}","${card.cvv}"`)
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cartoes_teste.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Gerador de Cartões de Teste</h2>
          <p className="text-gray-400">Gera cartões válidos para testes de anúncios</p>
        </div>
        <div className="flex items-center space-x-4">
          <select 
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="bg-gray-700 border-gray-600 text-white rounded px-3 py-2"
          >
            <option value={1}>1 cartão</option>
            <option value={10}>10 cartões</option>
            <option value={25}>25 cartões</option>
            <option value={50}>50 cartões</option>
          </select>
          <Button 
            onClick={generateCards}
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
                <CreditCard className="w-4 h-4 mr-2" />
                Gerar Cartões
              </>
            )}
          </Button>
        </div>
      </div>

      {cards.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-white">{cards.length} cartão(ões) gerado(s)</p>
            <Button
              onClick={exportCards}
              className="bg-green-500 hover:bg-green-600 text-black font-bold"
            >
              <Download className="w-4 h-4 mr-2" />
              Exportar CSV
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <CreditCard className="w-8 h-8 text-cyan-400" />
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyCard(card)}
                        className="border-gray-600 text-gray-400 hover:bg-cyan-500 hover:border-cyan-500 hover:text-black"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                    
                    <div>
                      <p className="text-gray-400 text-xs">NÚMERO</p>
                      <p className="text-white font-mono text-lg">{card.number}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-400 text-xs">NOME</p>
                      <p className="text-white text-sm">{card.name}</p>
                    </div>
                    
                    <div className="flex space-x-4">
                      <div>
                        <p className="text-gray-400 text-xs">VALIDADE</p>
                        <p className="text-white font-mono">{card.expiry}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">CVV</p>
                        <p className="text-white font-mono">{card.cvv}</p>
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

export default CardGenerator;
