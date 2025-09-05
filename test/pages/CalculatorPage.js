import BasePage from './BasePage.js';

class CalculatorPage extends BasePage {
  async addTwoNumbers(a, b) {
    await this.driver
      .waitForElementByXPath(`//android.widget.Button[@resource-id="com.motorola.cn.calculator:id/digit_${a}"]`, 5000)
      .click();

    await this.driver.waitForElementByAccessibilityId("plus", 5000).click();

    await this.driver
      .waitForElementByXPath(`//android.widget.Button[@resource-id="com.motorola.cn.calculator:id/digit_${b}"]`, 5000)
      .click();

    await this.driver.waitForElementByAccessibilityId("equals", 5000).click();
  }

  async getResult() {
    const element = await this.driver.waitForElementById(
      "com.motorola.cn.calculator:id/formula_or_result",
      5000
    );
    return await element.text();
  }


  async subtractTwoNumbers(a, b) {
    await this.driver
      .waitForElementByXPath(`//android.widget.Button[@resource-id="com.motorola.cn.calculator:id/digit_${a}"]`, 5000)
      .click();

    await this.driver.waitForElementByAccessibilityId("minus", 5000).click();

    await this.driver
      .waitForElementByXPath(`//android.widget.Button[@resource-id="com.motorola.cn.calculator:id/digit_${b}"]`, 5000)
      .click();

    await this.driver.waitForElementByAccessibilityId("equals", 5000).click();
  }

  async multiplyTwoNumbers(a, b) {
    await this.driver
      .waitForElementByXPath(`//android.widget.Button[@resource-id="com.motorola.cn.calculator:id/digit_${a}"]`, 5000)
      .click();

    await this.driver.waitForElementByAccessibilityId("times", 5000).click();

    await this.driver
      .waitForElementByXPath(`//android.widget.Button[@resource-id="com.motorola.cn.calculator:id/digit_${b}"]`, 5000)
      .click();

    await this.driver.waitForElementByAccessibilityId("equals", 5000).click();
  }

  async divideTwoNumbers(a, b) {
    await this.driver
      .waitForElementByXPath(`//android.widget.Button[@resource-id="com.motorola.cn.calculator:id/digit_${a}"]`, 5000)
      .click();

    await this.driver.waitForElementByAccessibilityId("divide", 5000).click();

    await this.driver
      .waitForElementByXPath(`//android.widget.Button[@resource-id="com.motorola.cn.calculator:id/digit_${b}"]`, 5000)
      .click();

    await this.driver.waitForElementByAccessibilityId("equals", 5000).click();
  }

  async divideTwoNumbersZero(a, b) {
    await this.driver.waitForElementByXPath(`//android.widget.Button[@resource-id="com.motorola.cn.calculator:id/digit_${a}"]`, 5000)
      .click();

    await this.driver.waitForElementByAccessibilityId("divide", 5000).click();

    await this.driver.waitForElementByXPath(`//android.widget.Button[@resource-id="com.motorola.cn.calculator:id/digit_${b}"]`, 5000)
      .click();

    await this.driver.waitForElementByAccessibilityId("equals", 5000).click();
  }
}
export default CalculatorPage;
