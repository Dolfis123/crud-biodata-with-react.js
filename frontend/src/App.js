import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserList from "./Componenst/UserList";
import AddUser from "./Componenst/AddUser";
import EditUser from "./Componenst/EditUser";
import Dashboard from "./Componenst/Dashboard";



function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={  <UserList />} />
      <Route path="/dashboard" element={  <Dashboard />} />
      <Route path="/add" element={  <AddUser />} />
      <Route path="/" element={  <UserList />} />
      <Route path="/edit/:id" element={  <EditUser />} />

    </Routes> 
    </BrowserRouter>
  );
}

export default App;
