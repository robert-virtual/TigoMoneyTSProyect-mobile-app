import {v4 as uuid} from 'uuid';

type Transtype = 'Retiro' | 'Envio' | 'Servicios' | 'Recarga';

interface params {
  type: Transtype;
  receptor: Cliente | Empresa;
  emisor?: Cliente;
}
// envio == recarga
export class Transaccion {
  id: string;

  constructor({type, receptor, emisor}: params) {
    this.id = uuid();
    this.type = type;
    this.Receptor = receptor;
    this.Emisor = emisor;
  }

  type!: Transtype;

  Receptor!: Cliente | Empresa;

  Emisor?: Cliente;
}
export interface Cliente {
  Tel: string;
  DNI?: string;
  Birthday?: Date;
}

export interface Empresa {
  Tel: string;
}
