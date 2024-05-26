
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Cards from './components/Cards/Cards';
import { Action,originals ,Comedy,Horror,Romance,Documentaries} from './Urls';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Cards url = {originals} title = 'Netflix Original'/>
      <Cards url = {Action} title = 'Action Movies' isSmall/>
      <Cards url = {Comedy} title = 'Comedy Movies' isSmall/>
      <Cards url = {Horror} title = 'Horror Movies' isSmall/>
      <Cards url = {Romance} title = 'Romantic Movies' isSmall/>
      <Cards url = {Documentaries} title = 'Documentaries' isSmall/>



    </div>
  );
}

export default App;
