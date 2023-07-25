export const fadeIn = (direction, delay, duration) => {
	return {
		hidden: {
			y: direction === "up" ? 20 : direction === "down" ? -80 : 0,
			opacity: 0,
			x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
		},
		show: {
			y: 0,
			x: 0,
			opacity: 1,

			transition: {
				type: "tween",
				duration: duration,
				delay: delay,
				ease: [0.25, 0.25, 0.25, 0.75],
			},
		},
	};
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
	hidden: {},
	show: {
		transition: {
			staggerChildren,
			delayChildren,
		},
	},
});

export const mobileMenu = {
	hidden: {
		height: 0,
		opacity: 0.4,
	},
	show: {
		height: "100vh",
		opacity: 1,
		transition: {
			when: "beforeChildren",
		},
	},
	transition: {
		duration: 0.6,
		when: "beforeChildren",
	},
	exit: {
		opacity: 0,
		height: 0,
		transition: {
			ease: "easeInOut",
			duration: 0.3,
			delay: 0.5,
		},
	},
};
