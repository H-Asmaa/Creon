import market1 from '../../public/images/market1.png'
import market2 from '../../public/images/market2.png'
import market3 from '../../public/images/market3.png'
import Image from 'next/image'

export default function Section5() {
	return (
		<div className='w-full h-full'>
			<video className="z-0 absolute pt-56.25% overflow-hidden" autoPlay loop muted>
				{/* <source src="https://raw.githubusercontent.com/H-Asmaa/Creon/main/public/videos/roadmap-video.mp4" type="video/mp4" /> */}
				<source src="/videos/roadmap-video.mp4" type="video/mp4" />
			</video>
			<div className="absolute left-0 h-full w-full bg-gradient-to-t from-black via-transparent to-black md:h-[120%]" />				<div className=' flex flex-col justify-center items-center w-full h-auto'>
				<div className='relative flex flex-col md:flex-row bg-gray-800 bg-opacity-60 rounded-lg w-[70%] h-[30%] m-4'>
					<div className='p-6'>
						<p className='h3'>AI Prospects, Market Size, and Development Pace</p>
						<p>The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.</p>
					</div>
					<div>
						<Image className='h-[100%]'
							src={market1}
							alt='market image'
							width={1200}
						/>
					</div>
				</div>
				<div className='relative flex flex-col md:flex-row bg-gray-800 bg-opacity-60 rounded-lg w-[70%] h-[30%] m-4'>
					<div className='p-6'>
						<p className='h3'>AI Prospects, Market Size, and Development Pace</p>
						<p>The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.</p>
					</div>
					<div>
						<Image className='h-[100%]'
							src={market2}
							alt='market image'
							width={1200}
						/>
					</div>
				</div>
				<div className='relative flex flex-col md:flex-row bg-gray-800 bg-opacity-60 rounded-lg w-[70%] h-[30%] m-4'>
					<div className='p-6'>
						<p className='h3'>AI Prospects, Market Size, and Development Pace</p>
						<p>The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.</p>
					</div>
					<div >
						<Image className='h-[100%]'
							src={market3}
							alt='market image'
							width={1200}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
