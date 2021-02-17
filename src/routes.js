import { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Search = lazy(() => import('./pages/Search'));
const User = lazy(() => import('./pages/User'));

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* <HashRouter basename="/"> */}
      <Suspense fallback={<div />}>
        <Route path="/search-hub-challenge" exact component={Search} />
        <Route path="/search-hub-challenge/user/:login">
          <User />
        </Route>
      </Suspense>
      {/* </HashRouter> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
