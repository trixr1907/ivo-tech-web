// src/index.tsx
import React from "react";
var Button = ({
  children,
  onClick,
  variant = "primary"
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className: `${baseStyles} ${variantStyles[variant]}`,
      onClick
    },
    children
  );
};
export {
  Button
};
