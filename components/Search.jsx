import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Search = ({ fetchWeather, setCity }) => {
	return (
		<div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10 h-[100%]'>
			<form
				onSubmit={fetchWeather}
				className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'
			>
				<div>
					<input
						onChange={event => setCity(event.target.value)}
						type={'text'}
						placeholder={'Search city'}
						className='bg-transparent border-none text-white focus:outline-none text-2xl'
					/>
				</div>
				<button onClick={fetchWeather}>
					<BsSearch size={25} />
				</button>
			</form>
		</div>
	)
}

export default Search
