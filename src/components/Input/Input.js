import React from "react";

export function Input({
  label,
  id,
  value,
  onChange,
  type,
  placeholder,
  error,
}) {
  return (
    <div className="input">
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      <div className="error" style={{ opacity: error ? 1 : 0 }}>
        {error}
      </div>
    </div>
  );
}
