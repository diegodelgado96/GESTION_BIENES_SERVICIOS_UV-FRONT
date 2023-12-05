import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const CheckboxGroup = (props) => {
	const { optionsList, listSelected } = props
	const [selectedOptions, setSelectedOptions] = useState([])

	// Establecer las opciones seleccionadas inicialmente al cargar
	useEffect(() => {
		setSelectedOptions(optionsList)
		listSelected(optionsList)
	}, [optionsList, listSelected])

	const handleCheckboxChange = (option) => {
		setSelectedOptions((prevSelectedOptions) => {
			if (prevSelectedOptions.includes(option)) {
				const updatedOptions = prevSelectedOptions.filter(
					(item) => item !== option
				)
				listSelected(updatedOptions)
				return updatedOptions
			} else {
				const updatedOptions = [...prevSelectedOptions, option]
				listSelected(updatedOptions)
				return updatedOptions
			}
		})
	}

	return (
		<div>
			{optionsList.map((option) => (
				<div key={option}>
					<input
						type="checkbox"
						id={option}
						checked={selectedOptions.includes(option)}
						onChange={() => handleCheckboxChange(option)}
					/>
					<label htmlFor={option}>{option}</label>
				</div>
			))}
		</div>
	)
}

CheckboxGroup.propTypes = {
	optionsList: PropTypes.array.isRequired,
	listSelected: PropTypes.func.isRequired,
}