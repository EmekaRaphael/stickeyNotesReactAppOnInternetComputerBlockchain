import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright INT'L WITTY ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
