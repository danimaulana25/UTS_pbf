import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BrandIndex from "./pages/brands/Index";
import BankIndex from "./pages/banks/Index";
import CategoryIndex from "./pages/categories/Index";
import VechicleIndex from "./pages/vehicles/Index";
import BrandEdit from "./pages/brands/Edit";
import BrandCreate from "./pages/brands/Create";
import BankEdit from "./pages/banks/Edit";
import BankCreate from "./pages/banks/Create";
import CategoryEdit from "./pages/categories/Edit";
import CategoryCreate from "./pages/categories/Create";
import VechicleEdit from "./pages/vehicles/Edit";
import VechicleCreate from "./pages/vehicles/Create";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <div className="px-4 md:ml-20">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/brands" element={<BrandIndex />} />
          <Route path="/brands/:id" element={<BrandEdit />} />
          <Route path="/brandsCreate" element={<BrandCreate />} />
          <Route path="/banks" element={<BankIndex />} />
          <Route path="/banks/:id" element={<BankEdit />} />
          <Route path="/banksCreate" element={<BankCreate />} />
          <Route path="/categories" element={<CategoryIndex />} />
          <Route path="/categories/:id" element={<CategoryEdit />} />
          <Route path="/categoriesCreate" element={<CategoryCreate />} />
          <Route path="/vehicles" element={<VechicleIndex />} />
          <Route path="/vehicles/:id" element={<VechicleEdit />} />
          <Route path="/vehiclesCreate" element={<VechicleCreate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
