import { PropsType } from '../declarations/handler';

export default class BasePropsObject {
  private _props: PropsType = {};

  readonly addProps = (addedProps: BasePropsObject['_props']): void => {
    const newProps = { ...this._props, ...addedProps };
    this._props = newProps;
  };

  get props(): Readonly<BasePropsObject['_props']> {
    return this._props;
  }
}
