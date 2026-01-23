import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrandGenerator } from './brand-generator/BrandGenerator';
import { Portfolio } from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/brand-generator" element={<BrandGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
