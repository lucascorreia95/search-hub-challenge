import { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const Search = lazy(() => import('./pages/Search'));
const User = lazy(() => import('./pages/User'));

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<div />}>
        <Route path="/search-hub-challenge" exact component={Search} />
        <Route path="/search-hub-challenge/user/:login">
          <User />
        </Route>
        <Redirect from="*" to="/search-hub-challenge" />
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default Routes;
