import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import React from "react";
import Link from "next/link";
import Faqs1 from "@/components/otherPages/faq/Faq1";
import Faqs2 from "@/components/otherPages/faq/Faq2";
export const metadata = {
  title: "Faq || UpSkill - Education Online Courses LMS React Nextjs Template",
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
        <div className="page-title page-pricing-title">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="content text-center">
                  {/* <ul className="breadcrumbs flex items-center justify-center gap-10">
                    <li>
                      <Link href={`/`} className="flex">
                        <i className="icon-home" />
                      </Link>
                    </li>
                    <li>
                      <i className="icon-arrow-right" />
                    </li>
                    <li>Pages</li>
                    <li>
                      <i className="icon-arrow-right" />
                    </li>
                    <li>Instructor</li>
                  </ul> */}
                  <h2 className="font-cardo fw-7">
                    Preguntas frecuentes
                  </h2>
                  <h6>
                    We’re on a mission to deliver engaging, curated courses at a
                    reasonable price.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-content ">
          <Faqs1 />
          <Faqs2 />
        </div>
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
