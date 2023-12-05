import React from 'react'
import { Dependence } from '../sections/dependence'
import { PropTypes } from 'prop-types'
import { ImagesReport } from '../sections/imagesReport'
import { ReportEvaluation } from '../sections/reportEvaluation'
import { ReportInformation } from '../sections/reportInformation'
import { ReportStatus } from '../sections/reportStatus'
import { RowReport } from '../tools/styleContent'
import { UserInformation } from '../sections/userInformation'

export const ReportContent = (props) => {

	const capitalizeFirst = (frase) => {
		var palabras = frase.split(' ')
		for (var i = 0; i < palabras.length; i++) {
			palabras[i] = palabras[i].charAt(0) + palabras[i].slice(1).toLowerCase()
		}

		var resultado = palabras.join(' ')
	
		return resultado
	}

	return (
		<>
			<RowReport xs={12}>
				<Dependence data={props.data}  capitalizeFirst={capitalizeFirst}/>
				<ReportInformation data={props.data} capitalizeFirst={capitalizeFirst}  />
				<UserInformation data={props.data} capitalizeFirst={capitalizeFirst} />
			</RowReport>
			<RowReport xs={12}>
				<ReportStatus data={props.data} />
				<ReportEvaluation data={props.data} />
				<ImagesReport data={props.data} />
			</RowReport>
		</>
	)
}

ReportContent.propTypes = {
	data: PropTypes.object.isRequired,
}