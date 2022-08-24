import {  Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import HeroesRoutes from "../horoes/routes/HeroesRoutes";
import {PrivateRoute} from "./PrivateRoute";
import { PubliRoute } from "./PubliRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
           <Route path="/login" element={<PubliRoute >
         <LoginPage />
           </PubliRoute>} />
        {/* <Route path="login" element={<LoginPage />} /> */}
   {/*  */}
        <Route path="/*" element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          } />

        {/* <Route path="/*" element={<HeroesRoutes />} /> */}
      </Routes>
    </>
  );
}

