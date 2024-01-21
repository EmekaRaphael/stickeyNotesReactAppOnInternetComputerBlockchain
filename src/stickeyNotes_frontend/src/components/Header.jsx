import React from "react";
import EditNoteSharpIcon from "@mui/icons-material/EditNoteSharp";

function Header() {
  return (
    <header>
      <h1>{<EditNoteSharpIcon fontSize="medium" />}stickyNotes</h1>
    </header>
  );
}

export default Header;
