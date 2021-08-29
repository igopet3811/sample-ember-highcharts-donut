import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RowComponent extends Component {
  @tracked isLarge = false;
  @tracked color = this.args.model.color;
  textColor = 'white';

  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
