/** Type it should be from the DB */
export interface ISubcommand {
    name: string;
    description: string;
    use: string;
}
/** Type it should be from the DB */
export interface ICommand {
    name: string;
    description?: string;
    use?: string;
    subcommands?: ISubcommand[];
}
/** API Type it should be from the DB */
export interface ApiSubcommand {
    name: string;
    description: string;
    use: string;
}

/** API Type it should be from the DB */
export interface ApiCommand {
    name: string;
    description?: string;
    use?: string;
    subcommands?: ApiSubcommand[];
}

export type ApiCommandBody = ApiCommand | undefined;
