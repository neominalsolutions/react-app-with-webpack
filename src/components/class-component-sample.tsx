import React from 'react';
import { Component, ReactNode } from 'react';
// class Componentler COmponent'den türer
// Props ise componente dışarıdan html attribute gibi gönderilen değerler
// <ClassComponentSample text='sample-1' />
// number,string,boolean value type değer tanımlanabilir.
// object, array, object[], regex, func bunlarda ref type olarak tanımlanır.
type Props = {
	text: string;
};
// const c: Props = { text: '10' };
// c.text
export class ClassComponentSample extends Component<Props> {
	// class içerisinden props ismi ile propertylere bağlanırız.
	// class component ait props bilgisi kalırım alaınan Component sınıfına taşındı.
	constructor(props: Props) {
		super(props);
	}

	render(): ReactNode {
		return <div>{this.props.text}</div>;
	}
}

// export default ClassComponentSample;
