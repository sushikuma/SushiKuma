import './App.css';
import Header from './components/Header';
import Page from './components/Page';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import FindUs from './components/pages/FindUs';
import Reservation from './components/pages/Reservation';

function App() {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}

export default App;
