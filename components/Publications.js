import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import { ownerName } from '../config/config';

export const Publications = ({ title, cards }) => {
	return (
		<div id="publications" className="bg-light py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold mb-5">{title}</h1>
				<div className="d-flex flex-column">
					{cards.map((value, index) => (
						<PublicationCard
							key={index}
							title={value.title}
							description={value.description}
							image={value.image}
							icons={value.icons}
							status={value.status}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export const PublicationCard = ({ title, description, image, icons, status }) => {
	const imageUrl = image || '/black.svg';
	
	// Render description with owner name bolded
	const renderDescription = () => {
		if (description.includes(ownerName)) {
			const parts = description.split(ownerName);
			return (
				<>
					{parts[0]}
					<strong className="text-primary">{ownerName}</strong>
					{parts.slice(1).join(ownerName)}
				</>
			);
		}
		return description;
	};
	
	return (
		<div className="publication-card mb-5 p-4 rounded bg-white">
			<div className="row g-4">
				{/* Image Column */}
				<div className="col-12 col-md-3 d-flex align-items-center justify-content-center">
					<div className="publication-image-container">
						<img 
							src={imageUrl} 
							alt={title}
							className="publication-image"
						/>
					</div>
				</div>
				
				{/* Content Column */}
				<div className="col-12 col-md-9">
					<div className="publication-content">
						<h3 className="text-primary fw-bold mb-2">{title}</h3>
						
						<p className="mb-3 publication-description">
							{renderDescription()}
						</p>
						
						{status && (
							<p className="text-muted small mb-3 publication-status">
								{status}
							</p>
						)}
						
						{/* Links Section */}
						<div className="publication-links">
							{icons && icons.length > 0 && icons.map((value, index) => (
								value.link && (
									<Link key={index} href={value.link}>
										<a 
											target="_blank" 
											rel="noreferrer"
											className="publication-link-button"
											title={value.title}
										>
											<FontAwesomeIcon icon={value.icon} className="me-2" />
											{value.title}
										</a>
									</Link>
								)
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
