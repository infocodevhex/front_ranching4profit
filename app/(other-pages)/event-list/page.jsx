import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Events from "@/components/otherPages/Events";
import UpcomingEvents from "@/components/homes/home-2/Events";

import React from "react";
import Link from "next/link";
export const metadata = {
  title:
    "Event List || UpSkill - Education Online Courses LMS React Nextjs Template",
  description: "UpSkill - Education Online Courses LMS React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <div className="tf-top-bar flex items-center justify-center">
          <p>Intro price. Get UpSkill for Big Sale -95% off.</p>
        </div>
        <Header1 />
        <div style={{ padding: "50px 0" }} className="basic">
          <div className="tf-container full">
            <div className="row">
              <div className="col-12">
                <div className="content text-center">
                  <h2 className="font-cardo fw-7">Proximos Eventos</h2>
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-content pt-0">
          <Events />
          <UpcomingEvents />
        </div>
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
