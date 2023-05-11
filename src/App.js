
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title = "Codeutils"/> 
    <div className="container">
    <TextForm heading = "Enter the text "/>
    </div>
   </>
  );
}

export default App;
