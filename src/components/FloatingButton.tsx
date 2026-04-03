"use client";

import ArrowIcon from "./ArrowIcon";

interface FloatingButtonProps {
  onContact: () => void;
}

export default function FloatingButton({ onContact }: FloatingButtonProps) {
  return (
    <button className="floating-btn" onClick={onContact}>
      Me contacter
      <ArrowIcon />
    </button>
  );
}
