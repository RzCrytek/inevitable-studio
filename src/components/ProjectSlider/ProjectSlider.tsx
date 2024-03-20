import { useRef, useState, type FC } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './projectSlider.scss';

const initialWith = 750;

const ProjectSlider: FC = () => {
	const [showDescription, setShowDescription] = useState<number | null>(null);
	const [width, setWidth] = useState<number>(initialWith);
	const slickRef = useRef<any>(null);

	const settings = {
		className: 'slider-project',
		centerMode: true,
		infinite: true,
		centerPadding: '0rem',
		slidesToShow: 3,
		speed: 500,
		dots: false,
		// variableWidth: true,
		// adaptiveHeight: true,
		// focusOnSelect: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 3,
					infinite: true,
					dots: false,
					arrows: false,
				},
			},
		],
	};

	const onClick = (index: number) => {
		setShowDescription(index === showDescription ? null : index);
	};

	return (
		// <div style={{ width: width + 'px' }}>
		<Slider ref={slickRef} {...settings}>
			{[1, 2, 3, 4, 5, 6].map((index, item) => (
				<div className="box" onClick={() => onClick(index)} key={index}>
					<div className="box-content">
						{showDescription === index && (
							<div className="description">
								<p className="project-title">Cofaine.pe - Web y Redes Sociales</p>
								<p className="project-description">
									Cofaine nos encomendó la tarea de crear una web disruptiva y muy visual para presentar sus deliciosos cafés, su plan de
									suscripción; así como también, para vender directamente a través de este canal.
								</p>

								<a className="button" href="https://www.google.com.pe/" target="_blank">
									Link
								</a>
							</div>
						)}

						<picture>
							<img src="/images/project-1.png" width={250} alt="" />
						</picture>
					</div>
				</div>
			))}
		</Slider>
		// </div>
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
