import { Route, Switch } from "react-router-dom";
import Quotes from "./components/pages/QuoteDetail";
import Welcome from "./components/pages/Welcome";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/quotes">
          <Quotes />
        </Route>
        <Route path="/quotes/quoteId"></Route>
        <Route path="/quotes/new-quote"></Route>
      </Switch>
    </main>
  );
}

export default App;
