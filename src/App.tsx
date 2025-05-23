
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import LoginAds from "./pages/LoginAds";
import Dashboard from "./pages/Dashboard";
import DashboardAds from "./pages/DashboardAds";
import NotFound from "./pages/NotFound";
import TermosDeUso from "./pages/TermosDeUso";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";

const queryClient = new QueryClient();

// Componente para proteger rotas do ZuckSafe
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = localStorage.getItem('zucksafe_user');
  return user ? <>{children}</> : <Navigate to="/painel-zuck-safe-login-plataforma-digital" replace />;
};

// Componente para proteger rotas do ZuckSafeAds
const ProtectedRouteAds = ({ children }: { children: React.ReactNode }) => {
  const user = localStorage.getItem('zucksafeads_user');
  return user ? <>{children}</> : <Navigate to="/painel-zuck-safe-ads-login-plataforma-digital" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/painel-zuck-safe-login-plataforma-digital" element={<Login />} />
          <Route path="/painel-zuck-safe-ads-login-plataforma-digital" element={<LoginAds />} />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard-ads" 
            element={
              <ProtectedRouteAds>
                <DashboardAds />
              </ProtectedRouteAds>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
