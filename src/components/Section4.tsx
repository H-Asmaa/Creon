import Feature1 from '../../public/images/features1.png'
import Feature2 from '../../public/images/features2.png'
import Feature3 from '../../public/images/features3.png'
import Image from 'next/image'
export default function Section4() {
	return (
		<div className="section4">
			<div className="section4-element">
				<h1>TOKEN</h1>
				<p className='section4-element-coming-soon'>COMING SOON</p>
				<p className='section4-element-description'>Empowering NFT Holders and Shaping AI Development</p>
				<Image className='section4-element-img'
					src={Feature1}
					alt="Feature1"
					width={140}
					height={39}
				/>
				<p className='section4-element-paragraph'>Launching in the second half of 2024, the CREON token represents first bridge between AI tools and blockchain technology, giving NFT holders and token users unprecedented access and influence.</p>
			</div>
			<div className="section4-element">
				<h1>TOKEN</h1>
				<p className='section4-element-coming-soon'>COMING SOON</p>
				<p className='section4-element-description'>Empowering NFT Holders and Shaping AI Development</p>
				<Image className='section4-element-img'
					src={Feature2}
					alt="Feature1"
					width={140}
					height={39}
				/>
				<p className='section4-element-paragraph'>Launching in the second half of 2024, the CREON token represents first bridge between AI tools and blockchain technology, giving NFT holders and token users unprecedented access and influence.</p>
			</div>
			<div className="section4-element">
				<h1>TOKEN</h1>
				<p className='section4-element-coming-soon'>COMING SOON</p>
				<p className='section4-element-description'>Empowering NFT Holders and Shaping AI Development</p>
				<Image className='section4-element-img'
					src={Feature3}
					alt="Feature1"
					width={140}
					height={39}
				/>
				<p className='section4-element-paragraph'>Launching in the second half of 2024, the CREON token represents first bridge between AI tools and blockchain technology, giving NFT holders and token users unprecedented access and influence.</p>
			</div>
		</div>
	)
}
