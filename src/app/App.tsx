
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom' ;
import './App.css'
import MordenArt from '../ImageCategory/MordenArt.tsx';
import Sculptures from '../ImageCategory/Sculptures.tsx';
import Cubism from '../ImageCategory/Cubism';
import Abstract from '../ImageCategory/Abstract.tsx';
import First from '../InitialPage/First.tsx';
import Classic from '../ImageCategory/Classic';

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
