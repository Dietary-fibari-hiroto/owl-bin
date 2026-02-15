import { Route,Routes,useLocation } from "react-router-dom";
import { routeList,staffRouteList,adminRouteList } from "./constants/routeList";

import "./assets/styles/index.scss";

function App() {
  const location = useLocation();

  return (
      <Routes location={location}>
          {
            routeList.map((route)=>(
              <Route key={route.path} path={route.path} element={route.element}/>
            ))

          }
        <Route path="/staff/*">
          {
            staffRouteList.map((route)=>(
              <Route key={route.path} path={route.path} element={route.element}/>
            ))
          }
        </Route>
        <Route path="/admin/*">
          {
            adminRouteList.map((route)=>(
              <Route key={route.path} path={route.path} element={route.element}/>
            ))
          }
        </Route>
      </Routes>
  )
}

export default App
