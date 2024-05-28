import React, { useState, FormEvent, ChangeEvent } from 'react';
import './style.scss';
import {useFetcher} from "../../hooks/useFetcher";

interface FormProps {
    onUserAddition: (user: any) => void; // Принимаем функцию для обновления состояния верхнего компонента
}

const Form: React.FC<FormProps> = ({ onUserAddition }) => {
	const [user, setUser] = useState({
		username: '',
		phone: '',
		website: ''
	});

	function stateMutate(e: any) {
		const { value, name } = e.target;

		setUser(obj => {
			let nObj = {...obj};

			nObj[name as keyof typeof user] = value;

			return nObj;
		})
	}

	const {postData} = useFetcher();

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		postData(user, onUserAddition);
	};

	return (
		<form onSubmit={handleSubmit} className="form-container">
			<div>
				<label>
					Username:
					<input
						name="username"
						type="text"
						defaultValue={user.username}
						onChange={stateMutate}
					/>
				</label>
			</div>
			<div>
				<label>
					Phone:
					<input
						name="phone"
						type="text"
						defaultValue={user.phone}
						onChange={stateMutate}
					/>
				</label>
			</div>
			<div>
				<label>
					Website:
					<input
						name="website"
						type="email"
						defaultValue={user.website}
						onChange={stateMutate}
					/>
				</label>
			</div>
			<button className='button' type="submit">Submit</button>
		</form>
	);
};

export default Form;
