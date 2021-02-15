import { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Search = lazy(() => import("./pages/Search"));
const User = lazy(() => import("./pages/User"));

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<div />}>
          <Route path="/" exact component={Search} />
          <Route path="/user/:login" children={<User />} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
