export default function Hero() {
	return (
		<div className="w-full h-full flex flex-col">
			<div className="z-0 pt-56.25% overflow-hidden" >
				<video autoPlay loop muted>
					<source src="https://raw.githubusercontent.com/H-Asmaa/Creon/main/public/videos/main-background-video.mp4" type="video/mp4" />
				</video>
			</div>
			<div className='absolute top-0 left-0 h-full w-full bg-gradient-to-br from-black via-[#3D8BFF] to-[#d819d5] mix-blend-soft-light transform rotate-180 md:h-[120%]' />
			<div className="absolute pl-20 pt-[20%] z-20 w-full flex flex-col justify-end md:pt-[25%]">
				<h1 className="h1">The worlds first platform for Tokenizing AI blockchain projects</h1>
				<h5 className="">Hold the Creon Pass NFT and earn passive income from AI Tools</h5>
			</div>
		</div>
	);
}
