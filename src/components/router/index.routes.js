import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { useUser } from '../../hooks/useUser'
import { Report } from '../pages/report'
import { SearchReport } from '../pages/searchReport'
import { BodyContent } from '../bodys/bodyContent'

export const IndexRoutes = () => {

	const user = useUser()

	return (
		<Routes>
			<Route path='/*' element={<BodyContent />} />
			<Route path='/newReport' element={
				user ? (
					<Report />
				) : (
					<Navigate to="/signin" replace />
				)
			} />
			<Route path='/viewReport' element={
				user ? (
					<SearchReport />
				) : (
					<Navigate to="/signin" replace />
				)
			} />
		</Routes>
	)
}