import React from "react";
// eslint-disable-next-line
import footer from "../footer.css";

function Footer() {
  return (
    <div className="fixed:bottom row w-full bg-gray-500 text-white flex items-center justify-center py-4 px-4 mr-6">
      <p className="col-xl">
        &copy;{new Date().getFullYear()}
         Nathan Inc | All rights reserved | Terms Of Service | Privacy
      </p>
    </div>
  );
}

export default Footer;
