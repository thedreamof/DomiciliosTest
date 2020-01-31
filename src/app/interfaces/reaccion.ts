import { User } from './user';
export interface Reaccion {
    id: number;
    usuario: User[];
    descripcion: string;
    cantidad: number;
}
