import './App.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Main} from "./components/Main/Main"
import { Product } from './components/Product/Product';
import { Advantage } from './components/Advantage/Advantage';

function App() {
  return (

      <>
        
        < Navbar />
        < Main />
        < Product />
        < Advantage />
      </>

  );
}

export default App;
