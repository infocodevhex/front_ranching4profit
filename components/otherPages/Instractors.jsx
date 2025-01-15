"use client";
import React from "react";
import Pagination from "../common/Pagination";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function Instructors() {
  // data/testimonios.js
  const testimonios = [
    {
      id: 1,
      name: "Juan Pérez",
      imgSrc: "/images/testimonios/testimonio.jpg",
      testimonial:
        "Este curso me ha cambiado la vida. Aprendí mucho en poco tiempo.",
      rating: 5,
    },
    {
      id: 2,
      name: "María López",
      imgSrc: "/images/testimonios/testimonio.jpg",
      testimonial:
        "Los instructores son muy profesionales y siempre están dispuestos a ayudar.",
      rating: 4,
    },
    {
      id: 3,
      name: "Carlos García",
      imgSrc: "/images/testimonios/testimonio.jpg",
      testimonial:
        "Una experiencia increíble. Recomiendo este curso a todos mis amigos.",
      rating: 5,
    },
    {
      id: 4,
      name: "Ana Torres",
      imgSrc: "/images/testimonios/testimonio.jpg",
      testimonial:
        "El contenido es muy completo y fácil de entender. ¡Gracias!",
      rating: 4,
    },
    {
      id: 5,
      name: "Luis Martínez",
      imgSrc: "/images/testimonios/testimonio.jpg",
      testimonial:
        "Me encantó la metodología de enseñanza. Aprendí a mi ritmo.",
      rating: 5,
    },
  ];


  return (
    <>
      <section className="section-instructor page-instructor tf-spacing-4 pt-0" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="tf-container">
          <div style={{ padding: "20px 0" }}>
            <h5>Lorem ipsum dolor sit amet</h5>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              tincidunt enim a nibh convallis, eu imperdiet purus efficitur. Sed
              consequat sapien ex, non porttitor tortor ultrices dictum.
            </h6>
          </div>
          <div className="row g-4">
            {testimonios.map((testimonial, index) => (
              <div 
                style={{ 
                  padding: "15px"
                }} 
                key={index} 
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
              >
                <div 
                  className="instructors-item hover-img style-column wow fadeInUp" 
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    height: "100%",
                    backgroundColor: "white"
                  }}>
                  <div className="image-wrap" style={{ 
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1/1",
                    overflow: "hidden"
                  }}>
                    <Image
                      className="lazyload"
                      src={testimonial.imgSrc}
                      alt={testimonial.name}
                      fill
                      style={{ 
                        objectFit: "cover",
                        filter: "grayscale(90%) sepia(20%)"
                      }}
                    />
                    <div style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "#847B51",
                      opacity: 0.3,
                      mixBlendMode: "color"
                    }} />
                    <div style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "50%",
                      width: "60px",
                      height: "60px",
                      display: "grid",
                      placeItems: "center",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                    }}>
                      <FaPlay 
                        size={20} 
                        style={{ 
                          color: "#333",
                          transform: "translateX(2px)" // Ajuste fino para centrar
                        }} 
                      />
                    </div>
                  </div>
                  <div style={{ padding: "15px" }} className="entry-content">
                    <ul className="entry-meta">
                      <li>
                        <i className="flaticon-user" />
                        {testimonial.name}
                      </li>
                    </ul>
                    <h6 className="entry-title">
                      {testimonial.name}
                    </h6>
                    <p className="short-description">
                      {testimonial.testimonial}
                    </p>
                    <div className="ratings">
                      <div className="number">{testimonial.rating}</div>
                      <div className="stars text-yellow-400 text-lg">
                        {"★".repeat(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ul style={{ padding: "50px 0" }} className="wg-pagination justify-center wow fadeInUp">
        <Pagination />
      </ul>
    </>
  );
}
