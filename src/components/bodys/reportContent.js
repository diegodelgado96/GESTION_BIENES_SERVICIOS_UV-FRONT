import React from 'react'
import { Dependence } from '../sections/dependence'
import { PropTypes } from 'prop-types'
import { Row } from 'react-bootstrap'
import { RowReport } from '../tools/styleContent'

export const ReportContent = (props) => {
	return (
		<>
			<RowReport xs={12}>
				<Dependence data={props.data} />
				<Dependence data={props.data} />
				<Dependence data={props.data} />
			</RowReport>
			<Row xs={12}>
				<div>
					2
				</div>
			</Row>
		</>
	)
}

ReportContent.propTypes = {
	data: PropTypes.object.isRequired, // title debe ser una cadena y es requerido // className es opcional y debe ser una cadena si está presente
}