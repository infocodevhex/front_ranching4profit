"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { menuItems, socialLinks } from "@/data/footerLinks";
export default function Footer1({ parentClass = "footer" }) {
  const formRef = useRef();
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_noj8796", "template_fs3xchn", formRef.current, {
        publicKey: "iG4SCmR-YtJagQ4gV",
      })
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          handleShowMessage();
          formRef.current.reset();
        } else {
          setSuccess(false);
          handleShowMessage();
        }
      });
  };
  return (
    <footer
      style={{ backgroundColor: "#2E1C1C" }}
      id="footer"
      className={parentClass}
    >
      <div className="footer-wrap">
        <div className="footer-body">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="footer-body-wrap flex justify-between">
                  <div
                    className="footer-more-infor wow fadeInUp"
                    data-wow-delay="0s"
                  >
                    <div className="footer-logo">
                      <Link href={`/`}>
                        <Image
                          alt=""
                          src="/images/logo/r4p_logo.png"
                          width={280}
                          height={126}
                        />
                      </Link>
                    </div>
                    <ul className="address">
                      <li className="flex gap-10 items-center">
                        <div className="icon">
                          <i
                            className="flaticon-call"
                            style={{ color: "#C1BB93" }}
                          />
                        </div>
                        <p style={{ color: "#FBFBF9" }}>+1 (555) 123-4567</p>
                      </li>
                      <li className="flex gap-10 items-center">
                        <div className="icon">
                          <i
                            className="flaticon-mail-1"
                            style={{ color: "#C1BB93" }}
                          />
                        </div>
                        <p style={{ color: "#FBFBF9" }}>
                          support@ranching4profitmx.com
                        </p>
                      </li>
                      <li className="flex gap-10 items-center">
                        <div className="icon">
                          <i
                            className="flaticon-location"
                            style={{ color: "#C1BB93" }}
                          />
                        </div>
                        <p style={{ color: "#FBFBF9" }}>
                          58 Howard Street #2 San
                          <br />
                          Francisco
                        </p>
                      </li>
                    </ul>
                    <ul className="tf-social-icon flex items-center gap-10">
                      {socialLinks.map((link, index) => (
                        <li key={index}>
                          <a
                            style={{
                              backgroundColor: "#C1BB93",
                              color: "#2E1C1C",
                            }}
                            href={link.href}
                          >
                            <i className={link.icon} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {menuItems.map((menu, index) => (
                    <div
                      key={index}
                      className="footer-menu-list wow fadeInUp"
                      data-wow-delay={menu.delay}
                    >
                      <h5 className="fw-5" style={{ color: "#C1BB93" }}>
                        {menu.title}
                      </h5>
                      <ul style={{ color: "#FBFBF9" }}>
                        {menu.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            {link.href.startsWith("/") ? (
                              <Link
                                href={link.href}
                                style={{ color: "#FBFBF9" }}
                              >
                                {link.name}
                              </Link>
                            ) : (
                              <a href={link.href} style={{ color: "#FBFBF9" }}>
                                {link.name}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div
                    className="footer-subscribe wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <h5 className="fw-5" style={{ color: "#C1BB93" }}>
                      Subscribe
                    </h5>
                    <p style={{ color: "#FBFBF9" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent tincidunt enim a nibh convallis, eu imperdiet
                      purus efficitur. Sed consequat sapien ex
                    </p>
                    <div
                      className={`tfSubscribeMsg ${
                        showMessage ? "active" : ""
                      }`}
                    >
                      {success ? (
                        <p style={{ color: "rgb(52, 168, 83)" }}>
                          You have successfully subscribed.
                        </p>
                      ) : (
                        <p style={{ color: "red" }}>Something went wrong</p>
                      )}
                    </div>
                    <form
                      className="form-subscribe style-line-bottom"
                      onSubmit={sendMail}
                      ref={formRef}
                    >
                      <fieldset className="email">
                        <input
                          type="email"
                          placeholder="Your e-mail"
                          className="style-default"
                          name="email"
                          tabIndex={2}
                          defaultValue=""
                          aria-required="true"
                          required
                        />
                      </fieldset>
                      <div className="button-submit">
                        <button className="tf-btn-arrow" type="submit">
                          Send
                          <i className="icon-arrow-top-right" />
                        </button>
                      </div>
                    </form>
                    <h5 className="fw-5 get-app" style={{ color: "#C1BB93" }}>
                      Get the app
                    </h5>
                    <ul className="tf-app-download">
                      <li>
                        <a href="#">
                          <div className="icon">
                            <i className="icon-apple" />
                          </div>
                          <div className="app">
                            <div>Download on the</div>
                            <div>Apple Store</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="icon">
                            <i className="icon-chplay" />
                          </div>
                          <div className="app">
                            <div>Get in on</div>
                            <div>Google Play</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom wow fadeInUp" data-wow-delay="0s">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  className="footer-bottom-wrap flex justify-center items-center"
                >
                  <p style={{ color: "white" }}>
                    ©&nbsp;2025&nbsp;Ranching4profitmx. All Rights Reserved{" "}
                  </p>
                  <p style={{ color: "white" }}>
                    Designed by{" "}
                    <span>
                      {" "}
                      <a style={{ color: "white" }} href="/">
                        {" "}
                        Codevhex
                      </a>{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
