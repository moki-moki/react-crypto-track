import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Table from "./components/Table";
import CoinDetail from "./components/CoinDetail";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/react-crypto-tracker/" component={Table} />
          <Route path="/coinDetails/:id" component={CoinDetail} />
          <Route path="/Notes" component={Notes} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
