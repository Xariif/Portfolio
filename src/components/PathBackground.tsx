import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LandscapeRounded from "@mui/icons-material/LandscapeRounded";
import FlagRounded from "@mui/icons-material/FlagRounded";
import SchoolRounded from "@mui/icons-material/SchoolRounded";
import { useTheme } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import { green } from "@mui/material/colors";

const startPoints = [
	{ x: 50, y: 850 },
	{ x: 100, y: 700 },
	{ x: 150, y: 750 },
	{ x: 250, y: 450 },
	{ x: 300, y: 500 },
	{ x: 450, y: 100 }
];

const AnimatedIcon = ({ 
    point, 
    children, 
    scale = 1.5, 
    specialAnimation = false 
}: { 
    point: { x: number; y: number };
    children: React.ReactNode;
    scale?: number;
    specialAnimation?: boolean;
}) => {
    const theme = useTheme();
    
    return (
        <motion.div
            initial={{ opacity: 0, scale: specialAnimation ? 0.5 : 0.7 }}
            animate={{ opacity: 1, scale }}
            whileHover={{ scale: scale + 0.3, boxShadow: "0 8px 32px rgba(102,187,106,0.5)" }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            style={{
                position: "absolute",
                top: point.y - 18,
                left: point.x - 18,
                zIndex: 2,
                backgroundColor: theme.palette.background.default,
                borderRadius: "50%",
                padding: 8,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {children}
        </motion.div>
    );
};

const PathBackground = () => {
	const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
	const theme = useTheme();

	useEffect(() => {
		const timeouts = startPoints.map((item, idx) => setTimeout(() => setPoints((prev) => [...prev, item]), 1000 * idx));

		return () => timeouts.forEach(clearTimeout);
	}, [startPoints]);

	return (
		<div style={{opacity:.4, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none"}}>
			<svg width={600} height={1000} style={{ position: "absolute", top: 0, left: 0 }}>
				<defs>
					<filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
						<feGaussianBlur stdDeviation="4" result="coloredBlur"/>
						<feMerge>
							<feMergeNode in="coloredBlur"/>
							<feMergeNode in="SourceGraphic"/>
						</feMerge>
					</filter>
				</defs>
				{points.slice(0, -1).map((_, i) => {
					const segmentD = [`M ${points[i].x} ${points[i].y}`, `L ${points[i + 1].x} ${points[i + 1].y}`].join(" ");
					return (
						<motion.path
							key={i}
							d={segmentD}
							stroke={green[400]}
							strokeWidth={3}
							fill="none"
							filter="url(#glow)"
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
						/>
					);
				})}
			</svg>
			{points[0] && (
				<AnimatedIcon point={points[0]}>
					<ComputerIcon />
				</AnimatedIcon>
			)}
			{points[1] && (
				<AnimatedIcon point={points[1]}>
					<LandscapeRounded />
				</AnimatedIcon>
			)}
			{points[3] && (
				<AnimatedIcon point={points[3]}>
					<SchoolRounded />
				</AnimatedIcon>
			)}
			{points[5] && (
				<AnimatedIcon point={points[5]} scale={1.8} specialAnimation={true}>
					<FlagRounded sx={{ color: "#FFD700" }} />
				</AnimatedIcon>
			)}
		</div>
	);
};

export default PathBackground;
