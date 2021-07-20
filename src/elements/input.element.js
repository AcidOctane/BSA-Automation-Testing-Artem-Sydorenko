const { BaseElement } = require('./base.element');

class Input extends BaseElement {
  constructor(selector, index) {
    super(selector, index);
  }

  async setValue(text) {
    let element;
    if (this.index) {
      element = (await $$(this.selector))[this.index];
    } else {
      element = await $(this.selector);
    }
    await this.waitForVisible(element);
    await element.setValue(text);
  }

    async clearValue() {
        let element;
        if(this.index) {
            element = (await $$(this.selector))[this.index];
        } else {
            element = await $(this.selector);
        }
        await this.waitForVisible(element);
        await element.setValue("\uE003\uE003\uE003\uE003\uE003\uE003\uE003\uE003\uE003\uE003");
    };

};


module.exports = { Input };
