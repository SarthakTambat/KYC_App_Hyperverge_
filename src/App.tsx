import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DefaultProviders } from "./components/providers/default.tsx";
import Index from "./pages/Index.tsx";
import Solution from "./pages/Solution.tsx";
import Architecture from "./pages/Architecture.tsx";
import Demo from "./pages/Demo.tsx";
import NotFound from "./pages/NotFound.tsx";

export default function App() {
  return (
    <DefaultProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/demo" element={<Demo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DefaultProviders>
  );
}