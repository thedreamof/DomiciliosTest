import { User } from './user';

export interface Comentario {
    id?: number;
    descripcion: string;
    fecha: string;
    usuario: User;
}
