import { useState, useEffect } from "react";

const locations = [
  { id: 1, name: "Parekh Fabrics", city: "Ahmedabad", short: "Fabrics", x: 340, y: 495 },
  { id: 2, name: "Parekh Silk", city: "Surat", short: "Silk", x: 350, y: 560 },
  { id: 3, name: "Parekh Rayon", city: "Raipur", short: "Rayon", x: 498, y: 545 },
  { id: 4, name: "Parekh Linen", city: "Kolkata", short: "Linen", x: 625, y: 525 },
  { id: 5, name: "Parekh e-Trade Market", city: "Hyderabad", short: "e-Trade", x: 450, y: 635 },
  { id: 6, name: "Parekh Chamber of Textile", city: "Bangalore", short: "Chamber", x: 415, y: 715 },
  { id: 7, name: "Parekh Southern Polyfabrics", city: "Chennai", short: "Southern", x: 480, y: 715 },
];

const PIN_COLOR = "#8b1a1a";

function Pin({ loc, index, active, onClick }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 120 + 100);
    return () => clearTimeout(t);
  }, [index]);

  let labelX = loc.x;
  let labelY = loc.y - 35;
  let textAnchor = "middle";

  if (loc.id === 6) {
    labelX = loc.x - 40;
    labelY = loc.y - 5;
    textAnchor = "end";
  } else if (loc.id === 7) {
    labelX = loc.x + 40;
    labelY = loc.y - 5;
    textAnchor = "start";
  }

  return (
    <g
      onClick={() => onClick(loc.id)}
      style={{ opacity: visible ? 1 : 0, cursor: "pointer" }}
    >
      {/* 🔴 Blink dot */}
   <circle cx={loc.x} cy={loc.y} r="6" fill="#d32f2f">

        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
      </circle>

      {/* Glow */}
      <circle cx={loc.x} cy={loc.y} r="10" fill="none" stroke="#d32f2f">
        <animate attributeName="r" values="10;22" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* ✅ TEXT (NAME + CITY) */}
      <text
        x={labelX}
        y={labelY}
        textAnchor={textAnchor}
        fontSize="14"
        fontWeight="700"
        fill="#1a237e"
      >
        <tspan x={labelX}>{loc.name}</tspan>
        <tspan x={labelX} dy="16" fontSize="12" fill="#444">
          {loc.city}
        </tspan>
      </text>
    </g>
  );
}

export default function Associates() {
  const [active, setActive] = useState(null);

  return (
<>

{/* ✅ Container mein padding-top add kiya hai taaki header ke niche se shuru ho */}
<div style={{ 
  maxWidth: "900px", 
  margin: "0 auto", 
  paddingTop: "100px", // ⬅️ Header ki height ke hisaab se ise adjust karein (e.g., 80px to 120px)
  position: "relative",
  zIndex: "10" 
}}>

  <svg
    viewBox="0 0 1000 1000"
    style={{
      width: "100%",
      display: "block",
      margin: "0 auto",
      overflow: "visible" // ⬅️ Taaki pins agar border se bahar niklein toh dikhen
    }}
  >
    {/* 🔲 OUTER BORDER BOX */}
    <rect
      x="20"
      y="20"
      width="960"
      height="960"
      fill="none"
      stroke="#C5A27D" // Aapki theme ka color
      strokeWidth="2"
    />

    {/* 🏷️ HEADING (Aapke naye style ke hisaab se update kiya hai) */}
    <text
      x="500"
      y="70"
      textAnchor="middle"
      fontSize="32"
      fontWeight="900"
      fill="#4A4238"
      fontFamily="Arial Black, sans-serif"
    >
      HC PAREKH & ASSOCIATES
    </text>

    <text
      x="500"
      y="105"
      textAnchor="middle"
      fontSize="16"
      fill="#C5A27D"
      fontWeight="bold"
      letterSpacing="3"
    >
      WWW.HCPAREKH.COM
    </text>

    {/* 🗺️ IMAGE (India Map Outline) */}
    <image
      href="https://img.freepik.com/premium-vector/vector-map-black-outline-india-vector-illustration_686498-514.jpg?w=1060"
      x="50"
      y="120" // ⬅️ Heading se thoda niche kiya taaki overlap na ho
      width="900"
      height="800"
      preserveAspectRatio="xMidYMid meet"
      opacity="0.3"
    />

    {/* Pins Mapping */}
    {locations.map((loc, i) => (
      <Pin
        key={loc.id}
        loc={loc}
        index={i}
        active={active === loc.id}
        onClick={setActive}
      />
    ))}
  </svg>
</div>

</>
  );
}
