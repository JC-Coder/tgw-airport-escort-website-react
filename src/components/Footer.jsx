import React from "react";
import styles from "../style";

const Footer = () => {
  return (
    <div className={`bg-[var(--blue)] pt-10 pb-4 border-b`}>
     <div className={`border-b border-gray-400 ${styles.paddingX} pb-[2rem]`}>
       <div className="grid md:grid-cols-4 text-white">
        <div className="lg:w-[55%] lg:col-span-2 flex flex-col md:items-start items-center md:w-full text-center md:text-start">
          <p>Data visualization, and expense management for your business.</p>
        </div>

        <div className="col-span-2 grid md:grid-cols-4 md:mt-0 mt-5 grid-cols-2 text-center md:text-left">
          <div>
            <h3 className="font-medium mb-4 text-xl md:mt-0 mt-5">Product</h3>
            <ul className="flex flex-col space-y-2">
              <a href="/" className="text-xs">Car Tracking</a>
              <a href="/" className="text-xs">Smart Home security</a>
              <a href="/" className="text-xs">Fleet management</a>
              <a href="/" className="text-xs">System analysis</a>
              <a href="/" className="text-xs">Young In Tech</a>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-xl md:mt-0 mt-5">Company</h3>
            <ul className="flex flex-col space-y-2">
              <a href="/" className="text-xs">Car Tracking</a>
              <a href="/" className="text-xs">Smart Home security</a>
              <a href="/" className="text-xs">Fleet management</a>
              <a href="/" className="text-xs">System analysis</a>
              <a href="/" className="text-xs">Young In Tech</a>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-xl md:mt-0 mt-5">Resources</h3>
            <ul className="flex flex-col space-y-2">
              <a href="/" className="text-xs">Car Tracking</a>
              <a href="/" className="text-xs">xsart Home security</a>
              <a href="/" className="text-xs">Fleet management</a>
              <a href="/" className="text-xs">System analysis</a>
              <a href="/" className="text-xs">Young In Tech</a>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-xl md:mt-0 mt-5">Follow Us</h3>
            <ul className="flex flex-col space-y-2">
              <a href="/" className="text-xs">Car Tracking</a>
              <a href="/" className="text-xs">Smart Home security</a>
              <a href="/" className="text-sm">Fleet management</a>
              <a href="/" className="text-xs">System analysis</a>
              <a href="/" className="text-xs">Young In Tech</a>
            </ul>
          </div>
        </div>
      </div>
     </div>
     <div className="copyright">
      <p className="text-center text-white text-sm py-2">Copyright @ Vince Technologies 2023. All Rights Reserved.</p>
     </div>
    </div>
  );
};

export default Footer;
