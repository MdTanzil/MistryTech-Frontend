import { createBrowserRouter } from "react-router-dom";
import CartPage from "../Page/CartPage";
import ContactUs from "../Page/ContactUs";
import Error from "../Page/Error";
import HelpCenter from "../Page/HelpCenter/HelpCenter";
import Login from "../Page/Login";
import MeetingRequest from "../Page/MeetingRequest/MeetingRequest";
import ProductDetails from "../Page/ProductDetails/ProductDetails";
import AdminHome from "../Page/admin/AdminHome";
import Collections from "../Page/collections/Collections";
import Home from "../componentes/Home/Home/Home";
import Admin from "../layout/Admin";
import Main from "../layout/Main";
import AuthProvider from "../provider/AuthProvider";
import BrandStory from "../shared/Footer/BrandStory";
import BusinessEntityRecord from "../shared/Footer/BusinessEntityRecord";
import Career from "../shared/Footer/Career";
import ExchangeRefund from "../shared/Footer/ExchangeRefund";
import MistrytechHappyPhoto from "../shared/Footer/MistrytechHappyPhoto";
import ServicingRequest from "../shared/Footer/ServicingRequest";
import ShippingPolicy from "../shared/Footer/ShippingPolicy";
import SocialMediaPost from "../shared/Footer/SocialMediaPost";
import TermsCondition from "../shared/Footer/TermsCondition";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/collections/:slug",
        element: <Collections></Collections>,
      },
      {
        path: "/product-details",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/cart",
        element: <CartPage></CartPage>,
      },

      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/meeting-request",
        element: <MeetingRequest></MeetingRequest>,
      },
      {
        path: "/help-center",
        element: <HelpCenter></HelpCenter>,
      },
      {
        path: "/brand-story",
        element: <BrandStory></BrandStory>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/business-entity-record",
        element: <BusinessEntityRecord></BusinessEntityRecord>,
      },
      {
        path: "mistrytech-happy-photo",
        element: <MistrytechHappyPhoto></MistrytechHappyPhoto>,
      },
      {
        path: "/social-media-post",
        element: <SocialMediaPost></SocialMediaPost>,
      },
      {
        path: "/servicing-request",
        element: <ServicingRequest></ServicingRequest>,
      },
      {
        path: "/shipping-policy",
        element: <ShippingPolicy></ShippingPolicy>,
      },
      {
        path: "/exchange-refund",
        element: <ExchangeRefund></ExchangeRefund>,
      },
      {
        path: "/terms-condition",
        element: <TermsCondition></TermsCondition>,
      },
    ],
    errorElement: <Error />,
  },

  {
    path: "/login",
    element: (
      <AuthProvider>
        <Login />
      </AuthProvider>
    ),
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <AdminHome />,
      },
    ],
  },
]);
export default router;
