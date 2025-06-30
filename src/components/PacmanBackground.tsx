import { memo, useMemo } from 'react';

// Define a fixed grid (8 columns x 6 rows)
const GRID_COLS = 8;
const GRID_ROWS = 6;
const CELL_WIDTH = 100 / GRID_COLS; // percent
const CELL_HEIGHT = 100 / GRID_ROWS; // percent

// Type definitions
interface MobItem {
  src: string;
  alt: string;
  col: number;
  row: number;
  filter: string;
  opacity: number;
  id?: string;
}

interface FruitItem {
  src: string;
  alt: string;
  col: number;
  row: number;
  opacity: number;
}

// Move static data outside component to prevent re-creation
const staticMobs: MobItem[] = [
  { src: "/Resources/Images/pacman.gif", alt: "Pacman", col: 1, row: 2, filter: "drop-shadow(0 0 16px #ffe066) drop-shadow(0 0 32px #ffe066) brightness(1.2)", opacity: 0.5 },
  { src: "/Resources/Images/ghost-blue.png", alt: "Blue Ghost", id: "ghost-1", col: 3, row: 1, filter: "drop-shadow(0 0 16px #00f6ff) drop-shadow(0 0 32px #00f6ff)", opacity: 0.35 },
  { src: "/Resources/Images/ghost-red.png", alt: "Red Ghost", id: "ghost-2", col: 6, row: 1, filter: "drop-shadow(0 0 16px #ff0000) drop-shadow(0 0 32px #ff0000)", opacity: 0.35 },
  { src: "/Resources/Images/Graphics/pixel-ghost-pink-24x24.png", alt: "Pink Ghost", id: "ghost-3", col: 2, row: 4, filter: "drop-shadow(0 0 16px #ffb6e6) drop-shadow(0 0 32px #ffb6e6)", opacity: 0.35 },
  { src: "/Resources/Images/Graphics/pixel-ghost-orange-24x24.png", alt: "Orange Ghost", id: "ghost-4", col: 5, row: 4, filter: "drop-shadow(0 0 16px #ffb347) drop-shadow(0 0 32px #ffb347)", opacity: 0.35 },
  { src: "/Resources/Images/ghost-orange.png", alt: "Orange Ghost", id: "ghost-5", col: 7, row: 3, filter: "drop-shadow(0 0 16px #ffb347) drop-shadow(0 0 32px #ffb347)", opacity: 0.3 },
  { src: "/Resources/Images/Graphics/pixel-ghost-blue-24x24.png", alt: "Blue Ghost", id: "ghost-6", col: 0, row: 5, filter: "drop-shadow(0 0 16px #00f6ff) drop-shadow(0 0 32px #00f6ff)", opacity: 0.3 },
  { src: "/Resources/Images/Graphics/pixel-ghost-red-24x24.png", alt: "Red Ghost", id: "ghost-7", col: 4, row: 0, filter: "drop-shadow(0 0 16px #ff0000) drop-shadow(0 0 32px #ff0000)", opacity: 0.3 },
  { src: "/Resources/Images/ghost-pink.png", alt: "Pink Ghost", id: "ghost-8", col: 6, row: 5, filter: "drop-shadow(0 0 16px #ffb6e6) drop-shadow(0 0 32px #ffb6e6)", opacity: 0.3 },
];

const staticFruits: FruitItem[] = [
  { src: "/Resources/Images/Graphics/pixel-fruit-cherry-24x24.png", alt: "Cherry", col: 0, row: 0, opacity: 0.45 },
  { src: "/Resources/Images/Graphics/pixel-fruit-strawberry-24x24.png", alt: "Strawberry", col: 7, row: 0, opacity: 0.45 },
  { src: "/Resources/Images/Graphics/pixel-fruit-apple-24x24.png", alt: "Apple", col: 0, row: 3, opacity: 0.45 },
  { src: "/Resources/Images/Graphics/pixel-fruit-orange-24x24.png", alt: "Orange", col: 7, row: 2, opacity: 0.45 },
  { src: "/Resources/Images/Graphics/pixel-fruit-cherry-24x24.png", alt: "Cherry", col: 2, row: 1, opacity: 0.45 },
  { src: "/Resources/Images/Graphics/pixel-fruit-apple-24x24.png", alt: "Apple", col: 5, row: 2, opacity: 0.45 },
  { src: "/Resources/Images/Graphics/pixel-fruit-strawberry-24x24.png", alt: "Strawberry", col: 3, row: 5, opacity: 0.45 },
  { src: "/Resources/Images/Graphics/pixel-fruit-orange-24x24.png", alt: "Orange", col: 1, row: 5, opacity: 0.45 },
  { src: "/Resources/Images/Graphics/pixel-fruit-cherry-24x24.png", alt: "Cherry", col: 7, row: 5, opacity: 0.45 },
  { src: "/Resources/Images/Graphics/pixel-fruit-apple-24x24.png", alt: "Apple", col: 4, row: 3, opacity: 0.45 },
  { src: "/Resources/Images/Graphics/pixel-fruit-orange-24x24.png", alt: "Orange", col: 6, row: 4, opacity: 0.45 },
  { src: "/Resources/Images/Graphics/pixel-fruit-strawberry-24x24.png", alt: "Strawberry", col: 5, row: 0, opacity: 0.45 },
];

// Extract styles to CSS to avoid inline recalculation
const animationStyles = `
  @keyframes fruitPulse {
    0%, 100% {
      filter: drop-shadow(0 0 6px #fff6) drop-shadow(0 0 10px #fff4);
      transform: scale(1);
    }
    20% {
      filter: drop-shadow(0 0 10px #fff8) drop-shadow(0 0 18px #fff5);
      transform: scale(1.08);
    }
    50% {
      filter: drop-shadow(0 0 16px #fff9) drop-shadow(0 0 24px #fff6);
      transform: scale(1.16);
    }
    80% {
      filter: drop-shadow(0 0 10px #fff8) drop-shadow(0 0 18px #fff5);
      transform: scale(1.08);
    }
  }
  @keyframes mirrorGhost {
    0%, 49% { transform: scaleX(1); }
    50%, 99% { transform: scaleX(-1); }
    100% { transform: scaleX(1); }
  }
`;

const containerStyle = {
  position: "fixed" as const,
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  pointerEvents: "none" as const,
  zIndex: -10,
  overflow: "hidden" as const,
  isolation: "isolate" as const,
  filter: "blur(1px)",
};

// Memoized mob component
const MobImage = memo(({ mob, index }: { mob: MobItem; index: number }) => {
  const style = useMemo(() => {
    const left = `calc(${mob.col * CELL_WIDTH + CELL_WIDTH / 2}% - 18px)`;
    const top = `calc(${mob.row * CELL_HEIGHT + CELL_HEIGHT / 2}% - 18px)`;
    const isGhost = mob.alt.toLowerCase().includes('ghost');
    
    let mirror = false;
    let animationDelay: string | undefined;
    
    if (isGhost) {
      const ghostList = staticMobs.filter(m => m.alt.toLowerCase().includes('ghost'));
      const ghostIndex = ghostList.indexOf(mob);
      if (ghostIndex === 1) { mirror = true; animationDelay = '0s'; }
      if (ghostIndex === 2) { mirror = true; animationDelay = '1s'; }
      if (ghostIndex === 7) { mirror = true; animationDelay = '2s'; }
    }
    
    return {
      position: "absolute" as const,
      left,
      top,
      width: 36,
      height: 36,
      opacity: mob.opacity,
      filter: mob.filter,
      mixBlendMode: "lighten" as const,
      willChange: "transform",
      pointerEvents: "none" as const,
      userSelect: "none" as const,
      animation: mirror ? "mirrorGhost 5s ease-in-out infinite" : undefined,
      animationDelay,
    };
  }, [mob]);

  return (
    <img
      key={`mob-${index}`}
      id={mob.id}
      src={mob.src}
      alt={mob.alt}
      style={style}
      draggable={false}
      loading="lazy"
    />
  );
});

// Memoized fruit component
const FruitImage = memo(({ fruit, index }: { fruit: FruitItem; index: number }) => {
  const style = useMemo(() => {
    const left = `calc(${fruit.col * CELL_WIDTH + CELL_WIDTH / 2}% - 14px)`;
    const top = `calc(${fruit.row * CELL_HEIGHT + CELL_HEIGHT / 2}% - 14px)`;
    
    return {
      position: "absolute" as const,
      left,
      top,
      width: 28,
      height: 28,
      opacity: fruit.opacity,
      animation: "fruitPulse 3.5s cubic-bezier(.4,1.6,.6,1) infinite",
      filter: "drop-shadow(0 0 8px #fff7)",
      mixBlendMode: "lighten" as const,
      willChange: "filter, transform",
      pointerEvents: "none" as const,
      userSelect: "none" as const,
    };
  }, [fruit]);

  return (
    <img
      key={`fruit-${index}`}
      src={fruit.src}
      alt={fruit.alt}
      style={style}
      draggable={false}
      loading="lazy"
    />
  );
});

const PacmanBackground = memo(() => {
  return (
    <>
      <style>{animationStyles}</style>
      <div style={containerStyle}>
        {/* Static Pacman and ghosts */}
        {staticMobs.map((mob, i) => (
          <MobImage key={i} mob={mob} index={i} />
        ))}
        
        {/* Static fruits */}
        {staticFruits.map((fruit, i) => (
          <FruitImage key={i} fruit={fruit} index={i} />
        ))}
      </div>
    </>
  );
});

PacmanBackground.displayName = 'PacmanBackground';
MobImage.displayName = 'MobImage';
FruitImage.displayName = 'FruitImage';

export default PacmanBackground;