import { Client } from 'discord.js';

import { join } from 'path';

import BasePropsObject from '../structures/BasePropsObject';

export class HandlerBase extends BasePropsObject {
  /**
   * Absolute path of the folder where the handler constructor was called
   * @protected
   * @readonly
   */
  protected readonly moduleFolder = join(module.parent.parent.parent.filename, '..');

  /**
   * Client variable to do every operation
   * @protected
   * @readonly
   * @type {Client}
   */
  protected readonly client: Client;
  /**
   * Token to be used to login into the client
   * @protected
   * @readonly
   * @type {string}
   */
  protected readonly token?: string;
  /**
   * Value which controls whether additional information is sent to the console or not
   * @protected
   * @readonly
   * @type {boolean}
   */
  protected readonly verbose?: boolean;

  /**
   *
   */
  protected readonly eventsFolder: string;
  protected readonly commandsFolder?: string;
  protected readonly finalizersFolder?: string;
}

export type HandlerOptions = Omit<HandlerBase, 'moduleFolder' | 'addProps' | 'props'>;

export interface PropsType {
  [key: string]: unknown;
}
