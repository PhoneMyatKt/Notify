import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />
        Notify <span className="headingcr"> powered by Agoon</span>
      </h1>
    </header>
  );
}

export default Header;
