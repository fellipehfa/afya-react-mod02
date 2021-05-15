import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App"

const Router: React.FC = () => {
  return (
      <BrowserRouter>
        <Switch>
            <Route path="/teste" component={App} />
        </Switch>
      </BrowserRouter>
  );
}

export default Router;