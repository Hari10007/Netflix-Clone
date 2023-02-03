import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import Post from './Components/Post/Post';
import { action, horror, orginals } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Post url= {orginals} title='Netflix Orginals'/>
      <Post url={horror} title='Horror Series' small/>
      <Post url={action} title='Action Series' small/>
    </div>
  );
}

export default App;
