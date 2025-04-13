
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import InvestmentHome from "./pages/Investment/InvestmentHome";
import MutualFunds from "./pages/Investment/MutualFunds";
import Dashboard from "./pages/Investment/Dashboard";
import IcoIdo from "./pages/Investment/IcoIdo";
import News from "./pages/Investment/News";
import TradingHome from "./pages/Trading/TradingHome";
import Futures from "./pages/Trading/Futures";
import Positions from "./pages/Trading/Positions";
import Orders from "./pages/Trading/Orders";
import Watchlist from "./pages/Trading/Watchlist";
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
            <Route path="investment/mutual-funds" element={<MutualFunds />} />
            <Route path="investment/dashboard" element={<Dashboard />} />
            <Route path="investment/ico-ido" element={<IcoIdo />} />
            <Route path="investment/news" element={<News />} />
            
            {/* Trading Routes */}
            <Route path="trading" element={<TradingHome />} />
            <Route path="trading/futures" element={<Futures />} />
            <Route path="trading/positions" element={<Positions />} />
            <Route path="trading/orders" element={<Orders />} />
            <Route path="trading/watchlist" element={<Watchlist />} />
            
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
