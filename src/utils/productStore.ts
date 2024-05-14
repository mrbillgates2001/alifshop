import axios from "axios";
import { create } from "zustand";

const fetchProductsFordiscount = async (set: any) => {
	set(() => ({
		loading: true,
	}));
	try {
		const res = await axios.get("https://dummyjson.com/products");
		const data = await res.data;
		set(() => ({
			loading: false,
			products: data.products.slice(0, 6),
			error: null,
		}));
	} catch (error) {
		console.log(error);
	}
};

const productStore = (set: any) => ({
	loading: false,
	products: [],
	error: null,
	fetchProductsFordiscount: () => fetchProductsFordiscount(set),
});

export const useProductStore = create(productStore);
