import { GenericFinalizer } from '../../declarations/finalizers';

export default abstract class FinalizerListener extends GenericFinalizer {
  protected constructor(type: 'event' | 'command') {
    super();
    this.type = type;
  }
}
