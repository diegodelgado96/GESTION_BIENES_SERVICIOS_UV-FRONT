import React from 'react'
import { StyledLink, StyledLi } from '../tools/styleContent'

export const SideUser = () => {
	return (
		<>
			<StyledLi>
				<StyledLink to='/viewReport' >
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M18 21V3L15 5L12 3L9 5L6 3V21L9 19.5L12 21L15 19.5L18 21Z" stroke="#E40613" strokeWidth="2" strokeLinejoin="round" />
						<path d="M10 9H14M10 15H14M10 12H14" stroke="#E40613" strokeWidth="2" strokeLinecap="round" />
					</svg>
					Tickets
				</StyledLink>
			</StyledLi>
			<StyledLi>
				<StyledLink to='/newReport' >
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
						<path d="M8 12.1667C8.23611 12.1667 8.43417 12.0867 8.59417 11.9267C8.75417 11.7667 8.83389 11.5689 8.83333 11.3333C8.83333 11.0972 8.75333 10.8992 8.59333 10.7392C8.43333 10.5792 8.23556 10.4994 8 10.5C7.76389 10.5 7.56583 10.58 7.40583 10.74C7.24583 10.9 7.16611 11.0978 7.16667 11.3333C7.16667 11.5694 7.24667 11.7675 7.40667 11.9275C7.56667 12.0875 7.76444 12.1672 8 12.1667ZM7.16667 8.83333H8.83333V3.83333H7.16667V8.83333ZM4.875 15.5L0.5 11.125V4.875L4.875 0.5H11.125L15.5 4.875V11.125L11.125 15.5H4.875ZM5.58333 13.8333H10.4167L13.8333 10.4167V5.58333L10.4167 2.16667H5.58333L2.16667 5.58333V10.4167L5.58333 13.8333Z" fill="#E40613" />
					</svg>
					Generar Reporte
				</StyledLink>
			</StyledLi>
			<StyledLi>
				<StyledLink to='/servicesRequest' >
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M8.25 15.75L5.25 14.1V10.725L8.25 9.075L11.25 10.725V14.1L8.25 15.75ZM6.75 13.2L8.25 14.025L9.75 13.2V11.55L8.25 10.725L6.75 11.55V13.2ZM4.5 22.5L1.5 20.85V17.475L4.5 15.75L7.5 17.4V20.775L4.5 22.5ZM3 19.95L4.5 20.775L6 19.95V18.3L4.5 17.475L3 18.3V19.95ZM12 22.5L9 20.85V17.475L12 15.825L15 17.475V20.85L12 22.5ZM10.5 19.95L12 20.775L13.5 19.95V18.3L12 17.475L10.5 18.3V19.95ZM19.5 22.5L16.5 20.85V17.475L19.5 15.825L22.5 17.475V20.85L19.5 22.5ZM18 19.95L19.5 20.775L21 19.95V18.3L19.5 17.475L18 18.3V19.95ZM18.45 8.7L16.5 10.65V7.05L18.75 5.775V2.4L15.75 0.75L12.75 2.4V5.775L15 7.05V10.575L13.05 8.625L12 9.75L15.75 13.5L19.5 9.75L18.45 8.7ZM14.25 3.3L15.75 2.475L17.25 3.3V4.95L15.75 5.775L14.25 4.95V3.3Z" fill="#E40613" />
					</svg>
					Generar Solicitud
				</StyledLink>
			</StyledLi>
		</>
	)
}