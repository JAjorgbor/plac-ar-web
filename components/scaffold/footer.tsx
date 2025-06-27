import React from "react";

const Footer = () => {
  return (
    <footer className="h-screen sticky top-0 bg-black bg-[url(/footer-background.png)] bg-cover bg-center text-white z-30">
      <div className="space-y-6 max-w-7xl mx-auto py-[5%] ">
        <h2 className="text-4xl font-bold">PlacAR</h2>
        <p>
          Don&apos;t just picture the vision — place it. Real rooms, real time,
          real dope.
        </p>
        <button className="rounded-3xl py-2 px-4 border border-white">
          Join Now
        </button>
        <div className="grid max-w-5xl md:grid-cols-4">
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2">
              <li>3D Meshes</li>
              <li>AR-AI Models</li>
              <li>API</li>
              <li>Designs</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Use Cases</h4>
            <ul className="space-y-2">
              <li>Clothing brands</li>
              <li>Malls</li>
              <li>E-Commerce</li>
              <li>Restaurants</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li>Academy</li>
              <li>Researchers</li>
              <li>Designers</li>
              <li>Hosting</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>FAQs</li>
              <li>Teams</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
