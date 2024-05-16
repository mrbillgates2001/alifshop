"use client";

import { useProductStore } from "@/utils/productStore";
import { Carousel, Toast } from "flowbite-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { HiCheck } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";

type Product = {
	id: string;
	title: string;
	thumbnail: string;
	price: number;
	discountPercentage: number;
	description: string;
	category: string;
	brand: string;
	images: string[];
};

// interface Product {
// 	id: string;
// 	title: string;
// 	thumbnail: string;
// 	price: number;
// 	discountPercentage: number;
// }

const ProductDetails = (params: {
	params: {
		id: string;
	};
}) => {
	const { products, fetchProductsFordiscount } = useProductStore();

	const [singleProduct, setSingleProduct] = useState<Product | []>(
		{} as Product
	);

	const [count, setCount] = useState(1);

	const [like, setLike] = useState(false);

	const [toast, setToast] = useState(false);

	const { id } = params.params;

	const fetchSingleProduct = async () => {
		try {
			const res = await fetch(`https://dummyjson.com/products/${id}`);
			const data = await res.json();
			setSingleProduct(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchSingleProduct();
		fetchProductsFordiscount();
	}, []);

	const counterIncrement = () => {
		setCount(count + 1);
	};

	const counterDecrement = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	const likedProduct = () => {
		setLike(!like);
		if (!like) {
			setToast(true);
			setTimeout(() => {
				setToast(false);
			}, 3000);
		}
	};

	console.log(products);

	return (
		<div className="mt-16 realtive">
			{toast && (
				<Toast
					className="absolute right-2 bottom-2"
					style={{
						zIndex: "100",
					}}>
					<div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
						<HiCheck className="h-5 w-5" />
					</div>
					<div className="ml-3 text-sm font-normal">
						{(singleProduct as Product).title} saralanganlarga qo'shildi
					</div>
					<Toast.Toggle />
				</Toast>
			)}

			<div>
				<p className="text-[18px] lowercase font-thin flex gap-3">
					<Link href="/" className="text-blue-500">
						Tovar katalogi
					</Link>
					<span>/</span>
					<Link href="/" className="text-blue-500">
						{(singleProduct as Product).category}
					</Link>
					<span>/</span>
					{(singleProduct as Product).brand}
				</p>
			</div>

			<div className="py-3 flex gap-20 flex-wrap ">
				<div id="hero-left" className="flex gap-10">
					<div className="flex flex-col gap-2">
						{(singleProduct as Product)?.images?.map((image, i) => (
							<img
								key={i}
								className="border-transparent border-2 cursor-pointer hover:border-2 hover:border-red-500"
								src={image}
								alt="..."
								width={50}
								height={50}
							/>
						))}
					</div>
					<div className="w-[400px] h-26 sm:h-34 xl:h-40 2xl:h-56 ">
						<Carousel>
							{(singleProduct as Product)?.images?.map((image, i) => (
								<img key={i} src={image} alt="..." />
							))}
						</Carousel>
					</div>
				</div>

				<div id="hero-right">
					<h1 className="text-[42px]">{(singleProduct as Product).title}</h1>
					<p className="text-[18px] w-[400px]">
						{(singleProduct as Product).description}
					</p>
					<p className="text-[20]">Narx: </p>
					<p className="card-text text-[16px] line-through text-gray-500">
						${(singleProduct as Product).price}
					</p>
					<p className="card-text text-[20px] text-green-600">
						$
						{(
							(singleProduct as Product).price -
							((singleProduct as Product).discountPercentage *
								(singleProduct as Product).price) /
								100
						).toFixed(2)}
					</p>
					<div className="border-2 p-[10px] items-center justify-center text-[20px] flex gap-3 w-[150px]">
						<button
							onClick={counterDecrement}
							disabled={count === 1}
							style={{
								color: count === 1 ? "gray" : "black",
							}}>
							<FaMinus />
						</button>
						<span>{count}</span>
						<button onClick={counterIncrement}>
							<FaPlus />
						</button>
					</div>
					<div className="flex gap-2 items-center mt-2">
						<button className="btn btn-warning btn-sm px-[100px] py-2 text-[18px] flex items-center gap-1.5">
							<IoCartOutline />
							<span>savatga</span>
						</button>
						<button onClick={likedProduct}>
							{like ? (
								<div>
									<FaHeart className="text-[40px] text-[red]" />
								</div>
							) : (
								<div>
									<CiHeart className="text-[56px] text-[red]" />
								</div>
							)}
						</button>
					</div>
				</div>
			</div>

			<section id="Sizni qiziqtirishi mumkin" className="py-3">
				<div className="py-3">
					<h2 className="text-[32px] font-black">Sizni qiziqtirishi mumkin</h2>
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
		</div>
	);
};

export default ProductDetails;
