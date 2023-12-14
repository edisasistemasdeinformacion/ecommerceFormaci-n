import { Outlet, Route, Routes } from "react-router-dom";
import Register from "../../auth/pages/Register";
import ArticleList from "../../article/pages/ArticleList";

const Home = () => {
  return <h1>Home</h1>;
};

const Layout = () => {
  return (
    <>
      {/* <h1>Esto es el header de layout</h1> */}
      <Outlet />
      {/* <h1>Esto es el footer del layout</h1> */}
    </>
  );
};

const RoutesController = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/articulos" element={<ArticleList />} />
      </Route>
      <Route path="/registro" element={<Register />} />
    </Routes>
  );
};

export default RoutesController;
