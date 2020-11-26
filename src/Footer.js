import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <a
        className="footer-links"
        href="https://github.com/LomakinaNataliia/Weather-app"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>{" "}
      by{" "}
      <a
        className="footer-links"
        href="https://www.linkedin.com/in/nataliia-lomakina-733308152/"
        target="_blank"
        rel="noreferrer"
      >
        Nataliia Lomakina
      </a>
    </div>
  );
}
