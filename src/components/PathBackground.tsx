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
				{points.slice(0, -1).map((_, i) => {
					const segmentD = [`M ${points[i].x} ${points[i].y}`, `L ${points[i + 1].x} ${points[i + 1].y}`].join(" ");
					return <motion.path key={i} d={segmentD} stroke={green[400]} strokeWidth={3} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />;
				})}
			</svg>
			{points[0] && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					style={{
						position: "absolute",
						top: points[0].y - 12,
						left: points[0].x - 12,
						zIndex: 1,
						scale: 1.5,
						backgroundColor: theme.palette.background.default
					}}
				>
					<ComputerIcon />
				</motion.div>
			)}
			{points[1] && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					style={{
						position: "absolute",
						top: points[1].y - 12,
						left: points[1].x - 12,
						zIndex: 1,
						scale: 1.5,
						backgroundColor: theme.palette.background.default
					}}
				>
					<LandscapeRounded />
				</motion.div>
			)}
			{points[3] && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					style={{
						position: "absolute",
						top: points[3].y - 12,
						left: points[3].x - 12,
						zIndex: 1,
						scale: 1.5,
						backgroundColor: theme.palette.background.default
					}}
				>
					<SchoolRounded />
				</motion.div>
			)}
			{points[5] && (
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1.8 }}
					transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
					style={{
						position: "absolute",
						top: points[5].y - 12,
						left: points[5].x - 12,
						zIndex: 1,
						backgroundColor: theme.palette.background.default
					}}
				>
					<FlagRounded sx={{ color: "#FFD700" }} />
				</motion.div>
			)}
		</div>
	);
};

export default PathBackground;
