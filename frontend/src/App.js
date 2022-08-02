import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import AddUser from "./pages/AddUser.jsx";
import Dashboard from './pages/Dashboard.jsx';
import EditProduct from "./pages/EditProduct.jsx";
import EditUser from "./pages/EditUser.jsx";
import Product from "./pages/Product.jsx";
import Users from "./pages/Users.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />





        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
