import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import InstractorSingle from "@/components/otherPages/InstractorSingle";

import React from "react";
import { allInstractors } from "@/data/instractors";
export const metadata = {
  title:
    "Instractor Single || UpSkill - Education Online Courses LMS React Nextjs Template",
  description: "UpSkill - Education Online Courses LMS React Nextjs Template",
};
export default function page({ params }) {
  const instractor =
    allInstractors.filter((elm) => elm.id == params.id)[0] || allInstractors[0];
  return (
    <>
      <div id="wrapper">
        <div className="tf-top-bar flex items-center justify-center">
          <p>$5,000 PESOS DE DESCUENTO PARA UN ACOMPAÑANTE</p>
        </div>

        <Header1 />
        <div
          style={{ marginTop: "100px" }}
          className="instructor-page-title style-5"
        >
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-8">
                <div className="content">
                  <h2 className="font-cardo fw-7">
                    Hola, soy {instractor.name}
                  </h2>
                  <p className="except">Profesor</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-page-instructor-single">
          <InstractorSingle instractor={instractor} />
        </div>
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
