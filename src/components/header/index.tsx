"use client";

import React, { useState } from "react";
import { IoCloseSharp, IoMenu, IoCartOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { Button } from "react-bootstrap";

const Header = () => {
	const [open, setOpen] = useState(false);

	const openMenu = () => {
		setOpen(!open);
	};

	const handleSearch = (e: any) => {
		e.preventDefault();
		console.log("search");
	};

	return (
		<header
			className="fixed top-0 left-0 right-0 w-full bg-white"
			style={{
				zIndex: "100",
			}}>
			<div className="container max-w-[1340px] mx-auto py-2 px-5 ">
				<div>
					<nav className="flex items-center justify-between px-2">
						<div className="logo flex items-center">
							<svg
								width="48"
								height="48"
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<rect width="48" height="48" rx="4.8" fill="transparent" />
								<path
									d="M27.2732 16.0289H22.9711L17.2306 30.1528H20.9138L25.1222 19.2437L29.3306 30.1528H33.0105L27.2732 16.0289Z"
									fill="#FFBE1F"
								/>
								<path
									d="M23.5665 40.53L23.5364 40.5267H23.533H23.5297H23.5264H23.523C21.3586 40.3092 19.2811 39.6536 17.401 38.6299C13.7781 36.6495 10.9078 33.2907 9.6566 29.0221C8.4021 24.7501 9.00092 20.3744 10.978 16.7548C11.995 14.8914 13.38 13.2254 15.066 11.8773L15.0995 11.8505L15.1028 11.8472C17.5984 9.80316 20.6527 8.44161 23.9612 8.01341C23.978 8.01007 24.0884 8.00003 24.1051 8.00003L25.4934 11.4156C25.4733 11.4156 25.3596 11.4257 25.3395 11.429C22.3889 11.613 19.6525 12.7203 17.4479 14.4933C17.4144 14.5201 17.3776 14.5502 17.3442 14.577C17.2907 14.6204 17.2338 14.6673 17.1803 14.7141L17.1769 14.7175L17.1736 14.7208L17.1702 14.7241L17.1669 14.7275L17.1635 14.7308C17.1501 14.7442 17.1334 14.7543 17.12 14.7643C15.8689 15.7947 14.8419 17.0492 14.0758 18.4475C12.5302 21.2743 12.0652 24.6932 13.0454 28.0319C14.0256 31.3705 16.2636 33.9966 19.0904 35.5388C20.5891 36.3584 22.2518 36.8736 23.9813 37.0308C27.7448 37.3419 31.2942 36.1309 34.0106 33.9029C34.1411 33.7959 34.2716 33.6855 34.402 33.5717L35.7903 36.9907C32.4182 39.5733 28.1128 40.9415 23.5665 40.5367V40.53Z"
									fill="#FFBE1F"
								/>
							</svg>
							<strong>alif </strong> <span> shop</span>
						</div>
						<div>
							<button
								onClick={openMenu}
								className="flex items-center bg-[#FFBE1F] px-2  py-2 gap-2 rounded-md">
								{open ? (
									<IoCloseSharp
										style={{
											fontSize: "20px",
										}}
									/>
								) : (
									<IoMenu
										style={{
											fontSize: "20px",
										}}
									/>
								)}
								<span className="text-[12px]">Tovar katalogi</span>
							</button>
						</div>
						<form
							onSubmit={handleSearch}
							style={{
								border: "2px solid #FFBE1F",
								borderRadius: "10px",
								padding: "5px 10px",
								width: "400px",
								fontSize: "14px",
								display: "flex",
							}}>
							<input
								placeholder="Search..."
								type="search"
								id="inp"
								style={{
									width: "100%",
									height: "100%",
									border: "0",
									outline: "none",
									fontSize: "14px",
									padding: "5px",
								}}
							/>
							<button type="submit">
								<FaSearch />
							</button>
						</form>
						<div className="flex flex-col items-center hover:text-[#FFBE1F] hover:cursor-pointer hover:transition-all transition-3">
							<IoCartOutline />
							<p className="text-[14px]">Savat</p>
						</div>
						<div className="flex flex-col items-center hover:text-[#FFBE1F] hover:cursor-pointer hover:transition-all transition-3">
							<IoCartOutline />
							<p className="text-[14px]">Saralanganlar</p>
						</div>
						<div>
							<Button
								variant="outline"
								className="btn-sm border border-warning text-black text-[16px] hover:bg-yellow-200">
								Kirish
							</Button>
						</div>
						<div>
							<span className="text-[14px]">РУС / UZB</span>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
