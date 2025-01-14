"use client";
import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
export default function Header1() {
  return (
    <header id="header_main" className="header">
      <div className="header-inner">
        <div className="header-inner-wrap">
          <div className="header-left flex-grow">
            <a
              className="mobile-nav-toggler mobile-button d-lg-none flex"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-controls="offcanvasMenu"
            />
            <div id="site-logo">
              <Link href={`/`} rel="home">
                <Image
                  id="logo-header"
                  alt=""
                  src="/images/logo/r4p_logo.png"
                  width={123}
                  height={36}
                />
              </Link>
            </div>
            <div className="header-search flex-grow">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="form-search"
              >
                <fieldset>
                  <input
                    className=""
                    type="text"
                    placeholder="Buscar en el sitio"
                    name="text"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                </fieldset>
                <div className="button-submit">
                  <button className="" type="submit">
                    <i className="icon-search fs-20" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="header-right">
            <nav className="main-menu">
              <ul className="navigation">
                <Nav />
              </ul>
            </nav>
            <a
              className="d-lg-none flex"
              href="#canvasSearch"
              data-bs-toggle="offcanvas"
              aria-controls="offcanvasLeft"
            >
              <i className="icon-search fs-20" />
            </a>
            <Link
              href={`/`}
              className="header-cart flex items-center justify-center"
            >
              <i className="icon-shopcart fs-18" />
            </Link>
            <div className="header-btn flex gap-10">
              <div style={{ border: "1px solid #131836", borderRadius: "4px" }} className="header-login">
                <Link href={`/login`} className="tf-button-default header-text">
                  Inicia sesión
                </Link>
              </div>
              <div className="d-lg-none flex">
                <Link href={`/login`} className="fs-15">
                  Iniciar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileNav />
    </header>
  );
}
