import colors from '../colors';
import AbstractKey from './AbstractKey';
import { scale } from '../config';

export const KEY_WIDTH = 80 * scale;
const KEY_HEIGHT = 300 * scale;

class WhiteKey extends AbstractKey
{
  constructor(g, index, controlKey) {
    super(g, index, controlKey);
  }

  getWidth() {
    return KEY_WIDTH;
  }

  getHeight() {
    return KEY_HEIGHT;
  }

  getFillColor() {
    return colors.white;
  }

  getStrokeColor() {
    return colors.black;
  }

  getKeyXPos(index) {
    return 2 + (KEY_WIDTH * index);
  }

  getKeyYPos() {
    return 210;
  }

  getLabelXPos() {
    return this.sprite.x + 33;
  }

  getTextColor() {
    return colors.black;
  }
}

export default WhiteKey;