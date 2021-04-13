import './App.css';
import About from './components/About';
import Home from './components/Home';
import UserStore from './store/UserStore';

const App = () => {
  const store = new UserStore();
  return (
    <div className='App'>
      {/* <Home store={store} /> */}
      <About />
    </div>
  );
};

export default App;
