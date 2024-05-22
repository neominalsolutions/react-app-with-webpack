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
};

export class ClassComponentSample extends Component<Props, State> {
	// class içerisinden props ismi ile propertylere bağlanırız.
	// class component ait props bilgisi kalırım alaınan Component sınıfına taşındı.
	constructor(props: Props) {
		super(props);
		this.state = { counter: 0, title: '' }; // state initialize ettik.
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
	render(): ReactNode {
		return (
			<div>
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
