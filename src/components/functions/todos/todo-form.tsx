import { FormEvent, useEffect, useState } from 'react';
import { Todo } from '../models/todo.model';
import React from 'react';

export type TodoFormState = {
	title: string;
	completed?: boolean;
	index?: number;
};

// Propslar Component içine dışarıdan bilgi çekerek componentlerin güncellenmesini sağlar ve aynı zamanda component içindeki bir değişimi componentin dışına fırlatmadan sorumludur.
// Child Component içinde bir değişim olduğunda bu değişimi Parent Component'e bildirmek için Event gönderme tekniği kullanıyoruz. Event Emit.
// item:TodoFormState event içinde parent componente taşşınacak olan değerler.
export type TodoFormProps = {
	onItemAdded: (item: TodoFormState) => void;
	onItemUpdated: (item: TodoFormState) => void;
	todoUpdate: TodoFormState;
};

function TodoForm({ onItemAdded, onItemUpdated, todoUpdate }: TodoFormProps) {
	// initial state
	const [form, setForm] = useState<TodoFormState>({
		title: '',
		completed: false,
		index: -1,
	});

	// initial state
	const [mode, setMode] = useState('create');

	const clearForm = () => {
		setForm({ title: '', completed: false, index: -1 });
		setMode('create');
	};

	useEffect(() => {
		console.log('...rendering', todoUpdate);
		// component didmount
		// component doma basıldığında ilk tetiklenen hook
		// [todoUpdate] [deps] yani todoUpdate nesnesi değiştiğinde değişimi dinle ve componenti güncellemek ile ilgili bir state değişikliği yap.

		if (todoUpdate.index !== -1) {
			setForm({ ...todoUpdate }); // update geldiyse artık form içindeki değerler değişmeli
			setMode('update'); // todoUpdate geldiyse update mode olarak çalışıyorumdur.
			console.log('...rendering');
		}
	}, [todoUpdate]);

	const onFormSubmit = (e: FormEvent) => {
		e.preventDefault(); // formu durduruk.
		setForm({ title: '', completed: false });
		// eklendiğine dair eventimimiz fırlattık
		onItemAdded(form);
		clearForm();
	};
	const onTitleInputChange = (e: InputEvent) => {
		const value = (e.currentTarget as HTMLInputElement).value;
		console.log('title', value);
		setForm({ ...form, title: value });
	};
	const onCompleteChange = (e: InputEvent) => {
		const value = (e.currentTarget as HTMLInputElement).checked;
		console.log('completed', value);
		setForm({ ...form, completed: value });
	};

	return (
		<>
			<form onSubmit={onFormSubmit} noValidate>
				<input
					value={form.title}
					required
					onChange={(e: any) => onTitleInputChange(e)}
					type="title"
					placeholder="title giriniz"
				/>
				<input
					checked={form.completed}
					onChange={(e: any) => onCompleteChange(e)}
					type="checkbox"
				/>{' '}
				Tamamlandı Mı ?<br></br>
				{mode === 'create' ? (
					<input type="submit" value={'Ekle'} />
				) : (
					<button
						onClick={() => {
							// Listeye şuan elimdeki güncel form bilgisini göndereceğim.
							onItemUpdated(form);
							clearForm();
						}}
						type="button"
					>
						Güncelle
					</button>
				)}
			</form>
		</>
	);
}

export default TodoForm;
