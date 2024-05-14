import {
	aboveFooter,
	appgallery,
	appstore,
	icons,
	playmarket,
	qrcode,
} from "@/assets/images";
import Image from "next/image";
import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className="bg-gradient-to-b from-white to-blue-500">
				<div
					id="footer-above"
					className="container max-w-[1340px] mx-auto px-5">
					<div className="flex items-center justify-center gap-10 flex-wrap">
						<div>
							<Image src={aboveFooter} alt="" width={250} height={400} />
						</div>
						<div className="flex flex-col gap-1">
							<h4 className="text-[24px]">
								Ajoyib takliflar har doim <br /> yoningizda
							</h4>
							<p className="text-[14px]">
								alif shop ilovasi orqali buyurtma qiling, va qulay takliflar
								haqida <br /> hammadan tez biling
							</p>
							<div className="flex items-center gap-2">
								<Image src={playmarket} alt="" />
								<Image src={appstore} alt="" />
								<Image src={appgallery} alt="" />
							</div>
						</div>
						<div className="flex flex-col items-center">
							<Image src={qrcode} alt="" />
							<span className="flex items-center text-[14px]  text-center">
								Yuklab olish uchun <br /> kamerangizni QR kodga <br /> qarating
							</span>
						</div>
					</div>
				</div>
				<div className="bg-[#95BAFB]">
					<div className="container max-w-[1340px] mx-auto px-5 ">
						<div className="flex justify-between py-5 gap-2">
							<ul className="flex flex-col gap-2">
								<p className="text-[18px]">alif shop</p>
								<li>
									alifshop.uz - xaridorlarga tez va qulay tarzda turli xil
									tovarlarni sotib olish imkoniyatini beradigan marketpleys.
									alifshop.uz saytida smartfon, kompyuter, planshet, televizor,
									aqlli soat va boshqa ko'plab moslamalarni topishingiz mumkin.
								</li>
							</ul>

							<ul className="flex flex-col gap-2">
								<p className="text-[18px]">
									Smartfonlar muddatli to'lov <br /> asosida
								</p>
								<li>
									Bugungi kunda yuqori texnologiyalar davrida smartfon kundalik
									hayotimizning ajralmas qismiga aylandi. Zamonaviy
									telefonlarning ilovalari va texnik parametrlari tufayli
									smartfonlar ko'pincha bizning kompyuterlarimiz, kameralarimiz,
								</li>
							</ul>

							<ul className="flex flex-col gap-2">
								<p className="text-[18px]">
									Noutbuklar muddatli to'lov <br /> asosida
								</p>
								<li>
									Shaxsiy kompyuterlar bizga o'z ishimizni yuqori sifatli
									bajarish va shu bilan birga bo'sh vaqtimizni unumli o'tkazish
									imkoniyatini beradi. Masalan, noutbuk yordamida tezda
									dunyoning istalgan nuqtasidan, turli xil ishlarni
									bajarishingiz
								</li>
							</ul>

							<div className="">
								<ul>
									<p className="text-[18px]">
										Jihozlar muddatli to'lov asosida
									</p>
									<li>
										Bizning online do'konda elektronikadan tashqari, turli xil
										maishiy texnika mavjud: gaz plitalari, grill
										tayyorlagichlar, muzlatgichlar, kir yuvish mashinalari,
										dazmollar, konditsionerlar va boshqa ko'plab almashtirib
										bo'lmaydigan narsalar.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-slate-900 text-white hover:text-yellow-400 ">
				<div
					className="container max-w-[1340px] mx-auto py-5 px-5"
					id="footer-below">
					<div>
						<div className="flex justify-between py-2">
							<ul className="flex flex-col gap-2">
								<h6>Hujjatlar</h6>
								<li>
									<a>Sotish uchun umumiy shartlar</a>
								</li>
								<li>
									<a>Ofertalar arxivi</a>
								</li>
								<li>
									<a>Nizom</a>
								</li>
								<li>
									<a>Guvohnoma</a>
								</li>
							</ul>

							<ul className="flex flex-col gap-2">
								<h6>Servis</h6>
								<li>
									<a>Namoz vaqti</a>
								</li>
								<li>
									<a>Muddatli to'lov islomda</a>
								</li>
								<li>
									<a>alif shopda soting!</a>
								</li>
								<li>
									<a>Qaytarish</a>
								</li>
							</ul>

							<ul className="flex flex-col gap-2">
								<h6>Tovarlar katalogi</h6>
								<li>
									<a>Smartfonlar va telefonlar</a>
								</li>
								<li>
									<a>Gadjetlar</a>
								</li>
								<li>
									<a>Smartfonlar uchun aksessuarlar</a>
								</li>
								<li>
									<a>Tegishli tovarlar</a>
								</li>
								<li>
									<a>Soat va aksessuarlar</a>
								</li>
							</ul>

							<div className="">
								<ul>
									<h6>Biz ijtimiy axborot vositalarida</h6>
									<div
										className="flex gap-1"
										style={{
											padding: "20px 0 40px 0",
										}}>
										{icons.map((icon, i) => (
											<div key={i} className="flex items-center flex-row">
												<a className="hover:cursor-pointer">
													<img src={icon.src} alt="" />
												</a>
											</div>
										))}
									</div>
								</ul>

								<ul className="flex flex-col gap-2">
									<h6>Axborot xizmati</h6>
									<li>
										<a>@alifshop_uz</a>
									</li>
									<li>
										<a>+998 555 12 12 12</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div
						style={{
							borderBottom: "1px solid grey",
							padding: "40px 0",
						}}></div>
					<div className="text-[14px] py-3">2024 © alifshop.uz</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
