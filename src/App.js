import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/about" element={<About />} /> */}
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
