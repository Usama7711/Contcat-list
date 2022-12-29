import './App.css';
import {Routes , Route , BrowserRouter} from "react-router-dom"
import Contact from './Contact';
import Editcontact from './Editcontact';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/Editcontact" element={<Editcontact />} />
        </Routes>
    </>
  );
}

export default App;
