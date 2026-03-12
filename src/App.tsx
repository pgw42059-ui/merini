import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layouts (small, keep eager)
import { BasicsLayout } from "@/layouts/BasicsLayout";
import { EALayout } from "@/layouts/EALayout";
import { BrokersLayout } from "@/layouts/BrokersLayout";
import { GuidesLayout } from "@/layouts/GuidesLayout";

// Home & static pages
const Index = lazy(() => import("./pages/Index"));
const Gateway = lazy(() => import("./pages/Gateway"));
const Start = lazy(() => import("./pages/Start"));
const About = lazy(() => import("./pages/About"));
const Consult = lazy(() => import("./pages/Consult"));
const Thanks = lazy(() => import("./pages/Thanks"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Blog = lazy(() => import("./pages/Blog"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Admin = lazy(() => import("./pages/Admin"));

// Basics pages
const BasicsOverview = lazy(() => import("./pages/basics/Overview"));
const Futures = lazy(() => import("./pages/basics/Futures"));
const FX = lazy(() => import("./pages/basics/FX"));
const Leverage = lazy(() => import("./pages/basics/Leverage"));
const Glossary = lazy(() => import("./pages/basics/Glossary"));

// EA pages
const EAOverview = lazy(() => import("./pages/ea/Overview"));
const EAInstall = lazy(() => import("./pages/ea/Install"));
const EAUsageGuide = lazy(() => import("./pages/ea/UsageGuide"));
const EABacktest = lazy(() => import("./pages/ea/Backtest"));
const EAVPS = lazy(() => import("./pages/ea/VPS"));
const EAMQL5Market = lazy(() => import("./pages/ea/MQL5Market"));

// Broker pages
const BrokerList = lazy(() => import("./pages/BrokerList"));
const BrokerDetail = lazy(() => import("./pages/BrokerDetail"));

// Guide pages
const Education = lazy(() => import("./pages/Education"));
const MT5Manual = lazy(() => import("./pages/MT5Manual"));
const MT5PCGuide = lazy(() => import("./pages/MT5PCGuide"));
const MT5MobileGuide = lazy(() => import("./pages/MT5MobileGuide"));
const Resources = lazy(() => import("./pages/Resources"));
const Roadmap = lazy(() => import("./pages/Roadmap"));
const MarketBasics = lazy(() => import("./pages/education/MarketBasics"));
const Strategy = lazy(() => import("./pages/education/Strategy"));
const Risk = lazy(() => import("./pages/education/Risk"));
const WhyMT5 = lazy(() => import("./pages/education/WhyMT5"));
const BeforeMT5 = lazy(() => import("./pages/education/BeforeMT5"));
const Orders = lazy(() => import("./pages/education/Orders"));
const Indicators = lazy(() => import("./pages/education/Indicators"));
const AccountTypes = lazy(() => import("./pages/education/AccountTypes"));
const Shortcuts = lazy(() => import("./pages/education/Shortcuts"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
