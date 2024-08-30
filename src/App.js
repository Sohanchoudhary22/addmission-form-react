import './App.css';
import Footer from './components/layout/footer/Footer';
import Main from './components/layout/main/Main';
import Navbar from './components/layout/navbar/Navbar';
import Sidebar from './components/layout/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Sidebar/>
       <Main/>
      <Footer/>
    </div>
  );
}

export default App;