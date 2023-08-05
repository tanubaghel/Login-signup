import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from './component/Signup.js';
import Login from './component/Login.js';
import  Student   from "./component/Student.js";
import AddStudent from "./component/AddStudent.js";
import RootLayOUt from "./component/RootLayOUt.js";

const router = createBrowserRouter([
  {path:'', element:<RootLayOUt/>,children:[
    {path:'',element:<Student/>},
    {path:'student',element:<Student/>},
   {path:'add-student',element: <AddStudent/>}
  ]},
  {path:'login',element:<Login/>},
  {path:'Signup',element:<Signup/>},
  {path:'',element:<Signup/>}
])
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App;
