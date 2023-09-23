import HomePage from "../Pages/HomePage";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GalleryMenu from "../Pages/GalleryMenu";
const Error404 = lazy(() => import("../Pages/Error404.js"));
const BookingPage = lazy(() => import("../Pages/BookingPage"));
const AboutUs = lazy(() => import("../Pages/AboutUs"));
const Login = lazy(() => import("../Pages/Login"));
const MoreDetails = lazy(() => import("../Pages/MoreDetails"));
const Products = lazy(() => import("../Pages/Products"));
const Profile = lazy(() => import("../Pages/Profile"));
const Search = lazy(() => import("../Pages/Search"));
const SignUp = lazy(() => import("../Pages/SignUp"));
const Checkout = lazy(() => import("../UI/Checkout"));
const BeforeAfter = lazy(() => import("../Pages/BeforeAfter"));

const MyRoutes = ({ user, showCart }) => (
  <Routes>
    <Route
      path="/login"
      element={user ? <Navigate to={`/profile/${user.id}`} /> : <Login />}
    />
    <Route path="/signup" element={<SignUp />} />
    <Route
      path="/profile/:id"
      element={user ? <Profile details={user} /> : <Navigate to="/login" />}
    />
    {/* <Route path="/profile" element={<Profile />} /> */}

    <Route
      path="/products/rims"
      element={<Products />}
      exact
      errorElement={<Error404 />}
    />

    <Route
      path="/products/tyres"
      element={<Products />}
      exact
      errorElement={<Error404 />}
    />
    <Route
      path="/products"
      element={<Products />}
      exact
      errorElement={<Error404 />}
    />

    <Route
      path="/booking"
      element={<BookingPage />}
      exact
      errorElement={<Error404 />}
    />
    <Route
      path="/beforeAfter"
      element={<GalleryMenu />}
      exact
      errorElement={<Error404 />}
    />
    <Route
      path="/beforeAfter/:id"
      element={<BeforeAfter />}
      exact
      errorElement={<Error404 />}
    />

    <Route path="/about-us" element={<AboutUs />} exact />
    <Route path="/search/:key" element={<Search />} exact />
    <Route
      path="/details/:id"
      element={<MoreDetails onShowCart={showCart} />}
      exact
    />
    {/* <Route path="/checkout" element={ user ?<Checkout/>: <Navigate to="/login"/>}/> */}
    <Route path="/checkout" element={<Checkout />} />
    <Route path="*" exact element={<Error404 />} />
    <Route path="/" element={<HomePage />} errorElement={<Error404 />} exact />
  </Routes>
);
export default MyRoutes;
