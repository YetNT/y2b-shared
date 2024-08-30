import { ICommand, ApiCommand } from "./commands";
/**
 * Converts a command document from the database to an API command object.
 *
 * @param cmd - The command document to convert. It must be a Mongoose Document,
 * implement the ICommand interface, and have a required '_id' field.
 *
 * @returns A Command object representing the API representation of the input command.
 * If the input command has subcommands, the returned Command object will include
 * a 'subcommands' field with an array of Subcommand objects. Otherwise, it will
 * include 'description' and 'use' fields.
 */
export declare function docToApi(cmd: ICommand): Promise<ApiCommand>;
