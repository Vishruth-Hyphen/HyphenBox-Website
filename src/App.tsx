import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OGImage from "./pages/OGImage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Create a client
const queryClient = new QueryClient();

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    // Track page views when location changes
    if (window.gtag) {
      window.gtag('config', 'G-TZBKR8D281', {
        page_path: location.pathname + location.search,
        page_title: document.title
      });
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/og-image" element={<OGImage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  useEffect(() => {
    // Add Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-TZBKR8D281';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-TZBKR8D281', {
        send_page_view: false // We'll manually send page views
      });
    `;
    document.head.appendChild(script2);

    // Send initial page view after a short delay to ensure gtag is ready
    const timer = setTimeout(() => {
      if (window.gtag) {
        window.gtag('config', 'G-TZBKR8D281', {
          page_path: window.location.pathname + window.location.search,
          page_title: document.title
        });
      }
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (document.head.contains(script1)) {
        document.head.removeChild(script1);
      }
      if (document.head.contains(script2)) {
        document.head.removeChild(script2);
      }
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
