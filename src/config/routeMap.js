import {lazy} from "react";

const Home = lazy(() => import(/*webpackChunkName:'Home'*/'../view/home'))
const Category = lazy(() => import(/*webpackChunkName:'Category'*/'../view/category/category'))
const Product = lazy(() => import(/*webpackChunkName:'Product'*/'../view/product/product'))
const User = lazy(() => import(/*webpackChunkName:'User'*/'../view/user/user'))
const Bar = lazy(() => import(/*webpackChunkName:'Bar'*/'../view/charts/bar'))

const  routeList = [
  {path: '/home', component: Home},
  {path: '/category', component: Category},
  {path: '/product', component: Product},
  {path: '/user', component: User},
  {path: '/chart/bar', component: Bar}
]
export default routeList