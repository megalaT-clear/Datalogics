import './App.css';
import About from './components/About';
import Appleservice from './components/Appleservice';
import CopyRight from './components/CopyRight';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Lifecycle from './components/Lifecycle';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import Service from './components/Service';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Lifecycle/>
     <div style={{
        padding: '75px',
     }}>The Ultimate Apple Service</div>
     <Partners/>
     <Service/>
     <About/>
     <Footer/>
     <CopyRight/>
    </div>
  );
}

export default App;
