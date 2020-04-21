import { ReadyEvent } from './events';

export abstract class GenericFinalizer {
  type: 'event' | 'command';
  abstract listener: ReadyEvent['listener'];
}
