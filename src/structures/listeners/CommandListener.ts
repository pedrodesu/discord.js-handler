import { GenericCommand } from '../../declarations/commands';

export default abstract class CommandListener extends GenericCommand {
  protected constructor(commandParameters: Omit<GenericCommand, 'listener'>) {
    super();
    Object.assign(this, commandParameters);
  }
}
