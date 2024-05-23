import { useState } from 'react';
import { Todo } from '../models/todo.model';
import React from 'react';
import { TodoFormState } from './todo-form';

type TodoProps = {
	todos: Todo[];
	onItemEdit: (item: TodoFormState) => void;
	onItemDelete: (index: number) => void;
	onCompleteChange: (index: number) => void;
};

// Not: Component ana wrapper component üzerinden değişen state göre kendini tekrar güncellesin diye componente değerleri props olarak geçeriz.
// Props üzerinden component yeni değere göre yenide render edilir.

function TodoList({
	todos,
	onItemEdit,
	onItemDelete,
	onCompleteChange,
}: TodoProps) {
	// const [todos, setTodos] = useState<Todo[]>([]);

	return (
		<>
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
									// üst componente görevin tamamlandığına dair  bir bilgi vermemiz lazım.
									onCompleteChange(index);
								}}
							/>
							{/* checkbox true olunca todos dizindeki item state güncellensin */}
						</span>
						<span>
							<button
								onClick={() => {
									onItemEdit({ ...item, index: index } as TodoFormState);
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
										// todo'nun silineceği dair bir bilgi vermeliyiz.
										onItemDelete(index);
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

export default TodoList;
