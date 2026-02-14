'use client';
import React, { useState } from "react";

interface InputProps {
    type: string;
    placeholder?: string;
    src: string;
    alt: string;
    name: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    autoComplete: string;
}

const Input = ({ type, name, value, placeholder, onChange, src, alt, id, autoComplete }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className="input-div">
      <img src={src} alt={alt} />
      <input
        className="input-field"
        id={id}
        type={isPassword && showPassword ? 'text' : type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
      />
      {isPassword && (
        <img
          src={showPassword ? "/images/Visibility.svg" : "/images/Visibility.svg"}
          alt="toggle visibility"
          className="cursor-pointer w-6 h-6 opacity-70 hover:opacity-100"
          onClick={() => setShowPassword(!showPassword)}
        />
      )}
    </div>
  );
};

export default Input;