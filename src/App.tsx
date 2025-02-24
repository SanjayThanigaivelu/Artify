
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom' ;
import './App.css'
import MordenArt from './MordenArt';
import Sculptures from './Sculptures';
import Cubism from './Cubism';
import Abstract from './abstract';
import First from './First';
import Classic from './Classic';

function App() {
  
  return (
    <Router>
      <Routes>
      <Route path='/' element={<First/>}/>
      <Route path='/modern-art'element={<MordenArt/>}/>
      <Route path='/classic' element={<Classic/>}/>
      <Route path='/sculptures' element={<Sculptures/>}/>
      <Route path='/cubism' element={<Cubism/>}/>
      <Route path='/abstract' element = {<Abstract/>} />
        
      </Routes>
    </Router>
     
  )
}

export default App
