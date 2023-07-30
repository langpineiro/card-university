
import {Routes, Route} from 'react-router-dom'
import AllCards from './Components/AllCards'
import Navbar from './Components/Navbar';
import Contador from './Components/Contador';
function App() {
  
  return (
      <>
       <Navbar/>
       <Routes>
          <Route path='/' element={<AllCards/>} />
          <Route path='/contador' element={<Contador/>}/>
       </Routes>
      
      </>
  );
}

export default App;
