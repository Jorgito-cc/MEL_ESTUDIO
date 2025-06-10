import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../presentation/components/layout/Layout";
import { Hero } from "../presentation/components/ui/Hero";
import { CategoryCards } from "../presentation/components/shared/CategoryCards";
import { Servicios } from "../presentation/pages/Servicios";
import { SobreMi } from "../presentation/pages/SobreMi";


import { PortafolioPAge } from "../presentation/pages/PortafolioPAge";
import { ServiciosPage } from "../presentation/pages/ServiciosPage";
import { OpinionesPage } from "../presentation/pages/OpinionesPage";
import { About } from "../presentation/pages/AboutPage";
import { ContactoPage } from "../presentation/pages/contactoPage";

export const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <Hero />
                <CategoryCards />
                <Servicios />
                <SobreMi />
              </>
            }
          />
          <Route path="/portafolio" element={<PortafolioPAge/>}/>
          <Route path="/servicio" element={<ServiciosPage/>}/>
          <Route path="opiniones/" element={<OpinionesPage/>}/>
          <Route path="/sobre-mi" element={<About/>}/>
          <Route path="/contactanos" element={<ContactoPage/>}/>



        </Route>
      </Routes>
    </Router>
  );
};
