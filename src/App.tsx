
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ComingSoon from "./pages/ComingSoon";
import "./App.css";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
