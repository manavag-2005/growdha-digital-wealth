import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import InvestmentHome from "./pages/Investment/InvestmentHome";
import TradingHome from "./pages/Trading/TradingHome";
import ProfilePage from "./pages/Profile/ProfilePage";
import ProfileHome from "./pages/Profile/ProfileHome";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            {/* Investment Routes */}
            <Route path="investment" element={<InvestmentHome />} />
            <Route path="investment/mutual-funds" element={<div className="min-h-screen flex items-center justify-center"><div className="text-white text-xl">Mutual Funds Page</div></div>} />
            <Route path="investment/dashboard" element={<div className="min-h-screen flex items-center justify-center"><div className="text-white text-xl">Investment Dashboard Page</div></div>} />
            <Route path="investment/ico-ido" element={<div className="min-h-screen flex items-center justify-center"><div className="text-white text-xl">ICO/IDO Page</div></div>} />
            <Route path="investment/news" element={<div className="min-h-screen flex items-center justify-center"><div className="text-white text-xl">News Page</div></div>} />
            
            {/* Trading Routes */}
            <Route path="trading" element={<TradingHome />} />
            <Route path="trading/futures" element={<div className="min-h-screen flex items-center justify-center"><div className="text-white text-xl">Futures & Options Page</div></div>} />
            <Route path="trading/positions" element={<div className="min-h-screen flex items-center justify-center"><div className="text-white text-xl">Positions Page</div></div>} />
            <Route path="trading/orders" element={<div className="min-h-screen flex items-center justify-center"><div className="text-white text-xl">Orders Page</div></div>} />
            <Route path="trading/watchlist" element={<div className="min-h-screen flex items-center justify-center"><div className="text-white text-xl">Watchlist Page</div></div>} />
            
            {/* Profile Routes */}
            <Route path="profile" element={<ProfilePage />}>
              <Route index element={<ProfileHome />} />
              <Route path="add-money" element={<div className="glass-card rounded-xl p-6"><h2 className="text-2xl font-bold text-white mb-6">Add Money</h2></div>} />
              <Route path="orders" element={<div className="glass-card rounded-xl p-6"><h2 className="text-2xl font-bold text-white mb-6">Orders</h2></div>} />
              <Route path="bank-details" element={<div className="glass-card rounded-xl p-6"><h2 className="text-2xl font-bold text-white mb-6">Bank Details</h2></div>} />
              <Route path="refer" element={<div className="glass-card rounded-xl p-6"><h2 className="text-2xl font-bold text-white mb-6">Refer & Earn</h2></div>} />
              <Route path="support" element={<div className="glass-card rounded-xl p-6"><h2 className="text-2xl font-bold text-white mb-6">Customer Support</h2></div>} />
              <Route path="reports" element={<div className="glass-card rounded-xl p-6"><h2 className="text-2xl font-bold text-white mb-6">Reports</h2></div>} />
              <Route path="settings" element={<div className="glass-card rounded-xl p-6"><h2 className="text-2xl font-bold text-white mb-6">Settings</h2></div>} />
            </Route>
            
            {/* Other Routes */}
            <Route path="logout" element={<div className="min-h-screen flex items-center justify-center"><div className="text-white text-xl">Logout Page</div></div>} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
