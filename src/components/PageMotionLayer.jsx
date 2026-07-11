import { useEffect, useState } from "react";

export const PageMotionLayer = () => {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 18, visible: false });

  useEffect(() => {
    const handlePointerMove = (event) => {
      setSpotlight({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
        visible: true,
      });
    };

    const handlePointerOut = (event) => {
      if (!event.relatedTarget) {
        setSpotlight((current) => ({ ...current, visible: false }));
      }
    };

    const handleWindowBlur = () => {
      setSpotlight((current) => ({ ...current, visible: false }));
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: spotlight.visible ? 1 : 0.7,
          backgroundImage: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(32, 178, 166, 0.12), transparent 28%), radial-gradient(circle at 20% 20%, rgba(245, 166, 35, 0.06), transparent 24%), radial-gradient(circle at 80% 80%, rgba(32, 178, 166, 0.05), transparent 22%)`,
        }}
      />
      <div className="absolute top-24 left-8 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-24 right-0 h-80 w-80 rounded-full bg-highlight/10 blur-3xl"
        style={{ animation: "slow-drift 18s ease-in-out infinite" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(36,43,50,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(36,43,50,0.18)_1px,transparent_1px)] bg-size-[72px_72px] opacity-20" />
    </div>
  );
};
