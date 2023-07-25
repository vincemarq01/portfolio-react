import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./section/variants";
const SkillCard = ({ name, icon, size }) => {
	return (
		<motion.div
			// variants={fadeIn("up", 0.8, 0.6)}
			// initial="hidden"
			// whileInView="show"
			// viewport={{ once: "false", amount: 0.4 }}
			className="grid grid-cols-1 justify-center bg-secondary  rounded-lg p-5  text-center"
		>
			<div className="flex flex-col gap-5">
				<div className="mx-auto">
					<img src={icon} width={size} height={size}></img>
				</div>

				<p className="text-[#0a0b0a] font-Poppins">{name}</p>
			</div>
		</motion.div>

		// <div className="p-4 bg-skillBadge rounded-lg">
		// 	<div className="grid grid-cols-1 justify-center items-center">
		// 		<div className="flex flex-col items-center justify-center gap-3">
		// 			<div className="mx-auto">
		// 				<img src={icon} width={size} height={size}></img>
		// 			</div>
		// 			<div className="flex items-center justify-center">
		// 				<h3>{name}</h3>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default SkillCard;
