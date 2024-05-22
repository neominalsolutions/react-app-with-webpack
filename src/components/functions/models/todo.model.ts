// backend tarafındaki DTOların program tarafındaki karşılığı interface model dosyalarımız oluyor

export interface Todo {
    id:number;
    userId:number;
    completed:boolean;
    title:string;
}

