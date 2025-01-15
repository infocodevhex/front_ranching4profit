"use client";
import { categories } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
export default function Hero() {
  const swiperOptions = {
    spaceBetween: 20,
    observer: true,
    loop: true,
    observeParents: true,
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
      700: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 7,
      },
      1440: {
        slidesPerView: 10,
      },
    },

    navigation: {
      clickable: true,
      nextEl: ".courses10-next",
      prevEl: ".courses10-prev",
    },
  };
  return (
    <div className="page-title-home1" style={{}}>
      <div
        className="hero-background"
        style={{
          position: "relative",
          zIndex: 2,
          backgroundImage: "url('/images/bg_hero.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          padding: "0 60px",
        }}
      >
        <div className="row items-center">
          <div className="col-lg-7">
            <div className="content">
              <div
                className="box-sub-tag wow fadeInUp"
                data-wow-delay="0s"
                style={{
                  background: "transparent",
                  border: "2px solid white",
                  color: "white",
                }}
              >
                <div
                  style={{ backgroundColor: "#284849", color: "#C1BB93" }}
                  className="sub-tag-icon"
                >
                  <i className="icon-flash" />
                </div>
                <div className="sub-tag-title">
                  <p>La academia líder en México</p>
                </div>
              </div>
              <h1
                style={{ color: "white" }}
                className="fw-7 font-cardo wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Transforma tu rancho en un{" "}
                <span style={{ color: "#C1BB93" }}> negocio sustentable</span>
              </h1>
              <h6
                style={{ color: "white" }}
                className="wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Mejora tus tierras, tus animales, tus finanzas y tu vida. En
                Ranching For Profit MX te enseñamos lo necesario para que tu
                rancho sea mas rentable con menos trabajo y menos estrés.
              </h6>
              <div className="bottom-btns">
                <a
                  href="/event-list"
                  className="tf-btn wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  Explorar Cursos
                  <i className="icon-arrow-top-right" />
                </a>
                <a
                  href="#"
                  className="tf-btn style-third wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{
                    background: "transparent",
                    border: "1px solid white",
                    color: "white",
                  }}
                >
                  Contactanos
                  <i className="icon-arrow-top-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
