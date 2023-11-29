import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { CancelAceptModal } from '../modals/cancelAceptModal'
import { CheckboxGroup } from '../tools/checkBoxGroup'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { newProvider, pathProvider } from '../../services/provider.services'
import { DivForm, LabelForm, InputForm, PButton2, StyledForm, StyledFormSelect, SButton, SButton2, TitleReport } from '../tools/styleContent'
import { DropZone } from '../tools/dropZone'
import { PropTypes } from 'prop-types'
import { Spinner } from '../tools/spinner'
//import { useNavigate } from 'react-router'
import { UseRefreshToken } from '../../hooks/useRefreshToken'
//import { UseLogout } from '../../hooks/useLogout'
import { useUser } from '../../hooks/useUser'

export const ProviderForm = (props) => {

	//const logout = UseLogout()
	//const nav = useNavigate()
	const user = useUser()
	const refreshToken = UseRefreshToken()
	setTimeout(() => {

	}, 3000)

	const [showAlert, setShowAlert] = useState(false)
	const [formError, setFormError] = useState(false)
	const [show, setShow] = useState(false)
	const [title, setTitle] = useState('')
	const [subTitle, setSubTitle] = useState('')
	const [message, setMessage] = useState('')
	const [showSpinner, setShowSpinner] = useState(false)
	const [tipoProveedor, setTipoProveedor] = useState('')
	const [id, setId] = useState('')
	const [dv, setDv] = useState('')
	const [titular, setTitular] = useState('')
	const [empresa, setEmpresa] = useState('')
	const [diereccion, setDireccion] = useState('')
	const [telefono, setTelefono] = useState('')
	const [correo, setCorreo] = useState('')
	const [doc, setDoc] = useState([])
	const [fechaInicio, setFechaInicio] = useState('')
	const [fechaFin, setFechaFin] = useState('')
	const [descripcion, setDescripcion] = useState('')
	const [listOptions, setListOptions] = useState([])
	const [newOption, setNewOption] = useState('')
	const [services, setServices] = useState([])

	const handleCloseModal = () => { setShow(false) }

	useEffect(() => {
		if (props.type === 'Editar') {
			const data = JSON.parse(props.idProvider)
			console.log(data)
			setTipoProveedor(data.tipoProveedoor)
			setId(data.idProveedor)
			setDv(data.digito)
			setTitular(data.nombreTitular)
			setEmpresa(data.nombreEmpresa)
			setDireccion(data.direccion)
			setTelefono(data.telefono)
			setCorreo(data.correo)
			setFechaInicio(getDate(data.fechaInicioContrato))
			setFechaFin(getDate(data.fechaFinContrato))
			const info = data.descripcionServicios.split('//')
			setDescripcion(info[1])
			const listServices = info[0].split(';').filter(value => value != '')
			console.log(data.descripcionServicios)
			setListOptions(listServices)
			//setServices(listServices)
		}
	}, [])

	const createProvider = async (event) => {
		setShowSpinner(true)
		event.preventDefault()
		if (
			!tipoProveedor || !id || !dv || !titular || (tipoProveedor === 'EMPRESA' && !empresa) ||
			!diereccion || !telefono || !correo || !descripcion || services.length == 0 || !fechaFin || !fechaInicio) {
			setShowAlert(true)
			setFormError(true)
			window.scrollTo({ top: 0, behavior: 'smooth' })
			setShowSpinner(false)
			return
		}

		try {

			if (props.type === 'Editar') {
				console.log('aqui')
				const respond = await pathProvider(
					user.user.idUsuario,
					user.user.token,
					{
						tipoProveedor,
						idProveedor: id,
						dv,
						titular,
						empresa,
						diereccion,
						telefono,
						correo,
						doc,
						fechaInicio,
						fechaFin,
						descripcion,
						services
					}
				)
				setTitle('Proveedor Actualizado')
				setMessage('')
				setSubTitle('El proveedor fue actualizado correctamente')
				await refreshToken.refreshToken(respond)
			}
			else {
				const respond = await newProvider(
					user.user.token,
					user.user.idUsuario,
					tipoProveedor,
					id,
					dv,
					titular,
					empresa,
					diereccion,
					telefono,
					correo,
					doc,
					fechaInicio,
					fechaFin,
					descripcion,
					services,
				)
				setTitle('Proveedor registrado')
				setMessage('')
				setSubTitle('El proveedor fue registrado correctamente')
				await refreshToken.refreshToken(respond)
			}
		}
		catch (e) {
			console.log(e)
			setTitle('Error')
			setSubTitle('')
			console.log(e)
			if (e.response?.data?.error?.name === 'TokenExpiredError' || e.response?.data?.error?.name === 'JsonWebTokenError') {
				//logout.logOut()
				//window.localStorage.removeItem('loggedAppUser')
				//nav('/')
			}
			setMessage('No puedes realizar esta acción.')
		}
		setShow(true)
		setShowSpinner(false)
	}

	const loadFile = (list) => {
		setDoc((prevList) => [...prevList, ...list])
	}

	const showCancelModal = (event) => {
		event.preventDefault()
		setShow(true)
		setTitle('Cancelar Reporte')
		setSubTitle('')
		setMessage('¿Estás seguro de que deseas cancelar el registro?')
	}

	const handleConfirmSubmit = (text) => {
		if (text === 'Cancel') {
			props.handleCloseModal()
		}

		if (text === 'Acept') {
			window.scrollTo({ top: 0, behavior: 'smooth' })
			props.handleCloseModal()
			props.handleConfirm(text)
		}

		if (text === 'Error') {
			window.scrollTo({ top: 0, behavior: 'smooth' })
			props.handleCloseModal()
			props.handleConfirm(text)
		}
	}

	const formatInput = (str) => {
		const currentValue = str.replace(/[^0-9]/g, '')

		setId(currentValue)
	}

	const formatInputDv = (str) => {
		const currentValue = str.replace(/[^0-9]/g, '').slice(0, 1)

		setDv(currentValue)
	}

	const deleteDoc = (e) => {
		e.preventDefault()
		setDoc([])
	}

	const addOption = (e) => {
		e.preventDefault()
		if (newOption)
			setListOptions((prevList) => [...prevList, newOption])
		setNewOption('')
	}

	const listSelected = (lst) => {
		setServices(lst)
	}

	const getDate = (dateStr) => {
		const fecha = new Date(dateStr)

		const dia = fecha.getDate()
		const mes = fecha.getMonth() + 1
		const anio = fecha.getFullYear()

		return `${anio}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`
	}

	return (
		<div>
			<DivForm className='newReportContent'>
				<Col xs={12} className={'formBackground'}>
					<Container>
						<StyledForm onSubmit={createProvider}>
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
								<Col xs={12} md={6} className={`${!tipoProveedor && formError ? 'errorForm' : ''}`}>
									<Col xs={12}>
										<LabelForm>Tipo de Proveedor</LabelForm>
									</Col>
									<Col xs={12}>
										<StyledFormSelect
											aria-label="Default select example"
											value={tipoProveedor}
											name='tipoProveedor'
											placeholder='tipo'
											onChange={({ target }) => !props.type != 'Editar' && setTipoProveedor(target.value)}
											disabled={!(props.type != 'Editar')}
										>
											<option></option>
											<option value="NATURAL">Natural</option>
											<option value="EMPRESA">Empresa</option>
										</StyledFormSelect>
									</Col>
								</Col>
								<Col xs={12} md={4} className={`${!id && formError ? 'errorForm' : ''}`}>
									<Col xs={12}>
										<LabelForm>Identificación (CC o NIT)</LabelForm>
									</Col>
									<Col xs={12}>
										<InputForm
											type='text'
											value={id}
											name='id'
											placeholder=''
											onChange={({ target }) => !props.type != 'Editar' && formatInput(target.value)}
											disabled={!(props.type != 'Editar')}
										/>
									</Col>
								</Col>
								<Col xs={4} md={2} className={`${!dv && formError ? 'errorForm' : ''}`}>
									<Col xs={12}>
										<LabelForm>DV</LabelForm>
									</Col>
									<Col xs={12}>
										<InputForm
											type='number'
											value={dv}
											name='DV'
											placeholder=''
											onChange={({ target }) => formatInputDv(target.value)}
										/>
									</Col>
								</Col>
							</Row>
							<Row xs={12}>
								<Col xs={12} md={6} className={`${!titular && formError ? 'errorForm' : ''}`}>
									<Col xs={12}>
										<LabelForm>Nombre del Titular</LabelForm>
									</Col>
									<Col xs={12}>
										<InputForm
											type='text'
											value={titular}
											name='titular'
											placeholder=''
											onChange={({ target }) => setTitular(target.value)}
										/>
									</Col>
								</Col>
								<Col xs={12} md={6} className={`${!empresa && formError ? 'errorForm' : ''}`}>
									{
										tipoProveedor === 'EMPRESA' ? (
											<>
												<Col xs={12}>
													<LabelForm>Nombre de la Empresa</LabelForm>
												</Col>
												<Col xs={12}>
													<InputForm
														type='text'
														value={empresa}
														name='empresa'
														placeholder=''
														onChange={({ target }) => setEmpresa(target.value)}
													/>
												</Col>
											</>
										) : (
											<></>
										)
									}
								</Col>
							</Row>
							<Row xs={12}>
								<Col xs={12} md={6} className={`${!diereccion && formError ? 'errorForm' : ''}`}>
									<Col xs={12}>
										<LabelForm>Dierección</LabelForm>
									</Col>
									<Col xs={12}>
										<InputForm
											type='text'
											value={diereccion}
											name='diereccion'
											placeholder=''
											onChange={({ target }) => setDireccion(target.value)}
										/>
									</Col>
								</Col>
								<Col xs={12} md={6} className={`${!telefono && formError ? 'errorForm' : ''}`}>
									<Col xs={12}>
										<LabelForm>Teléfono de contacto</LabelForm>
									</Col>
									<Col xs={12}>
										<InputForm
											type='text'
											value={telefono}
											name='telefono'
											placeholder=''
											onChange={({ target }) => setTelefono(target.value)}
										/>
									</Col>
								</Col>
							</Row>
							<Row xs={12}>
								<Col xs={12} md={6} className={`${!correo && formError ? 'errorForm' : ''}`}>
									<Col xs={12}>
										<LabelForm>Correo electrónico</LabelForm>
									</Col>
									<Col xs={12}>
										<InputForm
											type='text'
											value={correo}
											name='correo'
											placeholder=''
											onChange={({ target }) => setCorreo(target.value)}
										/>
									</Col>
								</Col>
							</Row>
							<Row xs={12}>
								<Col xs={12} md={6}>
									<Col xs={12}>
										<LabelForm>Agregar Contrato (Opcional)</LabelForm>
									</Col>
									{
										doc.length > 0 ? (
											<>
												<TitleReport>Ya cargaste el contrato</TitleReport>
												<SButton onClick={deleteDoc}>
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<path d="M7 21C6.45 21 5.97933 20.8043 5.588 20.413C5.19667 20.0217 5.00067 19.5507 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8043 20.021 18.413 20.413C18.0217 20.805 17.5507 21.0007 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#E40613" />
													</svg>
												</SButton>
											</>
										) : (
											<Col xs={12}>
												<DropZone loadFile={loadFile} type={'.pdf, .doc, .docx'} />
											</Col>
										)
									}
								</Col>
								<Col xs={12} md={6}>
									<Row xs={12} className={`${!fechaInicio && formError ? 'errorForm' : ''}`}>
										<Col xs={12}>
											<LabelForm>Fecha inicio</LabelForm>
										</Col>
										<Col xs={12}>
											<InputForm
												type='date'
												value={fechaInicio}
												name='fechaInicio'
												placeholder=''
												onChange={({ target }) => setFechaInicio(target.value)}
											/>
										</Col>
									</Row>
									<Row xs={12} className={`${!fechaFin && formError ? 'errorForm' : ''}`} >
										<Col xs={12}>
											<LabelForm>Fecha culminación</LabelForm>
										</Col>
										<Col xs={12}>
											<InputForm
												type='date'
												value={fechaFin}
												name='fechaFin'
												placeholder=''
												onChange={({ target }) => setFechaFin(target.value)}
											/>
										</Col>
									</Row>
								</Col>
							</Row>
							<Row xs={12}>
								<Col xs={12} md={6} className={`${!descripcion && formError ? 'errorForm' : ''}`}>
									<Col xs={12}>
										<LabelForm>Descripción de los servicios</LabelForm>
									</Col>
									<Col xs={12}>
										<Form.Control
											as="textarea"
											rows={3}
											value={descripcion}
											name='descripcion'
											placeholder=''
											onChange={({ target }) => setDescripcion(target.value)}
										/>
									</Col>
								</Col>
								<Col xs={12} md={6} className={`${services.length === 0 && formError ? 'errorForm' : ''}`}>
									<Col xs={12}>
										<LabelForm>Servicios</LabelForm>
									</Col>
									<Row xs={12}>
										<Col xs={6}>
											<CheckboxGroup optionsList={listOptions} listSelected={listSelected} />
										</Col>
										<Col xs={6}>
											<Col xs={12}>
												<InputForm
													type='text'
													value={newOption}
													name='newOption'
													placeholder=''
													onChange={({ target }) => setNewOption(target.value)}

												/>
											</Col>
											<Col xs={12}>
												<PButton2 onClick={addOption}>Agregar</PButton2>
											</Col>
										</Col>
									</Row>
								</Col>
							</Row>
							<Row xs={12}>
								<Col xs={0} lg={1}>
								</Col>
								<Col xs={12} lg={5}>
									<SButton2 onClick={showCancelModal}>Cancelar</SButton2>
								</Col>



								{
									props.type == 'Crear' ? (
										<Col xs={12} lg={5}>
											<PButton2>Enviar</PButton2>
										</Col>
									) : (
										<Col xs={12} lg={5}>
											<PButton2>Actualizar</PButton2>
										</Col>
									)
								}
								<Col xs={0} lg={1}>
								</Col>
							</Row>
						</StyledForm>
					</Container>
				</Col>
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
		</div>
	)
}

ProviderForm.propTypes = {
	type: PropTypes.string.isRequired,
	idProvider: PropTypes.string.isRequired,
	close: PropTypes.func.isRequired,
	handleConfirm: PropTypes.func.isRequired,
	handleCloseModal: PropTypes.func.isRequired
}