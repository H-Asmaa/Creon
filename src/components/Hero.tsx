export default function Hero() {
	return (
		<div className="absolute top-0 h-full">
			<video className="z-0 h-full" autoPlay loop muted>
				<source src="/videos/main-background-video.mp4" type="video/mp4" />
			</video>
			<div className="z-20 w-full h-full absolute top-0 bottom-0" style={{
				background: 'linear-gradient(180deg, #000000 0%, #000000 56%, #3D8BFF 85%, #AB23FF 100%, #000000 100%)',
				mixBlendMode: 'soft-light',
				transform: 'rotate(-180deg)',
			}}>
			</div>
			<div>
				<h1 className="absolute text-white uppercase font-normal" style={{ fontFamily: 'Monument Extended', fontWeight: 400, fontSize: '50px', top: '60%', paddingLeft: '10%', paddingRight: '27%', lineHeight: '60px'}}>
					The worlds first platform for Tokenizing AI blockchain projects
				</h1>
				<p className="Hero-section-paragraph">
					Hold the Creon Pass NFT and earn passive income from AI Tools
				</p>
			</div>
		</div>
	);
}
