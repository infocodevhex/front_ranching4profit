"use client";
import { instructors } from "@/data/instractors";
import InstructorCard from "@/components/v2/InstructorCard";

export default function Instractors() {
  return (
    <section className="section-instructor tf-spacing-3 pt-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <h2 className="fw-7 font-cardo wow fadeInUp" data-wow-delay="0s">
                Nuestro equipo
              </h2>
              <div className="flex items-center justify-between flex-wrap gap-10">
                <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.1s">
                  Los profesores de Ranching4profitMX se les reconoce por su
                  excelencia y profesionalismo. Cada profesor tiene un historial
                  que lo respalda en el ámbito agropecuario. Con su propio
                  sentido del humor y personalidad, cada uno de nuestros
                  instructores hará que cada escuela se sienta diferente. Con el
                  uso de diferentes herramientas altamente efectivas, casos
                  reales, problemas reales, para ganaderos reales.
                </div>
              </div>
            </div>
            <div
              className="instructors-container"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "25px",
              }}
            >
              {instructors.map((instructor, index) => (
                <InstructorCard key={index} instructor={instructor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
