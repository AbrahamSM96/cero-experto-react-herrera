import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoord] = useState({ x: 0, y: 0 });
  const { x, y } = coords;
  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoord(coords);
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      console.log("componente desmontado");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Soy el message</h3>
      <p>
        x:{x} y: {y}
      </p>
    </div>
  );
};
