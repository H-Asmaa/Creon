import market1 from '../../public/images/market1.png'
import market2 from '../../public/images/market2.png'
import market3 from '../../public/images/market3.png'
import Image from 'next/image'
export default function Section5() {
	return (
		<div className="section5 bottom-0">
			<video className="z-0 h-full w-full bottom-0" autoPlay loop muted style={{ position: 'absolute', filter: 'brightness(50%)' }}>
				<source src="/videos/roadmap-video.mp4" type="video/mp4" />
			</video>
			<div style={{
				position: 'absolute',
				top: 0,
				left: 0,
				height: '100%',
				width: '100%',
				background: 'linear-gradient(174.64deg, #3D8BFF 4.29%, #AB23FF 95.71%)',
				mixBlendMode: 'soft-light',
				transform: 'rotate(-180deg)',
			}} />
			<div style={{
				position: 'absolute',
				top: 0,
				bottom: 0,
				height: '100%',
				width: '100%',
				background: 'linear-gradient(rgb(0 0 0), rgba(0, 0, 0, 0))',
			}} />
			<div className='section5-element'>
				<div className='section5-element-text'>
					<h3>AI Prospects, Market Size, and Development Pace</h3>
					<p>The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.</p>
				</div>
				<Image className='section5-element-img'
					src={market1}
					alt='market image'
				/>
			</div>
			<div className='section5-element'>
				<div className='section5-element-text'>
					<h3>AI Prospects, Market Size, and Development Pace</h3>
					<p>The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.</p>
				</div>
				<Image className='section5-element-img'
					src={market2}
					alt='market image'
				/>
			</div>
			<div className='section5-element'>
				<div className='section5-element-text'>
					<h3>AI Prospects, Market Size, and Development Pace</h3>
					<p>The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.</p>
				</div>
				<Image className='section5-element-img'
					src={market3}
					alt='market image'
				/>
			</div>
		</div>
	)
}
