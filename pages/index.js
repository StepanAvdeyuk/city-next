import React from 'react'
import { Input } from '@chakra-ui/react'
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import Router from 'next/router'

export default function Home() {

	React.useEffect(() => {
		if (localStorage.getItem('data')) {
			Router.push('202');
		}
	}, [])

	const sendData = (e) => {
		if (!e.target) {
			Router.push('error');
		}
		e.preventDefault();

		const description = e.target[5].value ? e.target[5].value : '';
		localStorage.setItem('data', JSON.stringify({
			name: e.target[0].value,
			startYear: e.target[1].value,
			transportFacility: e.target[2].value,
			servicesFacility: e.target[3].value,
			socialFacility: e.target[4].value,
			description: description
		}));	
		Router.push('200');
	}

	return (
	<div className="container">
		<div className="title">Анкетирование на тему «Инфраструктура моего города».</div>
		<form onSubmit={sendData}> 
			<Input placeholder='Введите название вашего города' isRequired={true}/>
			<label>
			Год начала проживания в вашем городе
			<NumberInput defaultValue={2022} min={1922} max={2022}>
				<NumberInputField />
				<NumberInputStepper>
				<NumberIncrementStepper />
				<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
			</label>
			<label>
			оценка транспортной доступности от 0 до 10
			<NumberInput defaultValue={0} min={0} max={10}>
				<NumberInputField />
				<NumberInputStepper>
				<NumberIncrementStepper />
				<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
			</label>
			<label>
			оценка доступности сферы услуг от 0 до 10
			<NumberInput defaultValue={0} min={0} max={10}>
				<NumberInputField />
				<NumberInputStepper>
				<NumberIncrementStepper />
				<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
			</label>
			<label>
			оценка доступности социальной среды от 0 до 10
			<NumberInput defaultValue={0} min={0} max={10}>
				<NumberInputField />
				<NumberInputStepper>
				<NumberIncrementStepper />
				<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
			</label>
			<Input placeholder='Введите отзыв по желанию' />
			<Button colorScheme='blue' type='submit'>Отправить форму</Button>
		</form>
	</div>
	)
}
