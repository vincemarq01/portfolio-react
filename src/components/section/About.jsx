import React from "react";
import "../../index.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const About = () => {
	return (
		<div id="about" className="flex flex-col max-w-[1000px] mt-[150px] md:mt-[100px] 2xl:mt-[0px] lg:mx-auto ">
			<VerticalTimeline className="">
				<VerticalTimelineElement
					className="vertical-timeline-element--work  "
					contentStyle={{ background: "rgb(238, 238, 238)", color: "black" }}
					date="2018 - present"
					iconStyle={{ background: "rgb(238, 238, 238)", color: "black" }}
				>
					<h3 className="vertical-timeline-element-title">Software Engineer Analyst</h3>
					<h4 className="vertical-timeline-element-subtitle">Accenture</h4>
					<h4 className="vertical-timeline-element-subtitle">Philippines</h4>
					<p>
						A skilled front-end developer specializing in UI development using JavaScript, HTML, CSS, Bootstrap, and React JS TypeScript. Proficient in enhancing Customer Portals
						within the Internet Industry using Service Cloud, JavaScript, and Bootstrap. Experienced in code review, defect debugging, and system performance optimization. Capable of
						delivering comprehensive technical documentation and adept at collaborating with clients and cross-functional teams to meet business needs and showcase sprint-end
						progress.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2018"
					contentStyle={{ background: "gray", color: "black" }}
					iconStyle={{ background: "rgb(238, 238, 238)", color: "black" }}
				>
					<h3 className="vertical-timeline-element-title">Programmer</h3>
					<h4 className="vertical-timeline-element-subtitle">Sinag Manufacturing</h4>
					<h4 className="vertical-timeline-element-subtitle">Philippines</h4>
					<p>● Creating an Inspection System using VB.Net and MS SQL ● Responsible Creating Database and Table ● Responsible of Technical and Functional Document</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};

export default About;
