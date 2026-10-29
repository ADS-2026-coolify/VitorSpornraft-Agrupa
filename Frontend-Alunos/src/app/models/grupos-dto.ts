import { PosicaoUsuariosDTO } from "./posicao-usuarios-dto";

export interface GruposDTO {
    idGrupo: number;
    usuarios: PosicaoUsuariosDTO[];
    nomeGrupo: string;
    qtdeUsuarios: number;
    qtdePessoas: number;
    hash: string;
    nomeAtividade: string;
    idAtividade: number;
}
