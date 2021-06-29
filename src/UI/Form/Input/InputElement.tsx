import React from "react";

interface inputProps {
  Init?: string;
  placeholder?: string;
  type: "text" | "number" | "password";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<inputProps> = ({ Init, type, onChange, placeholder }) => {
  return (
    <input placeholder={placeholder} type={type} onChange={onChange} value={Init} />
  );
};
export default Input;
