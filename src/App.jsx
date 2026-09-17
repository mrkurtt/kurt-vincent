import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
