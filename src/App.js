import './App.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Main} from "./components/Main/Main"
import { Product } from './components/Product/Product';
import { Advantage } from './components/Advantage/Advantage';
import { Features } from './components/Features/Features';
import { Footer } from './components/Footer/Footer';




function App() {
  return (

      <>
        < Navbar />
        < Main />
        < Product />
        < Advantage />
        < Features />
        < Footer />
        
      </>

  );
}

export default App;
