export interface BackendModuleOptions {
    port: number;
    basePath: string;
    corsOrigin: string
}


export interface Options {
    backend: BackendModuleOptions
}
