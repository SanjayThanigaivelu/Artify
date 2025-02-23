
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom' ;
import './App.css'
import Abstract from './abstract';
import First from './First';
function App() {
  
  return (
    <Router>
      <Routes>
      <Route path='/' element={<First/>}/>
        <Route path='/abstract' element = {<Abstract/>} />
        
      </Routes>
    </Router>
     
  )
}

export default App
