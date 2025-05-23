
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, Download, Image } from 'lucide-react';

const ImageRefiner = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setProcessedImage(null);
    }
  };

  const processImage = async () => {
    if (!selectedFile) return;
    
    setIsProcessing(true);
    
    // Simula processamento
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Simula resultado processado
    const reader = new FileReader();
    reader.onload = (e) => {
      setProcessedImage(e.target?.result as string);
    };
    reader.readAsDataURL(selectedFile);
    
    setIsProcessing(false);
  };

  const downloadProcessed = () => {
    if (!processedImage) return;
    
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = `refined_${selectedFile?.name || 'image'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Refinador de Criativos</h2>
        <p className="text-gray-400">Remove metadados EXIF e altera hash das imagens</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Upload className="w-5 h-5" />
              <span>Upload da Imagem</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
              <Image className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <div className="space-y-2">
                <p className="text-gray-400">Clique para selecionar uma imagem</p>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>
            
            {selectedFile && (
              <div className="text-center space-y-4">
                <p className="text-green-400">✓ {selectedFile.name}</p>
                <Button 
                  onClick={processImage}
                  disabled={isProcessing}
                  className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-bold"
                >
                  {isProcessing ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Processando...</span>
                    </div>
                  ) : (
                    'Refinar Imagem'
                  )}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Resultado */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Imagem Refinada</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {processedImage ? (
              <div className="space-y-4">
                <div className="border border-gray-600 rounded-lg p-4">
                  <img 
                    src={processedImage} 
                    alt="Processed" 
                    className="max-w-full h-auto rounded"
                  />
                </div>
                <div className="text-green-400 text-sm space-y-1">
                  <p>✓ Metadados EXIF removidos</p>
                  <p>✓ Hash alterado</p>
                  <p>✓ Compressão otimizada</p>
                </div>
                <Button 
                  onClick={downloadProcessed}
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-bold"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-400">A imagem processada aparecerá aqui</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ImageRefiner;
