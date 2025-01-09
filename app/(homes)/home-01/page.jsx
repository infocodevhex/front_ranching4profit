import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Banner from "@/components/homes/home-1/Banner";
import Banner2 from "@/components/homes/home-1/Banner2";
import BecomeInstactor from "@/components/homes/home-1/BecomeInstactor";
import Blogs from "@/components/homes/home-1/Blogs";
import Brands from "@/components/common/Brands";
import Courses from "@/components/common/Courses";
import Facts from "@/components/homes/home-1/Facts";
import Features from "@/components/homes/home-1/Features";
import Hero from "@/components/homes/home-1/Hero";
import Instractors from "@/components/homes/home-1/Instractors";
import Testimonials from "@/components/homes/home-1/Testimonials";

export const metadata = {
  title:
    "Ranching4profitmx || Mejora tus tierras, tus animales, tus finanzas y tu vida.",
  description: "Ranching4profitmx",
};
export default function HomePage1() {
  return (
    <>
      <div id="wrapper">
        <div className="tf-top-bar flex items-center justify-center">
          <p>$5,000 PESOS DE DESCUENTO PARA UN ACOMPAÑANTE</p>
        </div>

        <Header1 />
        <Hero />
        <div className="main-content pb-63">
          <Features />
          <Banner />
          <Courses />
          <Facts />
          <Testimonials />
          {/* <Instractors /> */}
          {/* <BecomeInstactor /> */}
          {/* <Blogs /> */}
          <Brands />
          <Banner2 />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
