import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";
import Todos from "../pages/Todos";

export const HeroesRoutes = () => {

    
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="todos" element={<Todos />} />

          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          {/* Search , Hero by id*/}
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="search" element={<SearchPage />} />
          {/*  */}
          <Route path="/" element={<Navigate to="/todos" />} />
        </Routes>
      </div>
    </>
  );
}

export default HeroesRoutes