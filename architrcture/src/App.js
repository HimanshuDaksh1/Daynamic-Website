import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin/Admin';
import Home from './Components/Home';
import News from './Components/News'
import About from './Components/About'
import OurProjact from './Components/OurProjact'
import Contact from './Components/Contact'
import AdminHome from './Components/Admin/AdminHome'
import AdminNews from './Components/Admin/ProductForm'
import AdminAbout from './Components/Admin/AdminAbout'
import AdminContact from './Components/Admin/AdminContact'
import AdminOurProjact from './Components/Admin/AdminOurProjact'
import AddEditUser from './Components/Admin/OurProjact/AddEditUser'
import Products from './Components/Admin/Products';
import ProductForm from './Components/Admin/ProductForm';
function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/news' element={<News />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/ourprojact' element={<OurProjact />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/admin' element={<Admin />} />
      </Routes>

      <Admin>
        <Routes>
          <Route exact path="/adminhome" element={<AdminHome />} />
          <Route exact path="/adminnews" element={<Products />} />
          <Route exact path="/adminourprojact" element={<AdminOurProjact />} />
          <Route exact path="/adminabout" element={<AdminAbout />} />
          <Route exact path="/admincontact" element={<AdminContact />} />
          <Route exact path='/add' element={<AddEditUser />} />
          <Route exact path='product-form/:id' element={<ProductForm />} />
          <Route exact path='/products' element={<Products />} />
        </Routes>
      </Admin>


    </>
  );
}

export default App;
