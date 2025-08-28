import wd from "wd";
import { caps } from "../../config/capabilities.js";

let driver; 

export async function initDriver() {
  driver = wd.promiseChainRemote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/wd/hub"
  });

  await driver.init(caps);
  return driver;
}

export async function quitDriver() {
  if (driver) {
    await driver.quit();
    driver = null;
  }
}
