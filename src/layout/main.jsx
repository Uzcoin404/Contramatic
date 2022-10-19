import React from "react";
import Nav from "../components/nav/nav";
import Hero from "../components/hero/hero";
import AboutUs from "./aboutus/aboutUs";
import Software from "./software/software";
import Cards from "./cards/cards";
import WhiteLabel from "./white-label/whiteLabel";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import Footer from "../components/footer/footer";

export default function Main() {
    return (
        <div className="UI">
            <Nav />
            <Hero />
            <AboutUs />
            <Software />
            <Cards />
            <WhiteLabel />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
