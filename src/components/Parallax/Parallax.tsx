import { useEffect, useRef } from 'react';
import simpleParallax from 'simple-parallax-js';
import './parallax.scss';

const Parallax = () => {
	const imgRef = useRef(null);

	useEffect(() => {
		if (imgRef.current) {
			new simpleParallax(imgRef.current, {
				scale: 2.5,
				orientation: 'up',
			});
		}
	}, []);

	return (
		<div id="parallax" className="parallax absolute">
			<div className="bg absolute bg-parallax" data-depth="0.2"></div>
			<div ref={imgRef} className="hand-human absolute bg-parallax" data-depth="0.6"></div>
			<div className="hand-robot absolute bg-parallaxx"></div>
			<div className="shadow absolute"></div>
		</div>
	);
};

export default Parallax;
