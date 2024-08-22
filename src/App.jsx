import Layout from "./componets/root/Layout"
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"



function App() {
let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route index element={<HomePage/>} >
    </Route>
    <Route path="/about" element={<AboutPage/>} >
    </Route>
    
  </Route>
))

  return (
    <>
  <RouterProvider router={router}/>

    </>
  )
}

export default App
