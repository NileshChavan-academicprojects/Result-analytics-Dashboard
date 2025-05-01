import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Computer from "./pages/Computer/Computer"
import Aiml from "./pages/AIML/Aiml"
import Compresults from "./pages/Compresults/Compresults"
import Aimlresults from "./pages/Aimlresults/Aimlresults";
import Computergraphbox from "./pages/Computergraphbox/computergraphbox"
import Aimlgraphbox from "./pages/Aimlgraphbox/Aimlgraphbox"
import Analyticstools from "./pages/Analyticstools/Analyticstools"
import Linechart from "./pages/Linechart/Linechart";
import Areachart from "./pages/Areachart/Areachart";
import Barchart from "./pages/Barchart/Barchart";
import Piechart from "./pages/Piechart/Piechart";
import Treemapchart from "./pages/Treemachart/Treemapchart"
import Predictiontools from "./pages/Predictiontools/Predictiontools"
import Presentyear from "./pages/Presentyear/presentyear"
import Compare from "./pages/Compare/Compare"
import Individual from "./pages/Indvidual/Individual";

//import Knnmodel from "./pages/Knnmodel/Knnmodel";

import AT from "./pages/AT/Predictiontools"

import Gadedistribution from "./pages/Gradedistribution/gradedistribution"
import Compsemester from "./pages/Compsemester/compsemester"
import Subjectsemester from "./pages/SubjectSemester/Subjectsemester"
import Subjectsemesteraiml from "./pages/SubjectSemesteraiml/Subjectsemesteraiml"
import Aimlsemester from "./pages/Aimlsemester/Aimlsemester"

import Latestresult from "./pages/Latestresult/Latestresult"
import Latestresultaiml from "./pages/Latestresultaiml/Latestresultaiml"

import Users from "./pages/users/Users";
import Products from "./pages/products/Products";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
//import Login from "./pages/login/Login";
import "./styles/global.scss";

import User from "./pages/user/User";
import Product from "./pages/product/Product";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    { path: "/", element: <Layout />, children: [
        { path: "/", element: <Home />, },
        { path: "/users", element: <Users />,},
        { path: "/products", element: <Products />, },
        { path: "/users/:id", element: <User />, },
        { path: "/products/:id", element: <Product />, },
        { path: "/Compresults", element: <Compresults/>},
        { path: "/Computer", element: <Computer/>},
        { path: "/AIML", element: <Aiml/>},
        { path: "/Aimlresults", element: <Aimlresults/>},
        { path: "/Computergraphbox", element: <Computergraphbox/>},
        { path: "/Aimlgraphbox", element: <Aimlgraphbox/>},
        { path: "/Analyticstools", element: <Analyticstools/>},
        { path: "/Linechart", element: <Linechart/>},
        { path: "/Barchart", element: <Barchart/>},
        { path: "/Areachart", element: <Areachart/>},
        { path: "/Piechart", element: <Piechart/>},
        { path: "/Treemachart", element: <Treemapchart/>},
        { path: "/Predictiontools", element: <Predictiontools/>},
        { path: "/AT", element: <AT/>},
        { path: "/Compsemester", element: <Compsemester/>},
        { path: "/SubjectSemester", element: <Subjectsemester/>},
        { path: "/SubjectSemesteraiml", element: <Subjectsemesteraiml/>},
        { path: "/Aimlsemester", element: <Aimlsemester/>},
        { path: "/Presentyear", element: <Presentyear/>},
        { path: "/Latestresult", element: <Latestresult/>},
        { path: "/Compare", element: <Compare/>},
        { path: "/Gradedistribution", element: <Gadedistribution/>},
        { path: "/Latestresultaiml", element: <Latestresultaiml/>},
        { path: "/Indvidual", element: <Individual/>}
        //{ path: "/Knnmodel", element: <Knnmodel /> }

      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Signup /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
