import HomePage from "../Pages/HomePage";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GalleryMenu from "../Pages/GalleryMenu";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import ProductFilter from "../Pages/ProductFilter";
import TermsAndConditions from "../Pages/TermsAndConditions";
import Privacypolicy from "../Pages/PrivacyPolicy";
import ProductUi from "../UI/ImageGallery/ProductUi";
import Gallery from "../Pages/Gallery";
const Error404 = lazy(() => import("../Pages/Error404.js"));
const BookingPage = lazy(() => import("../Pages/BookingPage"));
const AboutUs = lazy(() => import("../Pages/AboutUs"));
const MoreDetails = lazy(() => import("../Pages/MoreDetails"));
const Search = lazy(() => import("../Pages/Search"));
const SignUp = lazy(() => import("../Pages/SignUp"));
const Checkout = lazy(() => import("../UI/Checkout"));
const BeforeAfter = lazy(() => import("../Pages/BeforeAfter"));

const MyRoutes = ({ user, showCart }) => (
  <Routes>
    <Route
      path="/login"
      element={user?.email ? <Navigate to={`/profile/${user.id}`} /> : <Login />}
    />
    <Route path="/signup" element={<SignUp />} />
    <Route
      path="/profile/:id"
      element={user?.userName ? <Profile details={user} /> : <Navigate to="/login" />}
    />
    <Route
      path="/products/rims"
      element={<ProductFilter filter={"rims"}/>}
      exact
      errorElement={<Error404 />}
    />

    <Route
      path="/products/tyres"
      element={<ProductFilter filter={"tyres"}/>}
      exact
      errorElement={<Error404 />}
    />
    <Route
      path="/products"
      element={<ProductFilter filter={"all"}/>}
      exact
      errorElement={<Error404 />}
    />
    <Route
      path="/test"
      element={<ProductUi />}
      exact
      errorElement={<Error404 />}
    />

    <Route
      path="/booking"
      element={<BookingPage />}
      exact
      errorElement={<Error404 />}
    />
    {/* <Route
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
    /> */}

    <Route path="/gallery" element={<Gallery />} exact  errorElement={<Error404/>}/>
    <Route path="/about-us" element={<AboutUs />} exact />
    <Route path="/search/:key" element={<Search />} exact />
    <Route
      path="/details/:id"
      element={<MoreDetails onShowCart={showCart} />}
      exact
    />
    <Route path="/checkout" element={user?.email ? <Checkout /> : <Navigate to="/login"/>} />
    <Route path="/termsAndConditions" element={<TermsAndConditions/>} />
    <Route path="/privacypolicy" element={<Privacypolicy/>} />
    <Route path="*" exact element={<Error404 />} />
    <Route path="/" element={<HomePage />} errorElement={<Error404 />} exact />
  </Routes>
);
export default MyRoutes;
