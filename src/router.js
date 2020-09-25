import Home from './pages/home';
import About from './pages/about';
import GettingStarted from './pages/getting-started';
import PublicApi from './pages/public-api';
import Signin from './pages/signin';
import Signup from './pages/signup';

export const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/getting-started',
    component: GettingStarted,
  },
  {
    path: '/api',
    component: PublicApi,
  },
  {
    path: '/signup',
    component: Signup,
  },
  {
    path: '/signin',
    component: Signin,
  },
];