// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Form from './Component/UserForm';
import Navbar from './Component/Navbar';
import ListForm from './Component/ListForm';
import AboutUs from './Component/AboutUs';
import SignUp from './Component/SignUp';


const App = () => {
 return (
    <>
       <Navbar/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<ListForm />} />
          <Route path="/signup" element={<SignUp />} />


       </Routes>
    </>
 );
};

export default App;