import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const About = () => {
	return (
		<div id="About" className="flex max-w-[1000px] mx-5  md:mx-5 lg:mx-auto  w-full min-h-screen ">
			<VerticalTimeline>
				<VerticalTimelineElement
					className="z-0"
					contentStyle={{ background: "#eeeeee", color: "" }}
					contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
					date="2018 - present"
					iconStyle={{ background: "rgb(33, 150, 243)", color: "" }}
					// icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title">Software Engineer Analyst</h3>
					<h4 className="vertical-timeline-element-subtitle">Manila City</h4>
					<p>I'm front-end Developer the use a CRM tool (Service Cloud RightNow)</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2010 - 2011"
					contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
				>
					<h3 className="vertical-timeline-element-title">Programmer(VB.NET Developer)</h3>
					<h4 className="vertical-timeline-element-subtitle">Laguna Technopark</h4>
					<p>Implementing windows application using VB.Net</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};

export default About;
