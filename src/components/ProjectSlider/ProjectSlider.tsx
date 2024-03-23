import { useState, type FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './projectSlider.scss';

const ProjectSlider: FC = () => {
	const [showDescription, setShowDescription] = useState<number | null>(null);

	const onClick = (index: number) => {
		console.log('demo', index);
		setShowDescription(index === showDescription ? null : index);
	};

	return (
		<Swiper
			centeredSlides={true}
			spaceBetween={10}
			pagination={{
				clickable: true,
			}}
			slidesPerView={1}
			loop={true}
			navigation={true}
			breakpoints={{
				600: {
					slidesPerView: 3,
				},
			}}
			modules={[Pagination]}
			className="slider-project"
		>
			{[1, 2, 3, 4, 5, 6].map((index, item) => (
				<SwiperSlide className="box" onClick={() => onClick(index)} key={index}>
					<div className="box-content">
						{showDescription === index && (
							<>
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

								<picture>
									<img className="image" src="/images/default.png" alt="" />
								</picture>
							</>
						)}
					</div>
				</SwiperSlide>
			))}
		</Swiper>
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
