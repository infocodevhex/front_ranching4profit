"use client";
import React from "react";
import Pagination from "../common/Pagination";
import Image from "next/image";

export default function Instructors() {
  // data/testimonios.js
  const testimonios = [
    {
      id: 1,
      name: "Juan Pérez",
      imgSrc: "/images/testimonios/juan.jpg",
      testimonial:
        "Este curso me ha cambiado la vida. Aprendí mucho en poco tiempo.",
      rating: 5,
    },
    {
      id: 2,
      name: "María López",
      imgSrc: "/images/testimonios/maria.jpg",
      testimonial:
        "Los instructores son muy profesionales y siempre están dispuestos a ayudar.",
      rating: 4,
    },
    {
      id: 3,
      name: "Carlos García",
      imgSrc: "/images/testimonios/carlos.jpg",
      testimonial:
        "Una experiencia increíble. Recomiendo este curso a todos mis amigos.",
      rating: 5,
    },
    {
      id: 4,
      name: "Ana Torres",
      imgSrc: "/images/testimonios/ana.jpg",
      testimonial:
        "El contenido es muy completo y fácil de entender. ¡Gracias!",
      rating: 4,
    },
    {
      id: 5,
      name: "Luis Martínez",
      imgSrc: "/images/testimonios/luis.jpg",
      testimonial:
        "Me encantó la metodología de enseñanza. Aprendí a mi ritmo.",
      rating: 5,
    },
  ];


  return (
    <>
      <section className="section-instructor page-instructor tf-spacing-4 pt-0">
        <div className="tf-container">
          <div style={{ padding: "20px 0" }}>
            <h5>Lorem ipsum dolor sit amet</h5>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              tincidunt enim a nibh convallis, eu imperdiet purus efficitur. Sed
              consequat sapien ex, non porttitor tortor ultrices dictum.
            </h6>
          </div>
          <div className="row">
            <div className="col-12">
              {/* Sección de Testimonios */}
              <div className="testimonials-section">
                {testimonios.map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-item">
                    <Image
                      src={testimonial.imgSrc}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                    />
                    <h6>{testimonial.name}</h6>
                    <p>{testimonial.testimonial}</p>
                    <div className="ratings">
                      {"★".repeat(testimonial.rating)}{" "}
                      {/* Muestra estrellas según la calificación */}
                    </div>
                  </div>
                ))}
              </div>

              <ul className="wg-pagination justify-center wow fadeInUp">
                <Pagination />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
