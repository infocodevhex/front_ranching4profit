import React from "react";
import Link from "next/link";
import { events2 } from "@/data/events";
export default function Events() {
  return (
    <section
      style={{ backgroundColor: "#DDDECE" }}
      className="section-event tf-spacing-11"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <h2
                className="fw-7 letter-spacing-1 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Próximos Eventos
              </h2>
              <div className="flex items-center justify-between flex-wrap gap-10">
                <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                  Lorem ipsum dolor sit amet, consectetur.
                </div>
              </div>
            </div>
            <div className="wrap-item">
              {events2.map((event, index) => (
                <div
                  key={index}
                  className="events-item wow fadeInUp"
                  data-wow-delay={event.delay}
                >
                  <div className="event-item-content">
                    <div className="event-item-sub">
                      <div className="item-sub-address">
                        <i className="flaticon-location" />
                        <p>{event.location}</p>
                      </div>
                      <div className="item-sub-time">
                        <i className="flaticon-clock" />
                        <p>{event.time}</p>
                      </div>
                    </div>
                    <div className="event-item-title fw-5 fs-18">
                      <Link href={`/event-single/${event.id}`}>
                        {event.title}
                      </Link>
                    </div>
                    <Link className="tf-btn" href={`/event-single/${event.id}`}>
                      Reservar
                      <i className="icon-arrow-top-right" />
                    </Link>
                  </div>
                  <div
                    style={{ backgroundColor: "#284849" }}
                    className="event-item-date"
                  >
                    <h2 style={{ color: "white" }} className="fw-7">
                      {event.date}
                    </h2>
                    <h6 style={{ color: "white" }} className="fw-5">
                      {event.month}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
