import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import { BasicsLayout } from "@/layouts/BasicsLayout";
import { EALayout } from "@/layouts/EALayout";
import { BrokersLayout } from "@/layouts/BrokersLayout";
import { GuidesLayout } from "@/layouts/GuidesLayout";

// Home & static pages
import Index from "./pages/Index";
import Gateway from "./pages/Gateway";
import Start from "./pages/Start";
import About from "./pages/About";
import Consult from "./pages/Consult";
import Thanks from "./pages/Thanks";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

// Basics pages
import BasicsOverview from "./pages/basics/Overview";
import Futures from "./pages/basics/Futures";
import FX from "./pages/basics/FX";
import Leverage from "./pages/basics/Leverage";
import Glossary from "./pages/basics/Glossary";

// EA pages
import EAOverview from "./pages/ea/Overview";
import EAInstall from "./pages/ea/Install";
import EAUsageGuide from "./pages/ea/UsageGuide";
import EABacktest from "./pages/ea/Backtest";
import EAVPS from "./pages/ea/VPS";
import EAMQL5Market from "./pages/ea/MQL5Market";

// Broker pages
import BrokerList from "./pages/BrokerList";
import BrokerDetail from "./pages/BrokerDetail";

// Guide pages
import Education from "./pages/Education";
import MT5Manual from "./pages/MT5Manual";
import MT5PCGuide from "./pages/MT5PCGuide";
import MT5MobileGuide from "./pages/MT5MobileGuide";
import Resources from "./pages/Resources";
import Roadmap from "./pages/Roadmap";
import MarketBasics from "./pages/education/MarketBasics";
import Strategy from "./pages/education/Strategy";
import Risk from "./pages/education/Risk";
import WhyMT5 from "./pages/education/WhyMT5";
import BeforeMT5 from "./pages/education/BeforeMT5";
import Orders from "./pages/education/Orders";
import Indicators from "./pages/education/Indicators";
import AccountTypes from "./pages/education/AccountTypes";
import Shortcuts from "./pages/education/Shortcuts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />
          <Route path="/gateway" element={<Gateway />} />
          <Route path="/start" element={<Start />} />
          <Route path="/about" element={<About />} />

          {/* Basics section - /basics/* */}
          <Route element={<BasicsLayout />}>
            <Route path="/basics" element={<BasicsOverview />} />
            <Route path="/basics/futures" element={<Futures />} />
            <Route path="/basics/fx" element={<FX />} />
            <Route path="/basics/leverage" element={<Leverage />} />
            <Route path="/basics/glossary" element={<Glossary />} />
          </Route>

          {/* EA section - /ea/* */}
          <Route element={<EALayout />}>
            <Route path="/ea" element={<EAOverview />} />
            <Route path="/ea/install" element={<EAInstall />} />
            <Route path="/ea/usage-guide" element={<EAUsageGuide />} />
            <Route path="/ea/backtest" element={<EABacktest />} />
            <Route path="/ea/vps" element={<EAVPS />} />
            <Route path="/ea/mql5-market" element={<EAMQL5Market />} />
          </Route>

          {/* Brokers section */}
          <Route element={<BrokersLayout />}>
            <Route path="/brokers" element={<BrokerList />} />
            <Route path="/brokers/:slug" element={<BrokerDetail />} />
          </Route>

          {/* Guides section - /guides/* */}
          <Route element={<GuidesLayout />}>
            <Route path="/guides" element={<Education />} />
            <Route path="/guides/market-basics" element={<MarketBasics />} />
            <Route path="/guides/strategy" element={<Strategy />} />
            <Route path="/guides/risk" element={<Risk />} />
            <Route path="/guides/why-mt5" element={<WhyMT5 />} />
            <Route path="/guides/before-mt5" element={<BeforeMT5 />} />
            <Route path="/guides/mt5-manual" element={<MT5Manual />} />
            <Route path="/guides/mt5-pc" element={<MT5PCGuide />} />
            <Route path="/guides/mt5-mobile" element={<MT5MobileGuide />} />
            <Route path="/guides/resources" element={<Resources />} />
            <Route path="/guides/roadmap" element={<Roadmap />} />
            <Route path="/guides/orders" element={<Orders />} />
            <Route path="/guides/indicators" element={<Indicators />} />
            <Route path="/guides/account-types" element={<AccountTypes />} />
            <Route path="/guides/shortcuts" element={<Shortcuts />} />
          </Route>

          {/* Standalone pages */}
          <Route path="/consult" element={<Consult />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/blog" element={<Blog />} />

          {/* Admin */}
          <Route path="/admin" element={<Admin />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
