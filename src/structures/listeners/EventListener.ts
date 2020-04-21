import { GenericEvent, EventTypes } from '../../declarations/events';

export default abstract class EventListener<T extends GenericEvent = EventTypes> extends GenericEvent<
  T['name'],
  T['listener']
> {
  protected constructor(name: T['name']) {
    super();
    this.name = name;
  }
}
