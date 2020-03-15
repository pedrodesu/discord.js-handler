import { GenericCommand } from '../interfaces/commands';

export default class CommandListener {
  readonly aliases: GenericCommand['aliases'];
  readonly listener: GenericCommand['listener'];

  readonly description?: GenericCommand['description'];

  constructor(commandParameters: Pick<GenericCommand, 'aliases' | 'listener' | 'description'>) {
    Object.assign(this, commandParameters);
  }
}
