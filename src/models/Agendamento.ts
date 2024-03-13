import Usuario from "./Usuario";

export default interface Agendamento{
     id: number;
     nome: string;
     dataAgendamento: Date;
     usuario: Usuario | null;
     }
     