import Navbar from './components/Navbar';
import Meme from './components/Meme';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Meme />
      <div className="boxes">
        <Box />
      </div>
    </div>
  );
}

export default App;
