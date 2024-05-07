import Feature1 from '../../public/images/features1.png'
import Feature2 from '../../public/images/features2.png'
import Feature3 from '../../public/images/features3.png'
import Image from 'next/image'
export default function Section4() {
	return (
		<div className="h-auto w-full flex flex-col md:flex-row justify-evenly items-center p-6">
			<div className="w-[340px] h-[85%] bg-gray-800 bg-opacity-60 rounded-lg m-6 p-6">
				<h1>TOKEN</h1>
				<p className="bg-white rounded-md text-black text-center w-102">COMING SOON</p>
				<h6 className='section4-element-description'>Empowering NFT Holders and Shaping AI Development</h6>
				<Image
					src={Feature1}
					alt="Feature1"
					width={300}
					height={39}
				/>
				<p>Launching in the second half of 2024, the CREON token represents first bridge between AI tools and blockchain technology, giving NFT holders and token users unprecedented access and influence.</p>
			</div>
			<div className="w-[340px] h-[85%] bg-gray-800 bg-opacity-60 rounded-lg m-6 p-6">
				<h1>TOKEN</h1>
				<p className="bg-white rounded-md text-black text-center w-102">COMING SOON</p>
				<h6 className='section4-element-description'>Empowering NFT Holders and Shaping AI Development</h6>
				<Image
					src={Feature2}
					alt="Feature1"
					width={300}
					height={39}
				/>
				<p>Launching in the second half of 2024, the CREON token represents first bridge between AI tools and blockchain technology, giving NFT holders and token users unprecedented access and influence.</p>
			</div>
			<div className="w-[340px] h-[85%] bg-gray-800 bg-opacity-60 rounded-lg m-6 p-6">
				<h1>TOKEN</h1>
				<p className="bg-white rounded-md text-black text-center w-102">COMING SOON</p>
				<h6 className='section4-element-description'>Empowering NFT Holders and Shaping AI Development</h6>
				<Image
					src={Feature3}
					alt="Feature1"
					width={300}
					height={39}
				/>
				<p>Launching in the second half of 2024, the CREON token represents first bridge between AI tools and blockchain technology, giving NFT holders and token users unprecedented access and influence.</p>
			</div>
		</div>
	)
}
