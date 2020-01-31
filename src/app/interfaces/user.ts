import { Estado } from './estado';

export interface User {
    id?: number;
    name: string;
    image: string;
    estados?: Estado[];
}
