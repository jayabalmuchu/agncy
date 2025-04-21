"use client";
import React from "react";
import Lenis from "lenis";
import { useState, useEffect, useRef } from "react";

// import { useTranslations } from 'next-intl'
import CustomLink from "./components/customLink";
import Work from "./components/work";
import Service from "./components/service";
import Statistic from "./components/statistic";
import Client from "./components/client";
import Item from "./components/item";

const Home = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const workRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  //effect to implement smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  //effect to implement fade-in page loading effect
  useEffect(() => {
    const handleLoad = () => {
      document.body.classList.remove("loading");
      document.body.classList.add("loaded");

      // try restore scroll
      const savedY = sessionStorage.getItem("scrollY");
      if (savedY) {
        window.scrollTo({ top: Number(savedY), behavior: "auto" });
      }
    };

    document.body.classList.add("loading");

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      <div className="home-container">
        <header className="home-header1">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <div className="home-branding1">
              <img
                width="80"
                height="80"
                src="https://img.icons8.com/dotty/80/FFFFFF/circled.png"
                alt="circled"
                className="home-logo1"
              />
              <span className="home-company1">Agncy</span>
            </div>

            <div className="home-items1">
              <div className="home-links1">
                <span
                  className="nav-link"
                  onClick={() =>
                    workRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Work
                </span>
                <span
                  className="nav-link"
                  onClick={() =>
                    servicesRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Services
                </span>
                <span
                  className="nav-link"
                  onClick={() =>
                    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  About
                </span>
                <span
                  className="nav-link"
                  onClick={() =>
                    contactRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contact
                </span>
              </div>
              <button className="start-button button home-button1">
                <span className="home-text14">Start a project</span>
              </button>
            </div>

            {/* Burger Menu Butto/n */}
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <button
                className="home-button2 button"
                onClick={() => setIsMenuOpen(true)}
              >
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-rounded/24/menu--v1.png"
                  alt="menu--v1"
                  className="home-image1"
                />
                <span className="home-text15">Start a project</span>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div
                data-thq="thq-mobile-menu"
                className={`home-mobile-menu ${isMenuOpen ? "active" : ""}`}
              >
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="home-nav"
                >
                  <div className="home-top">
                    <div className="home-branding2">
                      <img
                        alt="image"
                        src="https://img.icons8.com/dotty/80/FFFFFF/circled.png"
                        className="home-logo2"
                      />
                      <span className="home-company2">AGNCY</span>
                    </div>
                    <div
                      data-thq="thq-close-menu"
                      className="home-menu-close"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg viewBox="0 0 1024 1024" className="home-icon1">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>

                  <div className="home-items2">
                    <div className="home-links2">
                      <span
                        className="nav-link"
                        onClick={() => {
                          workRef.current?.scrollIntoView({
                            behavior: "smooth",
                          });
                          setIsMenuOpen(false);
                        }}
                      >
                        Work
                      </span>
                      <span
                        className="nav-link"
                        onClick={() => {
                          servicesRef.current?.scrollIntoView({
                            behavior: "smooth",
                          });
                          setIsMenuOpen(false);
                        }}
                      >
                        Services
                      </span>
                      <span
                        className="nav-link"
                        onClick={() => {
                          aboutRef.current?.scrollIntoView({
                            behavior: "smooth",
                          });
                          setIsMenuOpen(false);
                        }}
                      >
                        About
                      </span>
                      <span
                        className="nav-link"
                        onClick={() => {
                          contactRef.current?.scrollIntoView({
                            behavior: "smooth",
                          });
                          setIsMenuOpen(false);
                        }}
                      >
                        Contact
                      </span>
                    </div>
                    <button className="start-button button home-button3">
                      <span className="home-text20">Start a project</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </header>
        </header>
        <header className="home-hero">
          <div className="home-header2">
            <h1 className="home-title1">Design the change you wanna see</h1>
            <p className="home-description1">
              Shape the future with intention, not imitation.
            </p>
          </div>
        </header>
        <div className="home-video1">
          <video
            src="./agncy.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="home-video2"
          ></video>
        </div>
        <div className="home-description2">
          <div className="home-content">
            <div className="home-text21">
              <p className="home-paragraph1">
                At Agncy, we don&#39;t just build brands—we shape bold
                identities, craft unforgettable stories, and engineer seamless
                digital experiences.
              </p>
              <p className="home-paragraph2">
                We&#39;re a multidisciplinary team of strategists, designers,
                copywriters, and developers who thrive at the intersection of
                creativity and conversion. Whether you&#39;re launching
                something new or reinventing what already exists, we bring sharp
                strategy and knockout visuals to the table.
              </p>
            </div>
            <button className="start-button button home-button4">
              <span className="home-text22">Start a project</span>
            </button>
          </div>
        </div>
        <div className="home-featured">
          <div className="home-header3">
            <h2 className="heading">Featured Work</h2>
            <div className="home-link">
              <CustomLink
                caption="100+ Projects"
                rootClassName="custom-linkroot-class-name"
              ></CustomLink>
            </div>
          </div>
          <div className="home-list1" ref={workRef}>
            <Work
              image="./redjuice.jpg"
              title="ICED TEA"
              description="A new iced tea brand was ready to shake up the beverage aisle—bold flavors, real ingredients, and a laid-back vibe. They needed a look, voice, and digital presence as refreshing as the drink itself."
            ></Work>
            <Work
              image="./dogfood.jpg"
              title="TailFuel"
              description="From playful packaging to scroll-stopping ads, TailFuel now speaks to modern pet parents who read labels, follow dogfluencers, and want the best for their furry companions."
            ></Work>
            <Work
              image="./gojobojodrink.jpg"
              title="YORGU"
              description="From a zesty brand identity to scroll-stopping copy and a website that feels like a sugar rush, we bottled their wild energy and served it chilled. Every visual. Every word. Every scroll. Pure dopamine."
            ></Work>
          </div>
        </div>
        <div className="home-client">
          <p className="home-text23">
            We partner with brands who are ready to stand out—not blend in. If
            you&#39;re looking for strategic thinking, knockout visuals, and
            copy that actually converts, you&#39;re in the right place.
          </p>
          <button className="start-button button home-button5">
            <span className="home-text24">Start a project</span>
          </button>
        </div>
        <div className="home-services" ref={servicesRef}>
          <div className="home-header4">
            <h2 className="heading">SERVICES</h2>
          </div>
          <div className="home-grid1">
            <Service
              title="Branding"
              rootClassName="serviceroot-class-name"
            ></Service>
            <Service
              title="Strategy"
              rootClassName="serviceroot-class-name1"
            ></Service>
            <Service
              title="Marketing"
              rootClassName="serviceroot-class-name5"
            ></Service>
            <Service
              title="Copywriting"
              rootClassName="serviceroot-class-name2"
            ></Service>
            <Service
              title="UI / UX"
              rootClassName="serviceroot-class-name3"
            ></Service>
            <Service
              title="Web Development"
              rootClassName="serviceroot-class-name4"
            ></Service>
          </div>
        </div>
        <div className="home-about" ref={aboutRef}>
          <div className="home-header5">
            <h2 className="home-company3">AGNCY</h2>
            <span className="home-description3">
              “we believe in building with purpose. Every brand we shape, every
              word we write, every pixel we design is driven by intention.
              We&#39;re not here for surface-level work—we&#39;re here to craft
              clarity, connection, and creative that actually moves people. We
              blend strategy with soul, design with depth, and execution with
              excellence. Curiosity fuels us, collaboration grounds us, and bold
              ideas push us forward. Whether we&#39;re building a brand from
              scratch or evolving an existing one, we show up with integrity,
              ambition, and a deep respect for the story behind the business.
              Because to us, great work isn&#39;t just what it looks
              like—it&#39;s what it does.”
            </span>
          </div>
          <div className="home-statistics">
            <button className="start-button button home-button6">
              <span className="home-text25">Join our team</span>
            </button>
            <div className="home-statistic-list">
              <Statistic
                value="12"
                caption="Years of Growth"
                rootClassName="statisticroot-class-name3"
              ></Statistic>
              <Statistic
                value="60"
                caption="Awards"
                rootClassName="statisticroot-class-name"
              ></Statistic>
              <Statistic
                value="15K"
                caption="Monthly Visits"
                rootClassName="statisticroot-class-name4"
              ></Statistic>
              <Statistic
                value="70+"
                caption="People on board"
                rootClassName="statisticroot-class-name1"
              ></Statistic>
              <Statistic
                value="300+"
                caption="Finished projects"
                rootClassName="statisticroot-class-name5"
              ></Statistic>
              <Statistic
                value="1M"
                caption="Active Users"
                rootClassName="statisticroot-class-name2"
              ></Statistic>
            </div>
          </div>
          <div className="home-clients">
            <div className="home-header6">
              <h2 className="home-title4 heading">Our Clients</h2>
            </div>
            <div className="home-grid2">
              <div className="home-column1">
                <Client
                  quote="“Working with Agncy was a game-changer for our brand. They understood our vision from the get-go and brought it to life in ways we didn&#39;t even imagine. From the fresh branding to the website that speaks our language, they&#39;ve elevated our presence in the market. We feel seen, heard, and truly understood. “"
                  author="Coco White"
                  avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvdHJhaXR8ZW58MHx8fHwxNjY5MDYxMjQx&amp;ixlib=rb-4.0.3&amp;h=200"
                  mention="@yorgu.official"
                  rootClassName="clientroot-class-name"
                ></Client>
                <Client
                  quote="“The team at Agncy is exceptional. They didn&#39;t just deliver a sleek website—we gained a comprehensive brand strategy that aligned perfectly with our values. Their attention to detail and the way they structured our digital presence made an immediate impact. We&#39;ve seen an increase in client engagement and inquiries since the launch. They truly partner with you for success.“"
                  author="Coco White"
                  avatar="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                  mention="@tailfuel.co"
                  rootClassName="clientroot-class-name1"
                ></Client>
              </div>
              <div className="home-column2">
                <Client
                  quote="“If you&#39;re looking for a creative team that takes risks, delivers exceptional results, and has a knack for storytelling, look no further. The copywriting, the design, the whole digital experience—everything they created felt so us.”"
                  author="Jennifer Marle"
                  avatar="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                  mention="@motech"
                ></Client>
                <Client
                  quote="“From the moment we started working with Agncy, we knew we were in good hands. They took the time to really understand our audience and goals, and it showed in everything they created.”"
                  author="Maria Martinez"
                  avatar="https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                  mention="@coffefudge.hq"
                ></Client>
              </div>
            </div>
          </div>
          <div className="home-client-list">
            <div className="home-header7">
              <h2 className="home-title5 heading">Client list</h2>
            </div>
            <div className="home-row1">
              <span className="home-text26">2025</span>
              <div className="home-list2">
                <Item
                  tags="Webdevelopment / Marketing"
                  title="Aliquaduis"
                ></Item>
                <Item tags="Strategy / Copywriting" title="Consequat"></Item>
              </div>
            </div>
            <div className="home-row2">
              <span className="home-text27">2024</span>
              <div className="home-list3">
                <Item
                  tags="Webdevelopment / Marketing"
                  title="Aliquaduis"
                ></Item>
                <Item tags="Strategy / Copywriting" title="Consequat"></Item>
                <Item tags="Webdevelopment / Marketing" title="Fugiat"></Item>
                <Item tags="UI / UX" title="Commodo"></Item>
                <Item tags="Webdevelopment" title="Veniam"></Item>
              </div>
            </div>
          </div>
        </div>
        <footer className="home-footer" ref={contactRef}>
          <div className="home-information">
            <div className="home-details">
              <div className="home-header8">
                <div className="home-branding3">
                  <img
                    alt="image"
                    src="https://img.icons8.com/dotty/80/FFFFFF/circled.png"
                    className="home-logo3"
                  />
                  <span className="home-company4">AGNCY</span>
                </div>
                <div className="home-location1">
                  <span className="home-caption1">Office</span>
                  <span className="home-value1">
                    132, My Street, Bigtown BG23 4YZUnited States
                  </span>
                </div>
              </div>
              <div className="home-location2">
                <span className="home-caption2">Let&apos;s talk</span>
                <span className="home-value2">sayhello@agncy.address</span>
              </div>
              <button className="home-button7 start-button button">
                <span className="home-text28">Start a project</span>
              </button>
            </div>
            <div className="home-links3">
              <span className="social">Instagram</span>
              <span className="social">Linkedin</span>
              <span className="social">Twitter</span>
              <span className="social">Dribbble</span>
              <span className="social">Behance</span>
            </div>
          </div>
          <img
            alt="image of office meeting"
            src="./officemeeting.jpg"
            className="home-image2 w-190 "
          />
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
            background-color: #151515;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            justify-content: space-between;
          }
          .home-branding1 {
            gap: var(--dl-layout-space-halfunit);
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-logo1 {
            width: 50px;
            height: 50px;
            object-fit: cover;
            transition: 0.3s;
          }
          .home-logo1:hover {
            transform: rotate(360deg);
          }
          .home-company1 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
          }
          .home-items1 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-links1 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .nav-link {
            cursor: pointer;
          }
          .home-text14 {
            color: #ffffff;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-button2 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            padding-top: 20px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: 20px;
            background-color: #235536;
          }
          .home-image1 {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .home-text15 {
            color: #ffffff;
            display: flex;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 900;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #151515;
            overflow-y: auto;
          }
          .home-mobile-menu.active {
            transform: translateX(0%);
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .home-branding2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-logo2 {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .home-company2 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
          }
          .home-menu-close {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon1 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .home-items2 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-links2 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text20 {
            color: #ffffff;
          }
          .home-hero {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            background-color: #151515;
          }
          .home-header2 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: 150px;
          }
          .home-title1 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 128px;
            max-width: 895px;
            font-weight: normal;
            line-height: 115px;
            text-transform: uppercase;
          }
          .home-description1 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 24px;
            max-width: 800px;
            line-height: 36px;
          }
          .home-video1 {
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-video2 {
            flex: 1;
            width: 100%;
          }
          .home-description2 {
            width: 100%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-layout-space-fiveunits);
            align-items: flex-end;
            padding-top: var(--dl-layout-space-fiveunits);
            border-color: #151515;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            border-top-width: 1px;
          }
          .home-content {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text21 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-paragraph1 {
            font-size: 32px;
            line-height: 48px;
          }
          .home-paragraph2 {
            font-size: 32px;
            line-height: 48px;
          }
          .home-text22 {
            color: #ffffff;
          }
          .home-featured {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-header3 {
            width: 100%;
            display: flex;
            align-items: flex-end;
            border-color: #151515;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-link {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-list1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-client {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            border-color: #151515;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            border-bottom-width: 1px;
          }
          .home-text23 {
            font-size: 32px;
            max-width: 900px;
            line-height: 48px;
          }
          .home-text24 {
            color: #ffffff;
          }
          .home-services {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-header4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #151515;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            border-bottom-width: 1px;
          }
          .home-grid1 {
            flex: 1;
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: auto auto auto;
          }
          .home-about {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #151515;
          }
          .home-header5 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            border-bottom-width: 1px;
          }
          .home-company3 {
            color: rgb(255, 255, 255);
            font-size: 80px;
            font-style: normal;
            font-weight: 500;
            line-height: 72px;
          }
          .home-description3 {
            color: #ffffff;
            font-size: 24px;
            max-width: 800px;
            line-height: 36px;
          }
          .home-statistics {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: 200px;
            justify-content: space-between;
          }
          .home-text25 {
            color: rgb(255, 255, 255);
          }
          .home-statistic-list {
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
            grid-template-columns: auto auto;
          }
          .home-clients {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-header6 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            border-bottom-width: 1px;
          }
          .home-title4 {
            color: rgb(255, 255, 255);
          }
          .home-grid2 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            padding-top: var(--dl-layout-space-fiveunits);
            flex-direction: row;
          }
          .home-column1 {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            flex-direction: column;
          }
          .home-column2 {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            flex-direction: column;
          }
          .home-client-list {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header7 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            border-bottom-width: 1px;
          }
          .home-title5 {
            color: rgb(255, 255, 255);
          }
          .home-row1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text26 {
            color: #999999;
            font-size: 24px;
            line-height: 36px;
          }
          .home-list2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-row2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text27 {
            color: rgb(153, 153, 153);
            font-size: 24px;
            line-height: 36px;
          }
          .home-list3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-footer {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .home-information {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-wrap: wrap;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: 60px;
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
          }
          .home-details {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header8 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-branding3 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-logo3 {
            width: 50px;
            filter: brightness(0) saturate(100%) invert(27%) sepia(9%)
              saturate(2615%) hue-rotate(90deg) brightness(92%) contrast(87%);
            height: 50px;
            object-fit: cover;
          }
          .home-company4 {
            color: rgb(21, 21, 21);
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            text-transform: uppercase;
          }
          .home-location1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption1 {
            color: #151515;
            font-size: 24px;
            line-height: 36px;
          }
          .home-value1 {
            color: rgb(21, 21, 21);
            font-size: 32px;
            max-width: 560px;
            font-style: normal;
            font-weight: 500;
            line-height: 48px;
          }
          .home-location2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption2 {
            color: rgb(21, 21, 21);
            font-size: 24px;
            line-height: 36px;
          }
          .home-value2 {
            color: rgb(21, 21, 21);
            font-size: 32px;
            max-width: 560px;
            font-style: normal;
            font-weight: 500;
            line-height: 48px;
          }
          .home-button7 {
            margin-top: var(--dl-layout-space-halfunit);
          }
          .home-text28 {
            color: rgb(255, 255, 255);
          }
          .home-links3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image2 {
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .home-navbar-interactive {
              padding-top: var(--dl-layout-space-unit);
            }
            .home-button1 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text14 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button2 {
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-image1 {
              width: 18px;
              height: 18px;
              display: flex;
            }
            .home-text15 {
              display: none;
            }
            .home-button3 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text20 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-header2 {
              height: 100%;
              padding-bottom: var(--dl-layout-space-sixunits);
              justify-content: center;
            }
            .home-title1 {
              font-size: 40px;
              line-height: 36px;
            }
            .home-description1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-description2 {
              margin-top: var(--dl-layout-space-threeunits);
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
            .home-text21 {
              gap: var(--dl-layout-space-unit);
            }
            .home-paragraph1 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-paragraph2 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-button4 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text22 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-header3 {
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-link {
              display: none;
            }
            .home-client {
              padding-top: var(--dl-layout-space-threeunits);
              border-color: transparent;
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-text23 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-button5 {
              font-size: 16px;
              padding-top: 18px;
              padding-left: 26px;
              padding-right: 26px;
              padding-bottom: 18px;
            }
            .home-text24 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-services {
              gap: var(--dl-layout-space-threeunits);
              padding-top: 0px;
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-header4 {
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-top-width: 1px;
            }
            .home-grid1 {
              display: flex;
              grid-gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-about {
              padding-top: var(--dl-layout-space-fourunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-header5 {
              gap: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-company3 {
              font-size: 30px;
              line-height: 27px;
            }
            .home-description3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-statistics {
              gap: var(--dl-layout-space-fourunits);
              padding-top: var(--dl-layout-space-threeunits);
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
            .home-button6 {
              font-size: 16px;
              padding-top: 18px;
              padding-left: 26px;
              padding-right: 26px;
              padding-bottom: 18px;
            }
            .home-text25 {
              font-style: normal;
              font-weight: 500;
            }
            .home-statistic-list {
              width: 100%;
              grid-gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-clients {
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
            .home-header6 {
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-grid2 {
              grid-gap: var(--dl-layout-space-oneandhalfunits);
              padding-top: var(--dl-layout-space-threeunits);
              flex-direction: column;
            }
            .home-column1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-column2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-client-list {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-header7 {
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-row1 {
              flex-direction: column;
            }
            .home-text26 {
              font-size: 10px;
              line-height: 15px;
              padding-bottom: var(--dl-layout-space-halfunit);
            }
            .home-list2 {
              width: 100%;
            }
            .home-row2 {
              flex-direction: column;
            }
            .home-text27 {
              font-size: 10px;
              line-height: 15px;
              padding-bottom: var(--dl-layout-space-halfunit);
            }
            .home-list3 {
              width: 100%;
            }
            .home-footer {
              flex-direction: column;
            }
            .home-information {
              gap: var(--dl-layout-space-threeunits);
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
              justify-content: flex-start;
            }
            .home-details {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-logo3 {
              width: 25px;
              height: 25px;
            }
            .home-company4 {
              font-size: 15px;
              line-height: 18px;
            }
            .home-caption1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-value1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-value2 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-button7 {
              font-size: 16px;
              margin-top: var(--dl-layout-space-unit);
              padding-top: 18px;
              padding-left: 26px;
              padding-right: 26px;
              padding-bottom: 18px;
            }
            .home-text28 {
              font-style: normal;
              font-weight: 500;
            }
            .home-links3 {
              gap: var(--dl-layout-space-unit);
              flex-direction: column;
            }
            .home-image2 {
              flex: 0 0 auto;
              width: 100%;
              height: 320px;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-top: var(--dl-layout-space-oneandhalfunits);
            }
            .home-logo1 {
              width: 36px;
              height: 36px;
            }
            .home-company1 {
              font-size: 18px;
              line-height: 20px;
            }
            .home-items1 {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-button2 {
              padding: 12px;
            }
            .home-image1 {
              width: 14px;
              height: 14px;
            }
            .home-header2 {
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
          }
          @media (max-width: 479px) {
            .home-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
