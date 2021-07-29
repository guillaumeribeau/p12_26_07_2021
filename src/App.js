
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import FetchDating from './components/FetchDating';

function App() {
  return (
    <BrowserRouter>
    <FetchDating/>
   <DashBoard/>
    </BrowserRouter>
  );

}

export default App;