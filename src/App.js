
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import DashBoard from './pages/DashBoard';

function App() {
  return (
    <BrowserRouter>
    
   <DashBoard/>
    </BrowserRouter>
  );

}

export default App;