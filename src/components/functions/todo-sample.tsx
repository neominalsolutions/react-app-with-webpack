import React, { FormEvent, useState } from 'react';
import { Todo } from './models/todo.model';

type TodoState = {
	title: string;
	completed?: boolean;
};

function TodoSample() {
	const [todos, setTodos] = useState<Todo[]>([]);
	// Form State
	// formdaki ınpıut alanlarını değiştirip bunu todo[] içerisine push etmek istiyoruz
	// Ekle butonuna basıldığında todos dizisi içerisine eklemek istiyoruz.
	const [form, setForm] = useState<TodoState>({ title: '', completed: false });

	const onFormSubmit = (e: FormEvent) => {
		e.preventDefault(); // formu durduruk.
		// append
		// setTodos([...todos, form as Todo]);

		setTodos([form as Todo, ...todos]);
		// prepend
		// initial state geri dön
		setForm({ title: '', completed: false });
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

	// for (const item of todos) {
	//     if(item.title.includes('a')){

	//     }
	// }

	// todos.map((item: Todo) => {
	// 	return { title: item.title };
	// });

	// todos.forEach((item:Todo) => {
	//     if(item.title.includes('a')){

	//     }
	// })

	return (
		<>
			{/* Two Way Binding */}
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
				<input type="submit" value={'Ekle'} />
			</form>

			<hr></hr>

			{/* map ile arayüzü render edilmesini sağlamış olduk */}
			{/* dinamik template döndürme işlemlerinde {içersine kodumuzu yazarak return etmiş olduk} */}
			{todos.map((item: Todo, index: number) => {
				return (
					<div key={index} style={{ border: '1px solid gray' }}>
						{' '}
						{item.title} /{' '}
						<span style={{ color: item.completed ? 'green' : 'red' }}>
							{item.completed ? 'Görev Tamamlandı' : 'Görev Beklemede'}
							<input type="checkbox" />
							{/* checkbox true olunca todos dizindeki item state güncellensin */}
						</span>
						<span>
							<button>Düzenle</button>
							<button>Sil</button>
							{/* Düzenle diyince Ekle butonu yerine Update Button görünsün */}
						</span>
					</div>
				);
			})}
		</>
	);
}

export default TodoSample;

// useEffect => LifeCycleMethods
// useLayoutEffect
// useRef 3. Default Hook.
