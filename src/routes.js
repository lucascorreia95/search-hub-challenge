import { BrowserRouter, Switch, Route } from "react-router-dom";

import Search from "./pages/Search";
import User from "./pages/User";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/user/:login" children={<User />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
