/* eslint-disable react/prop-types */
import { Col, Container } from 'react-bootstrap'
import { ColWhite, DivForm, LeftReport, ObservationP, RowData, TitleReport } from '../tools/styleContent'
import React from 'react'

export const Dashboard = () => {
	const user = JSON.parse(window.localStorage.getItem('loggedAppUser'))

	return (
		<div className='dash'>
			<DivForm >
				<Col xs={12} className={'formBackground'}>
					<Container>
						<RowData xs={12}>
							<ColWhite xs={12}>
								<TitleReport>Instrucciones</TitleReport>
								{
									user.rol === 'USER' ? (
										<>
											<LeftReport>Tickets</LeftReport>
											<ObservationP>&quot;Ticket&quot; se presenta como un recurso esencial para los usuarios, brindándoles visibilidad completa sobre el estado de sus solicitudes. Esta función ofrece un historial detallado de interacciones y acciones vinculadas a los tickets, permitiendo a los usuarios rastrear el progreso de manera efectiva. Al proporcionar una interfaz transparente y accesible, &quot;Ticket&quot; se convierte en un componente clave para la comunicación entre usuarios y el sistema, promoviendo una gestión informada y eficiente de las solicitudes.</ObservationP>
											<br />
											<LeftReport>Generar Reporte</LeftReport>
											<ObservationP>La función &quot;Generar Reporte&quot; desempeña un papel crucial al ofrecer la capacidad de crear informes específicos, como el reporte de falla de infraestructura y el reporte de mantenimiento preventivo y correctivo. Los usuarios pueden completar un formulario detallado, adjuntar registros fotográficos pertinentes y, mediante este proceso, generar un ticket asociado a la solicitud. Este enfoque integrado no solo documenta de manera exhaustiva los problemas y las necesidades, sino que también establece un seguimiento estructurado a través del sistema de tickets, permitiendo consultas posteriores en la sección dedicada a tickets. La conexión entre la generación de reportes, la creación de tickets y la posterior consulta proporciona una solución integral para la gestión eficiente de incidencias y mantenimientos en la infraestructura y bienes de la Universidad del Valle sede Tuluá.</ObservationP>
											<br />
											<LeftReport>Generar Solicitud</LeftReport>
											<ObservationP>La función &quot;Generar Solicitud&quot; ofrece una amplia versatilidad al permitir a los usuarios generar diferentes tipos de solicitudes. Esto incluye la creación de solicitudes de servicios destinadas a la administración universitaria, abarcando desde apoyos económicos hasta estudios administrativos relacionados con la matrícula. Al detallar las necesidades específicas en estas solicitudes, los usuarios contribuyen a una comunicación clara y eficaz con la administración. Además, la función facilita la generación de peticiones de bienes, donde los usuarios pueden adjuntar referencias precisas y proponer enlaces directos a tiendas para la adquisición de los bienes necesarios. Este proceso de generación de solicitudes se integra de manera transparente con el sistema de tickets, asignando automáticamente un ticket a cada solicitud. Este enfoque proporciona un mecanismo eficiente para que la comunidad universitaria exprese sus necesidades, ya sean de servicios administrativos o adquisición de bienes, contribuyendo así a una gestión más efectiva en la Universidad del Valle sede Tuluá.</ObservationP>
										</>
									) : user.rol === 'ADMIN' ? (
										<>
											<LeftReport>Gestionar Ticket</LeftReport>
											<ObservationP>La función &quot;Gestionar Ticket&quot; desempeña un papel esencial al proporcionar una interfaz integral para la consulta y administración de la información de un ticket. Permite realizar acciones clave, como la asignación o reasignación de un proveedor, cargar o editar un reporte detallado, y la creación de acciones específicas que deben ser ejecutadas por el proveedor. Esta herramienta centraliza el control y seguimiento de los tickets, optimizando la gestión y asegurando una ejecución eficiente de las acciones necesarias para resolver las solicitudes.</ObservationP>
											<br />
											<LeftReport>Proveedores</LeftReport>
											<ObservationP>En la sección de &quot;Proveedores&quot;, se brinda una funcionalidad integral para la gestión eficiente de la información relacionada con los proveedores. Permite realizar acciones clave, como el registro y edición de datos de proveedores, así como la visualización de funciones asignadas a cada proveedor. Además, facilita la evaluación de desempeño de los proveedores en base a las funciones ejecutadas. Este apartado se convierte en un componente crucial para mantener un registro actualizado y evaluar la eficacia de los proveedores, contribuyendo a la toma de decisiones informada en la administración de bienes y servicios en la Universidad del Valle sede Tuluá.</ObservationP>
											<br />
											<LeftReport>Revisión</LeftReport>
											<ObservationP>En la sección de &quot;Revisión&quot;, se proporciona una herramienta integral para la supervisión y gestión de todos los reportes y solicitudes generados. Permite visualizar de manera centralizada el estado, la etapa y la urgencia de cada solicitud, proporcionando una visión completa del panorama. Además, ofrece la capacidad de modificar la información según sea necesario.</ObservationP>
										</>
									) : ''
								}
							</ColWhite>
						</RowData>
					</Container>
				</Col>
			</DivForm>
		</div>
	)
}