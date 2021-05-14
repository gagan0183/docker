import './App.css';
import { Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { Fib } from './Fib';
import { OtherPage } from './OtherPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header"></header>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other page</Link>
      </div>
      <div>
        <Route exact path="/" component={Fib} />
        <Route path="/otherpage" component={OtherPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
