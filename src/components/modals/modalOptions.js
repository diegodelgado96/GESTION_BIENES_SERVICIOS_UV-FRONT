import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { assignObject } from '../../services/report.services'
import { assignReqObject } from '../../services/request.services'
import { CancelAceptModal } from './cancelAceptModal'
import { Col, Container, Modal, Row } from 'react-bootstrap'
import { DivForm, LabelForm, ModalFormProvider, PButton2, SButton2, StyledForm, StyledFormSelect } from '../tools/styleContent'
import { PropTypes } from 'prop-types'
import { UseRefreshToken } from '../../hooks/useRefreshToken'
import { Spinner } from '../tools/spinner'
import { useUser } from '../../hooks/useUser'
import { useNavigate } from 'react-router'

export const ModalOptions = (props) => {

	useEffect(() => {
		if(props.data.length > 0) {
			setEstado(props.data[0].estado)
			setEtapa(props.data[0].etapa)
			setUrgencia(props.data[0].urgencia)
		}
	}, [props.data])

	const {user} = useUser()
	const nav = useNavigate()
	const refreshToken = UseRefreshToken()

	const [showAlert, setShowAlert] = useState(false)
	const [formError, setFormError] = useState(false)
	const [estado, setEstado] = useState('')
	const [etapa, setEtapa] = useState('')
	const [urgencia, setUrgencia] = useState('')
	const [show, setShow] = useState(false)
	const [showSpinner, setShowSpinner] = useState(false)
	const [title, setTitle] = useState('')
	const [message, setMessage] = useState('')
	const [subTitle, setSubTitle] = useState('')

	const handleCloseModal = () => { setShow(false) }

	const handleConfirmSubmit = (text) => {
		if (text === 'Cancel') {
			props.handleCloseModal()
		}

		if (text === 'Acept') {
			window.scrollTo({ top: 0, behavior: 'smooth' })
			props.handleCloseModal()
			props.handleConfirmSubmit(text)
		}

		if (text === 'Error') {
			window.scrollTo({ top: 0, behavior: 'smooth' })
			props.handleCloseModal()
			props.handleConfirmSubmit(text)
		}
		setShow(false)
	}

	const edit = async (event) => {
		setShowSpinner(true)
		event.preventDefault()
		if (
			!estado || !etapa || !estado) {
			setShowAlert(true)
			setFormError(true)
			window.scrollTo({ top: 0, behavior: 'smooth' })
			setShowSpinner(false)
			return
		}

		try {

			let respond = {}

			if (props.data[0].idReporte) {
				respond = await assignObject(user.idUsuario, user.token, {estado, etapa}, props.data[0].idReporte)
			}

			if (props.data[0].idSolicitud) {
				respond = await assignReqObject(user.idUsuario, user.token, {estado, etapa, urgencia}, props.data[0].idSolicitud)
			}
			
			setTitle('Solicitud Actualizada')
			setMessage('')
			setSubTitle('La solicitud se actualizó correctamente')
			setShow(true)
			await refreshToken.refreshToken(respond)
		}

		catch (e) {
			console.log(e)
			setTitle('Error')
			setSubTitle('')
			console.log(e)
			if (e.response?.data?.error?.name === 'TokenExpiredError' || e.response?.data?.error?.name === 'JsonWebTokenError') {
				window.localStorage.removeItem('loggedAppUser')
				nav('/')
			}
			setMessage('No puedes realizar esta acción.')
		}
		//setShow(true)
		setShowSpinner(false)

	}

	const showCancelModal = (event) => {
		event.preventDefault()
		setShow(true)
		setTitle('Cancelar Edición')
		setSubTitle('')
		setMessage('¿Estás seguro de que deseas cancelar el registro?')
	}

	return (
		<ModalFormProvider show={props.showModal} onHide={props.handleCloseModal} className='modalAcept'>
			<Modal.Header>
				<Modal.Title>Editar</Modal.Title>
			</Modal.Header>
			<Modal.Body style={{ height: 'auto !important' }} className='hla'>
				{/* <NewActionForm provider={props.provider} request={props.request} handleConfirm={handleConfirm} close={close} idProvider={props.idProvider} handleCloseModal={handleCloseModal} newActionR={newActionR}/> */}
				<DivForm className='newReportContent'>
					<Col xs={12} className={'formBackground'}>
						<Container>
							<StyledForm onSubmit={edit}>
								{
									showAlert ? (
										<Alert
											variant="danger"
											onClose={() => setShowAlert(false)}
											dismissible
											className='alert-center'
										>
											<p>
												Por favor diligencie todos los campos del formulario.
											</p>
										</Alert>
									) :
										(<></>)
								}
								<Row xs={12}>
									<Col xs={12} md={4} className={`${!estado && formError ? 'errorForm' : ''}`}>
										<Col xs={12}>
											<LabelForm>Estado:</LabelForm>
										</Col>
										<Col xs={12}>
											<StyledFormSelect
												aria-label="Default select example"
												value={estado}
												name='estado'
												placeholder='tipo'
												onChange={({ target }) => setEstado(target.value)}
											>
												<option value="SUPERVISION">Supervision</option>
												<option value="APROBADO">Aprobado</option>
												<option value="RECHAZADO">Rechazado</option>
											</StyledFormSelect>
										</Col>
									</Col>

									<Col xs={12} md={4} className={`${!etapa && formError ? 'errorForm' : ''}`}>
										<Col xs={12}>
											<LabelForm>Etapa:</LabelForm>
										</Col>
										<Col xs={12}>
											<StyledFormSelect
												aria-label="Default select example"
												value={etapa}
												name='etapa'
												placeholder='etapa'
												onChange={({ target }) => setEtapa(target.value)}
											>
												<option value="EN PROCESO">En proceso</option>
												<option value="TERMINADO">Terminado</option>
												<option value="CANCELADO">Cancelado</option>
											</StyledFormSelect>
										</Col>
									</Col>


									<Col xs={12} md={4} className={`${!urgencia && formError ? 'errorForm' : ''}`}>
										<Col xs={12}>
											<LabelForm>Urgencia:</LabelForm>
										</Col>
										<Col xs={12}>
											{
												urgencia ? (
													<StyledFormSelect
														aria-label="Default select example"
														value={urgencia}
														name='urgencia'
														placeholder='urgencia'
														onChange={({ target }) => setUrgencia(target.value)}
													>
														<option value="URGENTE">Urgente</option>
														<option value="NOURGENTE">No urgente</option>

													</StyledFormSelect>
												) : (
													<p>No Aplica</p>
												)
											}

										</Col>
									</Col>
								</Row>
								<Row xs={12}>
									<Col xs={0} lg={1}>
									</Col>
									<Col xs={12} lg={5}>
										<SButton2 onClick={showCancelModal}>Cancelar</SButton2>
									</Col>
									<Col xs={12} lg={5}>
										<PButton2>Enviar</PButton2>
									</Col>
									<Col xs={0} lg={1}>
									</Col>
								</Row>
							</StyledForm>
						</Container>
					</Col >
					<CancelAceptModal
						showModal={show}
						handleCloseModal={handleCloseModal}
						title={title}
						message={message}
						handleConfirmSubmit={handleConfirmSubmit}
						subTitle={subTitle}
					/>
					{
						showSpinner ? (
							<div className='divSpinner'>
								<Spinner />
							</div>
						) :
							(
								<></>
							)
					}

				</DivForm >
			</Modal.Body>

		</ModalFormProvider>
	)
}

ModalOptions.propTypes = {
	showModal: PropTypes.bool.isRequired,
	handleCloseModal: PropTypes.func.isRequired,
	handleConfirmSubmit: PropTypes.func.isRequired,
	data: PropTypes.array.isRequired,
}
