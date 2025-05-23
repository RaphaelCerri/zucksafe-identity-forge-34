import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Copy, Eye, Code } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const CloakerSimulator = () => {
  const [realLink, setRealLink] = useState('');
  const [altLink, setAltLink] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const {
    toast
  } = useToast();
  const generateCloakerCode = () => {
    if (!realLink.trim() || !altLink.trim()) {
      toast({
        title: "Erro",
        description: "Preencha ambos os links",
        variant: "destructive"
      });
      return;
    }
    const code = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirecionamento</title>
    <style>
        body { 
            margin: 0; 
            padding: 20px; 
            font-family: Arial, sans-serif; 
            background: #f5f5f5; 
            text-align: center; 
        }
        .loader { 
            border: 4px solid #f3f3f3; 
            border-top: 4px solid #3498db; 
            border-radius: 50%; 
            width: 40px; 
            height: 40px; 
            animation: spin 2s linear infinite; 
            margin: 20px auto; 
        }
        @keyframes spin { 
            0% { transform: rotate(0deg); } 
            100% { transform: rotate(360deg); } 
        }
    </style>
</head>
<body>
    <h2>Redirecionando...</h2>
    <div class="loader"></div>
    <p>Aguarde enquanto redirecionamos você para o conteúdo.</p>
    
    <script>
        function isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }
        
        function detectBot() {
            const botPatterns = [
                /bot/i, /spider/i, /crawl/i, /slurp/i, /facebook/i, 
                /instagram/i, /twitter/i, /linkedin/i, /pinterest/i
            ];
            return botPatterns.some(pattern => pattern.test(navigator.userAgent));
        }
        
        setTimeout(() => {
            if (detectBot()) {
                // Bots veem o link alternativo
                window.location.href = "${altLink}";
            } else if (isMobile()) {
                // Mobile pode ver link real ou alternativo
                window.location.href = "${realLink}";
            } else {
                // Desktop vê o link real
                window.location.href = "${realLink}";
            }
        }, 2000);
    </script>
</body>
</html>`;
    setGeneratedCode(code);
  };
  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    toast({
      title: "Copiado!",
      description: "Código HTML copiado para a área de transferência"
    });
  };
  return <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Simulador de Redirecionamento</h2>
        <p className="text-gray-400">Gera código HTML para simular comportamento de cloaker</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Configuração */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Eye className="w-5 h-5" />
              <span>Configuração dos Links</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-300 mb-2 block">
                Link Real (para usuários normais)
              </label>
              <Input type="url" placeholder="https://seusite.com/oferta" value={realLink} onChange={e => setRealLink(e.target.value)} className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-300 mb-2 block">
                Link Alternativo (para bots/revisão)
              </label>
              <Input type="url" placeholder="https://seusite.com/landing-segura" value={altLink} onChange={e => setAltLink(e.target.value)} className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
            </div>
            
            <Button onClick={generateCloakerCode} className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-bold">
              <Code className="w-4 h-4 mr-2" />
              Gerar Código
            </Button>
            
            
          </CardContent>
        </Card>

        {/* Código Gerado */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Code className="w-5 h-5" />
                <span>Código HTML</span>
              </div>
              {generatedCode && <Button size="sm" onClick={copyCode} className="bg-green-500 hover:bg-green-600 text-black">
                  <Copy className="w-3 h-3 mr-1" />
                  Copiar
                </Button>}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {generatedCode ? <div>
                <Textarea value={generatedCode} readOnly className="bg-gray-700 border-gray-600 text-white font-mono text-xs min-h-[400px]" />
                <div className="mt-4 text-green-400 text-sm space-y-1">
                  <p>✓ Detecta bots automaticamente</p>
                  <p>✓ Diferencia mobile/desktop</p>
                  <p>✓ Loading visual incluído</p>
                  <p>✓ Pronto para hospedar</p>
                </div>
              </div> : <div className="text-center py-8">
                <Code className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">Configure os links e gere o código</p>
              </div>}
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default CloakerSimulator;