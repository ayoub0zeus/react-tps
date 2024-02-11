// import './App.css';
import './index.css'
import JeuDe from './composants/JeuDe'
// import Home from './composants/home';
// import Navbar from './composants/navbar';
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
    <div>
    <JeuDe cache={5} />
    </div>
    </div>
  );
}

export default App;