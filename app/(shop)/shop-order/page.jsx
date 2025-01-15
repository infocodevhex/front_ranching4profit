import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import ShopOrder from "@/components/shop/ShopOrder";

import React from "react";

export const metadata = {
  title:
    "Shop Order || UpSkill - Education Online Courses LMS React Nextjs Template",
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

        <ShopOrder />
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
