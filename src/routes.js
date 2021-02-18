import { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Search = lazy(() => import('./pages/Search'));
const User = lazy(() => import('./pages/User'));

export const Routes = () => (
  <BrowserRouter basename="/search-hub-challenge">
    <Switch>
      <Suspense fallback={<div />}>
        <Route path="/" exact component={Search} />
        <Route path="/user/:login">
          <User />
        </Route>
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default Routes;
