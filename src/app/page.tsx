"use client";

import { banners } from "@/assets/images/banner";
import React from "react";
import { Carousel } from "react-bootstrap";
import Products from "./uz/products/page";
import { RxDashboard } from "react-icons/rx";

const Home = () => {
	return (
		<div>
			<section className="hero-section">
				<div id="tabs">
					<ul className="flex items-center gap-2 justify-between py-3">
						<li>Smartfonlar va gadjetlar</li>
						<li>Smartfonlar va gadjetlar </li>
						<li>Noutbuklar,kompyuterlar</li>
						<li>TV va proektorlar</li>
						<li>Audiotexnikalar</li>
						<li>Uy uchun texnika</li>
						<li> Oshxona uchun texnika </li>
						<li>Go'zallik va sog'liq</li>
						<li>Aqlli uy </li>
						<li>Yana</li>
					</ul>
				</div>

				<div id="banner">
					<Carousel
						data-bs-theme="dark"
						style={{
							width: "100%",
							height: "400px",
						}}>
						{banners.map((image, i) => (
							<Carousel.Item key={i}>
								<img
									className="d-block w-100"
									src={image.src}
									alt="First slide"
									style={{
										height: "400px",
										width: "100%",
										objectFit: "cover",
									}}
								/>
							</Carousel.Item>
						))}
					</Carousel>
				</div>
			</section>
			<section>
				<Products />

				<div className="py-4 flex items-center justify-center">
					<button className="btn btn-warning px-10 py-2 btn-sm text-[16px] flex items-center gap-1">
						<RxDashboard />
						<span>Katalogga o'tish</span>
					</button>
				</div>
			</section>
		</div>
	);
};

export default Home;
