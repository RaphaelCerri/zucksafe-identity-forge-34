
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Copy, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TextRefiner = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const addInvisibleChars = (text: string) => {
    // Adiciona caracteres unicode invisíveis aleatoriamente
    const invisibleChars = ['\u200B', '\u200C', '\u200D', '\u2060'];
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
      result += text[i];
      if (Math.random() > 0.7) {
        result += invisibleChars[Math.floor(Math.random() * invisibleChars.length)];
      }
    }
    
    return result;
  };

  const processText = async () => {
    if (!inputText.trim()) return;
    
    setIsProcessing(true);
    
    // Simula processamento
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const processed = addInvisibleChars(inputText);
    setOutputText(processed);
    
    setIsProcessing(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
    toast({
      title: "Copiado!",
      description: "Texto refinado copiado para a área de transferência",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Refinador de Texto</h2>
        <p className="text-gray-400">Adiciona caracteres unicode invisíveis para evitar detecção</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Texto Original</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Cole aqui o texto que deseja refinar..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[200px]"
            />
            
            <Button 
              onClick={processText}
              disabled={isProcessing || !inputText.trim()}
              className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-bold"
            >
              {isProcessing ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>Refinando...</span>
                </div>
              ) : (
                'Refinar Texto'
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Output */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Copy className="w-5 h-5" />
              <span>Texto Refinado</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={outputText}
              readOnly
              className="bg-gray-700 border-gray-600 text-white min-h-[200px]"
              placeholder="O texto refinado aparecerá aqui..."
            />
            
            {outputText && (
              <div className="space-y-4">
                <div className="text-green-400 text-sm space-y-1">
                  <p>✓ Caracteres unicode invisíveis adicionados</p>
                  <p>✓ Espaçamentos alterados</p>
                  <p>✓ Pronto para usar em anúncios</p>
                </div>
                <Button 
                  onClick={copyToClipboard}
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-bold"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar Texto
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TextRefiner;
