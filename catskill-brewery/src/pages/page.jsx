import React from 'react';
import '../css/home.css';
import navBackground from '../images/texture.png';

function Page() {
	return (
		<>
			<div className="mobile">
				<div style={{ flex: '1', textAlign: 'center' }}>
					<div
						style={{
							flex: '1',
							background: 'url(https://picsum.photos/id/1004/900/)',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							padding: '5em 7em',
						}}
					>
						<div style={{ color: '#f9f9f9' }}>
							<h2>HONEST HARD WORKING BEER</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam.
							</p>
						</div>
						<button className="dark">View our story</button>
					</div>
				</div>
				<div
					style={{
						flex: '1',
						background: 'url(https://picsum.photos/500)',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
					}}
				></div>
			</div>
			<div style={{ background: 'black', padding: '4em' }}>
				<div
					style={{
						background: `url(${navBackground})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						textAlign: 'center',
					}}
				>
					<h2 style={{ color: '#f9f9f9' }}>FEATURED BEERS (slider)</h2>
					<div>
						<img src="https://picsum.photos/200" alt="" />
					</div>
					<button className="dark" style={{ width: '200px', marginRight: '2em' }}>
						All beers
					</button>
					<button className="dark" style={{ width: '200px' }}>
						order online
					</button>
				</div>
			</div>
			<div style={{ textAlign: 'center', background: '#F5EFD5', padding: '4em' }}>
				<h2>EVENTS</h2>
				<div
					className="mobile"
					style={{ justifyContent: 'space-around', marginBottom: '2em' }}
				>
					<div className="event-box">
						<div style={{ flex: '1' }} />
						Lorem ipsum dolor sit amet, consectetur adipiscing
					</div>
					<div className="event-box">
						<div style={{ flex: '1' }} />
						Lorem ipsum dolor sit amet, consectetur adipiscing
					</div>
					<div className="event-box">
						<div style={{ flex: '1' }} />
						Lorem ipsum dolor sit amet, consectetur adipiscing
					</div>
				</div>

				<button className="light">See All</button>
			</div>
			<div
				style={{
					textAlign: 'center',
					background: '#F5EFD5',
				}}
				className="mobile"
			>
				<div
					style={{
						background: `url('https://picsum.photos/id/10/500')`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						textAlign: 'center',
						width: '200px',
						height: '200px',
						padding: '2em 5em',
						marginRight: '2em',
					}}
				>
					<h2 style={{ color: 'white' }}>FOOD TRUCK</h2>
					<button className="dark">Learn More</button>
				</div>
				<div
					style={{
						background: `url('https://picsum.photos/id/10/500')`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						textAlign: 'center',
						width: '200px',
						height: '200px',
						padding: '2em 5em',
					}}
				>
					<h2 style={{ color: 'white' }}>VISIT</h2>
					<button className="dark">Learn More</button>
				</div>
			</div>
			<div style={{ textAlign: 'center', background: '#F5EFD5', padding: '4em' }}>
				<h2>MERCHANDISE (slider)</h2>
				<div style={{ marginBottom: '2em' }}>
					<img src="https://picsum.photos/200" />
				</div>
				<button className="light">Shop All</button>
			</div>
			<div style={{ textAlign: 'center', background: '#F5EFD5', padding: '4em' }}>
				<h2>INSTAGRAM (rss feed)</h2>
				<div className="mobile" style={{ justifyContent: 'space-around' }}>
					<img src="https://picsum.photos/200" alt="" />
					<img src="https://picsum.photos/200" alt="" />
					<img src="https://picsum.photos/200" alt="" />
					<img src="https://picsum.photos/200" alt="" />
				</div>
			</div>
		</>
	);
}

export default Page;
