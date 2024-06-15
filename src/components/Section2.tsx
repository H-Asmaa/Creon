export default function Section2() {
	return (
		<div className="h-full w-full flex flex-col md:flex-col">
			<div className="w-full h-[30%] pl-20">
				<h1>Profiting Through</h1>
				<h2 className='pl-[25%]'>AI Innovation & Decentralization</h2>
			</div>
			<div className='flex flex-col md:flex-row h-full'>
				<div className=" w-full h-full pt-10 pl-20 pr-20 pb-10 md:w-[65%]">
					<video autoPlay loop muted>
					{/* <source src="https://raw.githubusercontent.com/H-Asmaa/Creon/main/public/videos/creon-logo.mp4" type="video/mp4" /> */}
					<source src="/videos/creon-logo.mp4" type="video/mp4" />
					</video>
				</div>
				<div className="flex flex-wrap w-full h-full flex-col md:flex-row pt-10 pl-20 pr-20 pb-10 border-l border-r border-gray-500 md:w-[30%]">
					<h4>The dynamic community driven business model of the future.</h4>
					<p>At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.</p>
				</div>
			</div>
		</div>
	)
}
