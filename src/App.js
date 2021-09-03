import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Table from "./components/Table";
import CoinDetail from "./components/CoinDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Table} />
          <Route path="/coinDetails/:id" component={CoinDetail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
