import { expect } from "chai";
import { initDriver, quitDriver } from "../utils/driver.js";
import CalculatorPage from "../pages/CalculatorPage.js";

describe("Motorola Calculator Tests", () => {
  let driver;
  let calculatorPage;

  before(async () => {
    driver = await initDriver();
    calculatorPage = new CalculatorPage(driver);
  });

  after(async () => {
    await quitDriver();
  });

  it("should add 2 + 3 correctly", async () => {
    await calculatorPage.addTwoNumbers(2, 3);
    const result = await calculatorPage.getResult();
    expect(result).to.equal("5");
  });
});