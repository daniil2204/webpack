type Mode = 'development' | 'production';

export interface IEnvVariable {
    mode: Mode;
    port: number
    iNeedProgress: boolean
}