import React from "react";
import Reviews from "../course-single/Reviews";
import Replay from "../course-single/Replay";
import Image from "next/image";

export default function EventSingle({}) {
  return (
    <div className="tf-container">
      <div className="row">
        <div className="col-lg-8">
          <div className="event-single-inner">
            <div className="event-decs">
              <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
                Descripción del Evento
              </h2>
              <p className="text-1 fs-15">
                Lorem ipsum dolor sit amet consectur adipisicing elit, sed do
                eiusmod tempor inc idid unt ut labore et dolore magna aliqua
                enim ad minim veniam, quis nostrud exerec tation ullamco laboris
                nis aliquip commodo consequat duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur enim ipsam.
              </p>
              <p className="text-2 fs-15">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium totam rem aperiam.
              </p>
            </div>
            <div className="event-content">
              <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
                Contenido del Evento
              </h2>
              <ul>
                <li className="fs-15">
                  No hay requisitos previos de habilidades para este curso, aunque es
                  útil si está familiarizado con el manejo de su computadora.
                </li>
                <li className="fs-15">
                  Puede tomar este curso usando una máquina Mac, PC o Linux.
                </li>
                <li className="fs-15">
                  Se recomienda descargar el editor de texto gratuito Komodo.
                </li>
              </ul>
            </div>
            <div className="event-speaker">
              <h2
                className="text-22 font-outfit fw-5 wow fadeInUp"
                data-wow-delay="0s"
              >
                Ponentes del Evento
              </h2>
              <div className="speaker" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="swiper-container slider-courses-4 swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <div
                    className="swiper-wrapper"
                    id="swiper-wrapper-9ebc38c84274317c"
                    aria-live="polite"
                    style={{ 
                      transform: "translate3d(0px, 0px, 0px)",
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%'
                    }}
                  >
                    <div
                      className="speaker-swiper swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="1 / 7"
                      style={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <div className="speaker-item wow fadeInUp"
                        data-wow-delay="0s"
                        style={{ 
                          backgroundColor: 'white',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                          borderRadius: '8px',
                          padding: '15px'
                        }}
                      >
                        <div className="speaker-img">
                          <Image
                            className="ls-is-cached lazyloaded"
                            data-src="/images/instructors/FaustoBermudez.jpg"
                            alt="Foto de Fausto Bermúdez"
                            src="/images/instructors/FaustoBermudez.jpg"
                            width={520}
                            height={521}
                          />
                        </div>
                        <div className="author">
                          <a href="#" className="h6 fw-5">
                            Fausto Bermúdez
                          </a>
                          <p>Instructor</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="event-review-wrap review-wrap">
              <Reviews />
            </div>
            <div className="event-add-review add-review-wrap">
              <Replay />
            </div> */}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="sidebar-event">
            <div className="event-img">
              <Image
                className="ls-is-cached lazyloaded"
                data-src="/images/events/event-7.jpg"
                alt=""
                src="/images/events/event-7.jpg"
                width={658}
                height={480}
              />
            </div>
            <div className="sidebar-event-content">
              <h5 className="fw-5">Información del Evento</h5>
              <ul>
                <li>
                  <div className="icon-left">
                    <i className="flaticon-dollar"> </i>
                    <p>Costo:</p>
                  </div>
                  <p className="cost">$435</p>
                </li>
                <li>
                  <div className="icon-left">
                    <i className="flaticon-user"> </i>
                    <p>Cupos Totales:</p>
                  </div>
                  <p>87</p>
                </li>
                <li>
                  <div className="icon-left">
                    <i className="flaticon-unlock"> </i>
                    <p>Días restantes:</p>
                  </div>
                  <p>4</p>
                </li>
              </ul>
              <a href="#" className="tf-btn">
                Reservar Ahora <i className="icon-arrow-top-right" />
              </a>
              <div className="event-social">
                <h6 className="fw-5">Compartir</h6>
                <ul className="social-list">
                  <li className="social-list">
                    <a href="#">
                      {" "}
                      <i className="flaticon-facebook-1" />
                    </a>
                  </li>
                  <li className="social-list">
                    <a href="#">
                      <i className="icon-twitter" />
                    </a>
                  </li>
                  <li className="social-list">
                    <a href="#">
                      <i className="flaticon-instagram" />
                    </a>
                  </li>
                  <li className="social-list">
                    <a href="#">
                      <i className="flaticon-linkedin-1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
