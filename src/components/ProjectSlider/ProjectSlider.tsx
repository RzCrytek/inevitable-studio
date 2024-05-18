import { useState, type FC } from 'react';
import { Image } from 'astro:assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './projectSlider.scss';
import { projects } from './data';

const ProjectSlider: FC = () => {
	const [showDescription, setShowDescription] = useState<number | null>(null);

	const onClick = (index: number) => {
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
			{projects.map((project) => (
				<SwiperSlide
					className="box"
					style={{ backgroundImage: `url(${project.image})` }}
					onClick={() => onClick(project.id)}
					key={project.id}
				>
					{showDescription === project.id && (
						<div className="box-content">
							<>
								<div className="description">
									<p className="project-title">{project.title}</p>
									<p className="project-description">{project.description}</p>

									{/* <a className="button" href="https://www.google.com.pe/" target="_blank">
										Link
									</a> */}
								</div>

								<picture>
									<img className="image" src={project.image} alt={project.title} />
								</picture>
							</>
						</div>
					)}
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
