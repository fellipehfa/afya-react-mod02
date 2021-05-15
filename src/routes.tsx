import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/pages/Home"
import Contact from "./views/pages/Contact"

const Routes: React.FC = () => {
  return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;