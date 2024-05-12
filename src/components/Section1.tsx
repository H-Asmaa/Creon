
export default function Section1() {
	return (
		<div className="h-full w-full flex flex-col md:flex-row">
			<div className=" w-full h-auto pt-10 pl-20 pr-20 pb-10">
				<h1>creon pass nft</h1>
				<hr className='p-4 border-gray-700' />
				<h6>The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools</h6>
				<section>
					<p className='border border-gray-700 p-2 w-[fit-content] mb-2'>Pre-launch investment opportunities for upcoming AI projects</p>
					<p className='border border-gray-700 p-2 w-[fit-content] mb-2'>Free and early access to Creon built AI projects</p>
					<p className='border border-gray-700 p-2 w-[fit-content] mb-2'>Higher allocation limits on the Creon AI Launchpad</p>
					<p className='border border-gray-700 p-2 w-[fit-content] mb-2'>Revenue share distribution from Creon built AI projects</p>
				</section>
				<button className='w-[400px] h-[50px] bg-gradient-to-r from-blue-500 to-purple-700'>
					Buy Creon Pass
				</button>
			</div>
			<div className="flex flex-wrap  w-full h-auto flex-col md:flex-row">
				<video className="z-0 h-full pt-56.25% overflow-hidden" autoPlay loop muted>
					<source src="https://raw.githubusercontent.com/H-Asmaa/Creon/main/public/videos/nft-video.mp4" type="video/mp4" />
				</video>
			</div>
		</div>
	)
}
