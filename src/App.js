import Home from './Components/Home';
import Game from './Components/Game';
import { ThemeArrayProvider } from './Components/Context';
import Background from './Background';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <ThemeArrayProvider>
      <Background>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/game" element={<Game />}/>
          </Routes>
        </BrowserRouter>
      </Background>
    </ThemeArrayProvider>

  );
}

export default App;
