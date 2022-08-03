import './App.css';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router'
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact'
import News from './pages/News/News'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
// import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Detail from './pages/Detail/Detail';
import  CheckoutTemplate  from './templates/CheckoutTemplate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import {Suspense, lazy} from 'react'
import { UserTemplate } from './templates/UserTemplate/UserTemplate';

const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'));

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}> 
      <Switch>
        {/* <Route path={'/home'} component={Home}/> */}
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        {/* <Route path="/login" exact Component={Login} /> */}
        {/* <HomeTemplate path="/login" exact Component={Login} /> */}
        {/* <Route path="/register" exact Component={Register} /> */}
        <HomeTemplate path="/" exact Component={Home} />
        <UserTemplate path="/login" exact Component={Login} />
        <UserTemplate path="/register" exact Component={Register} />

        <Suspense fallback={<h1>Loading...</h1>}>
        <CheckoutTemplateLazy path="/checkout/:id" exact Component={Checkout} />
        </Suspense>

       


      </Switch>
    </Router>
  );
}
export default App;