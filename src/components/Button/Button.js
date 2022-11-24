import React from "react";

export function Button({ size, title, onClick, disabled }) {
  return (
    <div
      className={size === "small" ? "button-small" : "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </div>
  );
}
