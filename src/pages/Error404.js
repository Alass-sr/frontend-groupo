import React from "react";

export default function Error404() {
  return (
    <div className="error-404">
      <img
        src={require("../assets/icon-left-font-monochrome-black.png")}
        alt="groupomania"
      />
      <h2>Oops ... Cette page n'exite pas !</h2>
    </div>
  );
}
