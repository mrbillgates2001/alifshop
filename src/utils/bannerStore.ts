import axios from "axios";
import { create } from "zustand";

export type BannerStore = {
	images: string[];
	fetchImages: () => void;
};

const fetchImages = async (set: any) => {
	try {
		const response = await axios.get("https://dummyjson.com/products");
		const data = await response.data;
		set(() => ({
			images: data.products,
		}));
	} catch (error) {}
};

const bannerStore = (set: any) => ({
	images: [],
	fetchImages: () => fetchImages(set),
});

export const useBannerStore = create(bannerStore);
