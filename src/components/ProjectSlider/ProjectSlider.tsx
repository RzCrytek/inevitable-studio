import type { FC } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './projectSlider.scss';

const ProjectSlider: FC = () => {
	const settings = {
		className: 'slider-project',
		centerMode: true,
		infinite: true,
		centerPadding: '0rem',
		slidesToShow: 3,
		speed: 500,
		dots: true,
		variableWidth: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 1,
					infinite: true,
					dots: true,
					arrows: false,
				},
			},
		],
	};

	const onClick = () => {
		console.log('ASDSAD');
	};

	return (
		<Slider {...settings}>
			{[1, 2, 3, 4, 5, 6].map((index, item) => (
				<div className="box" onClick={onClick} key={index}>
					<picture>
						<img src="/images/project-1.png" width={250} alt="" />
					</picture>
					{/* <p>Texto</p> */}
				</div>
			))}
		</Slider>
	);
};

const NextArrow = (props: any): JSX.Element => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<img src="/icons/arrow-next.svg" width="100%" alt="" />
		</div>
	);
};

const PrevArrow = (props: any): JSX.Element => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<img src="/icons/arrow-prev.svg" width="100%" alt="" />
		</div>
	);
};

export default ProjectSlider;
