import React from 'react';

interface NavigationArrowsProps {
  currentSection: number;
  totalSections: number;
  onNavigate: (direction: 'up' | 'down') => void;
}

const NavigationArrows: React.FC<NavigationArrowsProps> = ({
  currentSection,
  totalSections,
  onNavigate
}) => {
  return (
    <div
      style={{
        position: "fixed",
        right: 24,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        pointerEvents: "none",
      }}
    >
      <button
        onClick={() => onNavigate("up")}
        disabled={currentSection === 0}
        style={{
          background: "rgba(30,30,30,0.8)",
          border: "none",
          borderRadius: "50%",
          width: 48,
          height: 48,
          color: "#ffe066",
          fontSize: 20,
          cursor: "pointer",
          pointerEvents: currentSection === 0 ? "none" : "auto",
          marginBottom: 6,
          boxShadow: "0 2px 8px #0008",
          transition: "background 0.2s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: currentSection === 0 ? 0.5 : 1,
        }}
        aria-label="Scroll up"
      >
        <i
          className="hn hn-arrow-up"
          aria-hidden="true"
          style={{
            color: currentSection === 0 ? "#888" : "#ffe066",
            transition: "color 0.2s",
            fontSize: 18,
          }}
        >
        </i>
      </button>
      <button
        onClick={() => onNavigate("down")}
        disabled={currentSection === totalSections - 1}
        style={{
          background: "rgba(30,30,30,0.8)",
          border: "none",
          borderRadius: "50%",
          width: 48,
          height: 48,
          color: "#ffe066",
          fontSize: 20,
          cursor: "pointer",
          pointerEvents: currentSection === totalSections - 1
            ? "none"
            : "auto",
          boxShadow: "0 2px 8px #0008",
          transition: "background 0.2s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: currentSection === totalSections - 1 ? 0.5 : 1,
        }}
        aria-label="Scroll down"
      >
        <i
          className="hn hn-arrow-down"
          aria-hidden="true"
          style={{
            color: currentSection === totalSections - 1
              ? "#888"
              : "#ffe066",
            transition: "color 0.2s",
            fontSize: 18,
          }}
        >
        </i>
      </button>
    </div>
  );
};

export default NavigationArrows;
