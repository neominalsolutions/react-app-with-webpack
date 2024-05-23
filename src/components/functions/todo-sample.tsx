import React, { FormEvent, useState } from 'react';
import { Todo } from './models/todo.model';

type TodoState = {
	title: string;
	completed?: boolean;
	index?: number;
};

function TodoSample() {
	const [todos, setTodos] = useState<Todo[]>([]);
	// Form State
	// formdaki ınpıut alanlarını değiştirip bunu todo[] içerisine push etmek istiyoruz
	// Ekle butonuna basıldığında todos dizisi içerisine eklemek istiyoruz.
	const [form, setForm] = useState<TodoState>({ title: '', completed: false });

	const [mode, setMode] = useState('create');

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
				{mode === 'create' ? (
					<input type="submit" value={'Ekle'} />
				) : (
					<button
						onClick={() => {
							todos.map((item: Todo, index: number) => {
								// düzenle buttonuna basınca form doldurduk ve düzenlenen seçilen nesne ile todos içerisinde sıralı olan nesnleri index üzerinden bulup, özellilklerini güncelledik.
								if (index === form.index) {
									item.title = form.title;
									item.completed = form.completed as boolean;
								}
								return { ...item };
							});

							setTodos([...todos]); // virtual dom yeni state ekrana basmış oldu.
							setForm({ title: '', completed: false, index: -1 });
						}}
						type="button"
					>
						Güncelle
					</button>
				)}
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
							<input
								disabled={item.completed}
								checked={item.completed}
								type="checkbox"
								onChange={() => {
									item.completed = !item.completed;
									setTodos([...todos]); // virtaul dom tetiklenmiş oldu.
								}}
							/>
							{/* checkbox true olunca todos dizindeki item state güncellensin */}
						</span>
						<span>
							<button
								onClick={() => {
									setForm({ ...item, index: index });
									setMode('update');
								}}
							>
								Düzenle
							</button>
							<button
								onClick={() => {
									const result = window.confirm(
										'Kaydı silmek istediğinize emin misiniz?'
									);

									if (result) {
										// const silinecek = todos[index];
										// const silinmeyecekler = todos.filter(
										// 	(x) => x.title !== silinecek.title
										// );
										todos.splice(index, 1);
										setTodos([...todos]);
										// setTodos([...silinmeyecekler]);
									} else {
										window.alert('İşlem iptal edildi');
									}
								}}
							>
								Sil
							</button>
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
