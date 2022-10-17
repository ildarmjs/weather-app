import React from 'react'
import axios from 'axios'
import { useState } from 'react'


export const useWeather = () => {
	const [city, setCity] = useState('')
	const [weather, setWeather] = useState({})
	const [loading, setLoading] = useState(false)

	const API_KEY = '0c9bd8408371b8e04459680743159267'
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`

	const fetchWeather = event => {
		event.preventDefault()
		setLoading(true)
		axios.get(url).then(response => {
			setWeather(response.data)
		})
		setCity('')
		setLoading(false)
	}

	return {
		city,
		setCity,
		weather,
		setWeather,
		loading,
		setLoading,
		fetchWeather,
	}
}
