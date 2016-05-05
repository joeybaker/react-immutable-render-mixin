import shouldComponentUpdate from './shouldComponentUpdate';

/**
 * Makes the given component "pure".
 *
 * @param object Target Component.
 */

export default function immutableRenderDecorator(component) {
  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
  return component;
}
