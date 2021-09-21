import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./view/admin/admin";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Admin}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
