import React from 'react'
import Image from 'next/image'

const Weather = ({ data }) => {
	console.log(data)
	const far = data.main.temp
	const far2 = data.main.feels_like
	const celsius = ((far - 32) * 5) / 9
	const celsius2 = ((far2 - 32) * 5) / 9

	const mph = data.wind.speed
	const ms =  mph * 0.44704

	return (
		<div className='relative flex flex-col justify-between max-w-[500px] w-full h-[70vh] m-auto p-4 text-gray-300 z-10'>
			<div className='relative flex justify-between pt-12 '>
				<div className='flex flex-col items-center'>
					<Image
						src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
						alt='/'
						width='100'
						height='100'
					/>
					<p className='text-2xl'>{data.weather[0].main}</p>
				</div>
				<p className='text-9xl'>{celsius.toFixed(0)}&#176;C</p>
			</div>

			<div className='bg-black/50 relative p-8 rounded-md'>
				<p className='text-2xl text-center pb-6'>Погода в {data.name}</p>
				<div className='flex justify-between text-center'>
					<div>
						<p className='font-bold text-2xl'>{celsius2.toFixed(0)}&#176;C</p>
						<p className='text-xl'>Ощущается</p>
					</div>
					<div>
						<p className='font-bold text-2xl'>{data.main.humidity}%</p>
						<p className='text-xl'>Влажность</p>
					</div>
					<div>
						<p className='font-bold text-2xl'>{ms.toFixed(0)} м/сек</p>
						<p className='text-xl'>Ветер</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Weather
