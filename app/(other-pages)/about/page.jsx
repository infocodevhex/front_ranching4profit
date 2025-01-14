import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Instractors from "@/components/homes/home-1/Instractors";
import About from "@/components/otherPages/about/About";
import OurVisions from "@/components/otherPages/about/OurVisions";

import React from "react";

export const metadata = {
  title:
    "About || UpSkill - Education Online Courses LMS React Nextjs Template",
  description: "UpSkill - Education Online Courses LMS React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <div className="tf-top-bar flex items-center justify-center">
          <p>$5,000 PESOS DE DESCUENTO PARA UN ACOMPAÑANTE</p>
        </div>

        <Header1 />
        <div  style={{ padding: "50px 0" }} className="basic">
          <div className="tf-container full">
            <div className="row">
              <div className="col-12">
                <div className="content text-center">
                  <h2 className="font-cardo fw-7">Nosotros</h2>
                  <h6>
                    Lorem impsum dolor sit amet, consectetur adipiscing elit.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-content pt-0">
          <About />
          <Instractors />
          <OurVisions />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
