import Home from './Components/Home';
import { ThemeArrayProvider } from './Components/Context';


function App() {
  return (
    <ThemeArrayProvider>
      <div className="App">
        <Home />
      </div>
    </ThemeArrayProvider>

  );
}

export default App;
