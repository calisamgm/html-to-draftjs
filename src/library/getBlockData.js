import { Map } from 'immutable';

export default function getBlockData(
  node: Object
): Object {
  const data = {};
  if (node.style.textAlign) {
    data['text-align'] = node.style.textAlign;
  }
  if (node.style.marginLeft) {
    data['margin-left'] = node.style.marginLeft;
  }
  if (node.style.lineHeight) {
    data['line-height'] = node.style.lineHeight;
  }
  return new Map(data);
}