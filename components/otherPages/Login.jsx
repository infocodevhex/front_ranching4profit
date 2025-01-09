"use client";
import React from "react";
import Image from "next/image";
export default function Login() {
  return (
    <div className="main-content page-login">
      <section
        style={{ backgroundColor: "#EEEFE7" }}
        className="section-page-login login-wrap tf-spacing-4"
      >
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-left wow fadeInLeft" data-wow-delay="0s">
                <Image
                  className="ls-is-cached lazyloaded"
                  data-src=""
                  alt=""
                  src="/images/page-title/page-title-home2-1.jpg"
                  width={591}
                  height={680}
                />
                <div
                  className="blockquite wow fadeInLeft"
                  data-wow-delay="0.1s"
                ></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-right">
                <h2
                  className="login-title fw-7 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  Inicia sesión
                </h2>
                <div className="register">
                  <p className="fw-5 fs-15 wow fadeInUp" data-wow-delay="0s">
                    No tienes una cuenta?
                  </p>
                  <a
                    href="#"
                    className="fw-5 fs-15 wow fadeInUp"
                    data-wow-delay="0s"
                  >
                    Registrate
                  </a>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="form-login"
                >
                  <div className="cols">
                    <fieldset
                      className="tf-field field-username wow fadeInUp"
                      data-wow-delay="0s"
                    >
                      <input
                        className="tf-input style-1"
                        id="field1"
                        type="email"
                        placeholder=""
                        name="email"
                        tabIndex={2}
                        defaultValue=""
                        aria-required="true"
                        required
                      />
                      <label className="tf-field-label fs-15" htmlFor="field1">
                        Email
                      </label>
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset
                      className="tf-field field-pass wow fadeInUp"
                      data-wow-delay="0s"
                    >
                      <input
                        className="tf-input style-1"
                        id="field2"
                        type="password"
                        placeholder=""
                        name="number"
                        tabIndex={2}
                        defaultValue=""
                        aria-required="true"
                        required
                      />
                      <label className="tf-field-label fs-15" htmlFor="field2">
                        Password
                      </label>
                    </fieldset>
                  </div>
                  <div className="checkbox-item">
                    <label className="wow fadeInUp" data-wow-delay="0s">
                      <p className="fs-15">Recordar</p>
                      <input type="checkbox" />
                      <span className="btn-checkbox" />
                    </label>
                    <a
                      href="#"
                      className="fs-15 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <button
                    className="button-submit tf-btn w-100 wow fadeInUp"
                    data-wow-delay="0s"
                    type="submit"
                    style={{ backgroundColor: "#284849" }}
                  >
                    Ingresar
                    <i className="icon-arrow-top-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="login-wrap-content"></div> */}
      </section>
    </div>
  );
}
