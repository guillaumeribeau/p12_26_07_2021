
import './styles/index.scss';
import {Switch, Route, Router } from 'react-router-dom';
import {createBrowserHistory } from 'history';
import DashBoard from './pages/DashBoard';
import FetchData from './components/FetchData';
import ErrorMessage from './components/ErrorMessage';

function App() {
 const history = createBrowserHistory()
  return (
    <>
    <FetchData/>
   
     <Router history= {history} >
     <Switch>
    <Route path='/:id' render= {(props)=> <DashBoard{...props }/>}/>
    <Route path='*' component={<ErrorMessage/>}/>
    </Switch>
     </Router>

 
</>
  );

}

export default App;