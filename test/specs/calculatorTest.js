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

  it("should subtract 9 - 4 correctly", async () => {
  await calculatorPage.subtractTwoNumbers(9, 4);
  const result = await calculatorPage.getResult();
  expect(result).to.equal("5");
});

it("should multiply 6 * 7 correctly", async () => {
  await calculatorPage.multiplyTwoNumbers(6, 7);
  const result = await calculatorPage.getResult();
  expect(result).to.equal("42");
});

it("should divide 8 ÷ 2 correctly", async () => {
  await calculatorPage.divideTwoNumbers(8, 2);
  const result = await calculatorPage.getResult();
  expect(result).to.equal("4");
});
});