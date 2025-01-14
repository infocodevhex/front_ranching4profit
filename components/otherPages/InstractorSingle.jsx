import React from "react";
import MyCourses from "../course-single/MyCourses";
import Image from "next/image";

export default function InstractorSingle({ instractor }) {
  return (
    <div className="tf-container">
      <div className="row">
        <div className="col-lg-8">
          <div className="instructor-single-inner">
            <div className="instructor-about">
              <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
                About Me
              </h2>
              <p className="text-1 fs-15">{instractor.text_one}</p>
              <p className="text-2 fs-15">{instractor.text_two                                                          }</p>
            </div>
            <div className="instructor-my-course">
              <MyCourses />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div style={{ backgroundColor: "#F7F7F2" }} className="sidebar-instructor">
            <div className="instructor-img">
              <Image
                className="ls-is-cached lazyloaded"
                data-src={instractor.imgSrc}
                alt={instractor.name}
                src={instractor.imgSrc}
                width={520}
                height={521}
              />
            </div>
            <div className="sidebar-instructor-content">
              <h5 className="fw-5">Contáctame</h5>
              <ul>
                <li>
                  <i className="flaticon-location" />
                  <a className="fs-15" href="#">
                    Chihuahua
                  </a>
                </li>
                <li className="item-contact">
                  <i className="flaticon-mail-1" />
                  <a href="mailto:info@upskill.com">info@ranching4profitmx.com</a>
                </li>
                <li className="item-contact">
                  <i className="flaticon-call" />
                  <a href="tel:+890762205">+89 (619) 076-2205</a>
                </li>
                <li className="item-contact">
                  <i className="flaticon-programming" />
                  <a href="#">ranching4profitmx.com/</a>
                </li>
              </ul>
            </div>
            <div className="instructor-social">
              <h6 className="fw-5">Sigueme</h6>
              <ul>
                <li>
                  <a href="#">
                    {" "}
                    <i className="flaticon-facebook-1" />
                  </a>
                </li>
                <li className="course-social-item">
                  <a href="#">
                    <i className="icon-twitter" />
                  </a>
                </li>
                <li className="course-social-item">
                  <a href="#">
                    <i className="flaticon-instagram" />
                  </a>
                </li>
                <li className="course-social-item">
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
  );
}
