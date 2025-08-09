import { Box, Link, Paper, Tooltip, Typography, Grid, Zoom } from "@mui/material";
import { useState, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";
import { useInView } from "react-intersection-observer";
// Type definition for contact items
interface ContactItem {
	id: string;
	label: string;
	value: string;
	link: string;
	icon: string;
	hoverText: string;
	color: string;
}

// Memoized contact item component
const ContactItemComponent = ({ index, item, activeItem, onItemClick, inView }: { index: number; item: ContactItem; activeItem: string | null; onItemClick: (id: string, value: string) => void; inView: boolean }) => {
	const isActive = activeItem === item.id;
	const isCopyable = item.id === "phone" || item.id === "email";

	const handleClick = useCallback(
		(e: React.MouseEvent) => {
			if (isCopyable) {
				onItemClick(item.id, item.value);
				e.preventDefault();
			}
		},
		[isCopyable, item.id, item.value, onItemClick]
	);
	
	return (
		<Zoom  timeout={index * 500} in={inView} style={{ transitionDelay: `${index * 100}ms` }}>
			<Grid size={{ xs: 12, md: 6 }}>
			<Tooltip title={item.hoverText} placement="top" arrow>
				<Link href={item.link} target={!isCopyable ? "_blank" : undefined} rel="noopener noreferrer" underline="none" onClick={handleClick} sx={{ display: "block", minWidth: 200 }}>
					<Paper sx={{ p: 2, textAlign: "center", height: "100%" }}>
						<i
							className={`${item.icon} hn`}
							style={{
								fontSize: "2.5rem",
								marginBottom: "16px",
								display: "block",
								color: item.color
							}}
						/>

						<Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: "block" }}>
							{item.label}
						</Typography>

						<Typography variant="body2" color="text.primary">
							{isActive ? "Copied!" : item.value}
						</Typography>
					</Paper>
				</Link>
			</Tooltip>
		</Grid>
		</Zoom>
	);
};

ContactItemComponent.displayName = "ContactItemComponent";

const Contact = memo(() => {
	const { t } = useTranslation();
	const [activeItem, setActiveItem] = useState<string | null>(null);
	const theme = useTheme();
	// Static contact info moved outside component
	const contactInfo: ContactItem[] = [
		{
			id: "email",
			label: "Email",
			value: "jakubfiliks7@gmail.com",
			link: "mailto:jakubfiliks7@gmail.com",
			icon: "hn hn-threads",
			hoverText: "Send me an email",
			color: theme.palette.primary.main
		},
		{
			id: "phone",
			label: "Phone",
			value: "+48 668 022 456",
			link: "tel:+48668022456",
			icon: "hn-phone-ringing-low",
			hoverText: "Call me",
			color: theme.palette.success.main
		},
		{
			id: "linkedin",
			label: "LinkedIn",
			value: "Jakub Filiks",
			link: "https://www.linkedin.com/in/jakub-filiks-4537b9225/",
			icon: "hn-linkedin",
			hoverText: "View my LinkedIn profile",
			color: theme.palette.info.main
		},
		{
			id: "github",
			label: "GitHub",
			value: "Xariif",
			link: "https://github.com/Xariif",
			icon: "hn-github",
			hoverText: "Check out my GitHub repositories",
			color: theme.palette.secondary.main
		}
	];

	const handleItemClick = useCallback((id: string, value: string) => {
		navigator.clipboard.writeText(value);
		setActiveItem(id);
		setTimeout(() => setActiveItem(null), 2000);
	}, []);

	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true
	});


	return (
		<Box sx={{ px: 3, py: 5 }} ref={ref}>
			<Typography variant="h1" gutterBottom align="center" display="flex" justifyContent="center" alignItems="center">
				{t("contact.title")}
				<i className="hn hn-info-circle" style={{ fontSize: 48, marginLeft: 8 }}></i>
			</Typography>
			<Grid container spacing={2} sx={{ maxWidth: 1000, margin: "0 auto" }}>
				{contactInfo.map((item,index) => (
					<ContactItemComponent key={item.id} index={index} item={item} activeItem={activeItem} onItemClick={handleItemClick} inView={inView} />
				))}
			</Grid>
		</Box>
	);
});

Contact.displayName = "Contact";

export default Contact;
