import { useEffect, useState } from "react";

interface GamePreviewModalProps {
  onComplete: () => void;
}

const GamePreviewModal = ({ onComplete }: GamePreviewModalProps) => {
  const [count, setCount] = useState(3);
  const [showGo, setShowGo] = useState(false);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }

    if (count === 0 && !showGo) {
      setShowGo(true);
      setTimeout(() => {
        setShowGo(false);
        onComplete();
      }, 1000);
    }
  }, [count, showGo, onComplete]);

  return (
    <section className="h-screen flex items-center justify-center bg-black text-white text-6xl font-bold">
      <p className="trade-winds-regular text-secondary text-[100px] md:text-[300px] font-bold">
        {showGo ? "GO!" : count}
      </p>
    </section>
  );
};

export default GamePreviewModal;
