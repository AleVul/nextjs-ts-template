import React from "react";

export interface ButtonProps {
  onClick?: () => void;
}

/**
 * A placeholder button component.
 *
 * Add you own button implementation here.
 */
const Button: React.FC<ButtonProps> = (props) => <button {...props} />;

export default Button;
