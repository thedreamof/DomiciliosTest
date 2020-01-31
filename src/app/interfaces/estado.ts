import { Comentario } from './comentario';
import { User } from './user';
import { Reaccion } from './reaccion';

export interface Estado {
    id?: number;
    descripcion: string;
    fecha: string;
    usuario: User;
    reacciones?: Reaccion[];
    comentarios?: Comentario[];
}
