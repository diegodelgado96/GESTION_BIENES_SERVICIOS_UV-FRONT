import React, { useState } from 'react'
import { Col, Row, Modal } from 'react-bootstrap'
import { ColGalery, ColImgDoc, ColWhite, NotAction } from '../tools/styleContent'
import { PropTypes } from 'prop-types'

export const ImagesReport = (props) => {
	const [modalImage, setModalImage] = useState(null)
	const images = props.data.images

	const openModal = (img) => {
		setModalImage(img)
	}

	const closeModal = () => {
		setModalImage(null)
	}

	return (
		<>
			<ColWhite xs={12} lg={4}>
				<div>
					<Row xs={12}>
						{images.length > 0 ? (
							props.data.tipo === 'Reporte' ? (
								images.map((img) => {
									console.log(img)

									return (
										<ColGalery xs={4} key={img.nombre} onClick={() => openModal(img)}>
											<img src={img.contenido} alt={img.nombre} />
										</ColGalery>
									)
								})) :
								(
									images.map((img) => {
										console.log(img)

										return (
											<ColImgDoc xs={12} style={{ height: '100% !important'}} key={img.nombre} onClick={() => openModal(img)}>
												<img src={img.contenido} alt={img.nombre} />
											</ColImgDoc>
										)
									})
								)
						) : (
							<Col xs={12}>
								<svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 122 122" fill="none">
								</svg>
								<NotAction></NotAction>
							</Col>
						)}
					</Row>
				</div>
			</ColWhite>

			{/* Modal for displaying enlarged image */}
			<Modal show={!!modalImage} onHide={closeModal}>
				<Modal.Header closeButton>
					{/* Add any additional modal header content here */}
				</Modal.Header>
				<Modal.Body>
					{modalImage && <img src={modalImage.contenido} style={{ width: '100%', height: 'auto' }} alt={modalImage.nombre} />}
				</Modal.Body>
			</Modal>
		</>
	)
}

ImagesReport.propTypes = {
	data: PropTypes.object.isRequired, // title debe ser una cadena y es requerido // className es opcional y debe ser una cadena si está presente
}
