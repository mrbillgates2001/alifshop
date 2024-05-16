"use client";

import { useProductStore } from "@/utils/productStore";
import Link from "next/link";
import React, { useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";

type Product = {
	products: {
		id: string;
		title: string;
		thumbnail: string;
		price: number;
		discountPercentage: number;
	};
};

const Products = () => {
	const { products, fetchProductsFordiscount, loading, error } =
		useProductStore();

	useEffect(() => {
		fetchProductsFordiscount();
	}, []);

	console.log(products[1]);

	return (
		<div className="">
			<section id="Chegirmalar">
				<div className="py-3">
					<h2 className="text-[32px] font-black">Chegirmalar</h2>
				</div>
				<div className="flex flex-wrap items-center justify-between gap-2">
					{products.map(
						(
							product: {
								id: string;
								title: string;
								thumbnail: string;
								price: number;
								discountPercentage: number;
							},
							i
						) => (
							<Link
								href={`/uz/products/${product.id}`}
								key={i}
								className="card hover:shadow-md w-[180px] h-[300px] realtive">
								<div className="w-[180px] h-[200px] overflow-hidden ">
									<img
										src={product.thumbnail}
										alt=""
										className="border-t  rounded-md"
									/>
								</div>
								<span className="bg-[#FFBE1F] rounded-md flex items-center justify-center py-[4px] text-[14px] w-[70px] absolute -right-1 -top-2 ">
									-{product.discountPercentage} %
								</span>
								<div className="card-body">
									<p className="card-title text-[16px]">{product.title}</p>
									<p className="card-text text-[14px] line-through text-gray-500">
										${product.price}
									</p>
									<p className="card-text text-[14px] text-red-600">
										$
										{(
											product.price -
											(product.discountPercentage * product.price) / 100
										).toFixed(2)}
									</p>
									<button className="btn btn-warning btn-sm text-[12px] flex items-center gap-1.5 mt-2">
										<IoCartOutline />
										<span>savatga</span>
									</button>
								</div>
							</Link>
						)
					)}
				</div>
			</section>

			<section
				id="TV COM obunasi sovg'aga
">
				<div className="py-3">
					<h2 className="text-[32px] font-black">TV COM obunasi sovg'aga</h2>
				</div>
				<div className="flex flex-wrap items-center justify-between gap-2">
					{products.map(
						(
							product: {
								id: string;
								title: string;
								thumbnail: string;
								price: number;
								discountPercentage: number;
							},
							i
						) => (
							<Link
								href={`/uz/products/${product.id}`}
								key={i}
								className="card hover:shadow-md w-[180px] h-[300px] relative">
								<div className="w-[180px] h-[200px] overflow-hidden ">
									<img
										src={product.thumbnail}
										alt=""
										className="border-t  rounded-md"
									/>
								</div>
								<span className="bg-[#FFBE1F] rounded-md flex items-center justify-center py-[4px] text-[14px] w-[70px] absolute z-50 -right-1 -top-2 ">
									-{product.discountPercentage} %
								</span>
								<div className="card-body">
									<p className="card-title text-[16px]">{product.title}</p>
									<p className="card-text text-[14px] line-through text-gray-500">
										${product.price}
									</p>
									<p className="card-text text-[14px] text-red-600">
										$
										{(
											product.price -
											(product.discountPercentage * product.price) / 100
										).toFixed(2)}
									</p>
									<button className="btn btn-warning btn-sm text-[12px] flex items-center gap-1.5 mt-2">
										<IoCartOutline />
										<span>savatga</span>
									</button>
								</div>
							</Link>
						)
					)}
				</div>
			</section>

			<section
				id="Kir yuvish kukuni sovg'aga
">
				<div className="py-3">
					<h2 className="text-[32px] font-black">Kir yuvish kukuni sovg'aga</h2>
				</div>
				<div className="flex flex-wrap items-center justify-between gap-2">
					{products.map(
						(
							product: {
								id: string;
								title: string;
								thumbnail: string;
								price: number;
								discountPercentage: number;
							},
							i
						) => (
							<Link
								href={`/uz/products/${product.id}`}
								key={i}
								className="card hover:shadow-md w-[180px] h-[300px] relative">
								<div className="w-[180px] h-[200px] overflow-hidden ">
									<img
										src={product.thumbnail}
										alt=""
										className="border-t  rounded-md"
									/>
								</div>
								<span className="bg-[#FFBE1F] rounded-md flex items-center justify-center py-[4px] text-[14px] w-[70px] absolute z-50 -right-1 -top-2 ">
									-{product.discountPercentage} %
								</span>
								<div className="card-body">
									<p className="card-title text-[16px]">{product.title}</p>
									<p className="card-text text-[14px] line-through text-gray-500">
										${product.price}
									</p>
									<p className="card-text text-[14px] text-red-600">
										$
										{(
											product.price -
											(product.discountPercentage * product.price) / 100
										).toFixed(2)}
									</p>
									<button className="btn btn-warning btn-sm text-[12px] flex items-center gap-1.5 mt-2">
										<IoCartOutline />
										<span>savatga</span>
									</button>
								</div>
							</Link>
						)
					)}
				</div>
			</section>

			<section
				id="Avtotovarlar
">
				<div className="py-3">
					<h2 className="text-[32px] font-black">Avtotovarlar</h2>
				</div>
				<div className="flex flex-wrap items-center justify-between gap-2">
					{products.map(
						(
							product: {
								id: string;
								title: string;
								thumbnail: string;
								price: number;
								discountPercentage: number;
							},
							i
						) => (
							<Link
								href={`/uz/products/${product.id}`}
								key={i}
								className="card hover:shadow-md w-[180px] h-[300px] relative">
								<div className="w-[180px] h-[200px] overflow-hidden ">
									<img
										src={product.thumbnail}
										alt=""
										className="border-t  rounded-md"
									/>
								</div>
								<span className="bg-[#FFBE1F] rounded-md flex items-center justify-center py-[4px] text-[14px] w-[70px] absolute -right-1 -top-2 ">
									-{product.discountPercentage} %
								</span>
								<div className="card-body">
									<p className="card-title text-[16px]">{product.title}</p>
									<p className="card-text text-[14px] line-through text-gray-500">
										${product.price}
									</p>
									<p className="card-text text-[14px] text-red-600">
										$
										{(
											product.price -
											(product.discountPercentage * product.price) / 100
										).toFixed(2)}
									</p>
									<button className="btn btn-warning btn-sm text-[12px] flex items-center gap-1.5 mt-2">
										<IoCartOutline />
										<span>savatga</span>
									</button>
								</div>
							</Link>
						)
					)}
				</div>
			</section>
		</div>
	);
};

export default Products;
