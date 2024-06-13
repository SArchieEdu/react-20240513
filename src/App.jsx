import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home";
import { ContactsPage } from "./pages/contacts";
import { HeadphonesPage } from "./pages/headphones";
import { Layout } from "./components/layout/component";
import { Headphone } from "./components/headphone/component";
import { PromoPage } from "./pages/promo";
import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "contacts", element: <ContactsPage /> },
      {
        path: "headphones",
        element: <HeadphonesPage />,
        children: [
          {
            path: ":headphoneId",
            element: <Headphone />,
          },
        ],
      },
      { path: "promo", element: <PromoPage /> },
      {
        path: "only-for-authorized",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
