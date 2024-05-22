import React from 'react';
import { Component, ReactNode } from 'react';
// class Componentler COmponent'den türer
// Props ise componente dışarıdan html attribute gibi gönderilen değerler
// <ClassComponentSample text='sample-1' />
// number,string,boolean value type değer tanımlanabilir.
// object, array, object[], regex, func bunlarda ref type olarak tanımlanır.
type Props = {
	text: string;
	content?: string; // Optional değer
};

// Stateler kullanıcı etkileşimi sonrasında component içerisinde güncellenebilen ve güncel değerleri ekrana yansıtılabilen yapılar.
// Props Stateless çalışır, ilk doma component basılırken gönderilecek değerler Props ile verilir.
// State StateFull çalışır, component açıldıktan sonra component arayüzlerindeki güncellemeler State ile yapılar.
type State = {
	counter: number;
	title: string;
	todos: any[];
};

export class ClassComponentSample extends Component<Props, State> {
	// class içerisinden props ismi ile propertylere bağlanırız.
	// class component ait props bilgisi kalırım alaınan Component sınıfına taşındı.
	constructor(props: Props) {
		super(props);
		this.state = { counter: 0, title: '', todos: [] }; // state initialize ettik.
		// direkt olarak method class componente bağlkanacak ise bind işlemini uyguluyoruz
		this.increase = this.increase.bind(this);
		// direkt method bağlayacaksak bu yöntem ile ilerlemeliyiz.
	}

	increase(): void {
		// state değişimi asenkron çalışır bu sebeple state değiştiği anı set state kodundan sonra yakalayamayız. Bunun için callback function tanımlamışlar.
		// this.state.title = 'deneme'; Not ste State olmadan state deki hiçbir değer güncellenemez

		// this.setState({ title: 'deneme1' }); // WriteOnly

		// this.setState({ ...this.state }); // referans değişikliği
		// this.setState([... this.state]); //  array ref değişikliği state tetikler. virtual dom tetiklenmesi için spread operator kullandık.

		this.setState({ counter: this.state.counter + 1 }, () => {
			console.log('state değişitiğinde tetiklendi', this.state);
		});
		// console.log('değişen state', this.state); Yanlış bir state yakalama yöntemi.
	}

	// Component doma girdikten sonra 1 kereye mahsus tetiklenir
	// Component ilk load olduğunda veri çekme işlemleri ve state aktarma işlemleri burada yapılır.
	componentDidMount(): void {
		console.log('render sonrası ilk tatiklenen method');
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log('data', data);
				// setState apidan gelen veriyi state aktarıyoruz.
				this.setState({ ...this.state, todos: data });
				// virtual dom tetiklenir.
			});
	}

	// componentdidMount sonrası ilk çalışan lifecycle method
	// her state değişiminde tetiklenir.
	// bir kereye mahsus ilk yüklemede çalışır.
	// ilk yükleme dışında state değiştiğinde çalışır
	componentDidUpdate(
		prevProps: Readonly<Props>,
		prevState: Readonly<State>,
		snapshot?: any
	): void {
		console.log(
			'component içerisinde bir state güncellemesi olduğunda çalışır',
			prevProps,
			prevState
		);
		// component içerisinde state takibini buradan yapabiliriz.

		if (this.state.todos.length > 0) {
			alert('veri yükleme tamamlandı');
			// apidan farklı bir veri load etme işlemleri uygulanabiliriz.
		}

		if (this.state.title !== prevState['title']) {
			// bir önceki title değeri ile bir sonraki title değeri birbirinden farklıysa özel bir durum meydana getir.
		}
	}

	// güncelleme virtual dom'a yansısınmı yoksa yansımasınmı kontrolü yapılabilir
	// component render yönetilebilir.
	shouldComponentUpdate(
		nextProps: Readonly<Props>,
		nextState: Readonly<State>,
		nextContext: any
	): boolean {
		return true;
	}

	componentWillUnmount(): void {
		console.log('component domdan çıkacağı zaman tetiklenir.');
		// component domdan ya sayfadan başka bir sayfaya yönlenmede yada ekranda visisble tru yada false olduğunda görünür.
		// interval clear edilebilir
		// socket connection varsa close edilebilir.
		// rxjs subscription unsubscribe edilmelidir. 
	}

	// component ilk doma girdiğinde tetiklenen metho // render phase // mounting phase // unmounting phase
	render(): ReactNode {
		console.log('...rendering');
		return (
			<div>
				Todos Count: {this.state.todos.length}
				<br></br>
				{this.props.text}
				<p>{this.props.content}</p>
				<p>
					Sayac: {this.state.counter}{' '}
					{/* model binding, yazım şekli olarak interpolation */}
				</p>
				<button
					onClick={this.increase}
					// onClick={() => this.increase()}
					// state değişikliklerini class Component içerisinde setState method ile yapıyoruz.
					// this.setState({ ...this.state, counter: this.state.counter + 1 });
				>
					Sayac (+)
				</button>
			</div>
		);
	}
}

// export default ClassComponentSample;
