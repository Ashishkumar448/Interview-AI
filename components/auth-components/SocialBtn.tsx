import React from "react";
import Image from "next/image";

interface SocialBtnProps {
  src: string;
  alt: string;
  name: string;
  onClick?: () => void;
}

const SocialBtn = ({ src, alt, name, onClick }: SocialBtnProps) => {
  return (
    <div className="w-full">
      <button className="btn-primary" onClick={onClick} type="button">
        <Image width={20} height={20} src={src} alt={alt} />
        {name}
      </button>
    </div>
  );
};

export default SocialBtn;