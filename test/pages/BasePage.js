export default class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async $(selector) {
    return await this.driver.elementByAccessibilityId(selector);
  }
}