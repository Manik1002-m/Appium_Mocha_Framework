import wd from "wd";
import { caps } from "../../config/capabilities.js";


const driver = wd.promiseChainRemote({
  protocol: "http",
  hostname: "127.0.0.1",
  port: 4723,
  path: "/wd/hub" 
});

export async function initDriver() {
  await driver.init(caps);
  return driver;
}

export async function quitDriver() {
  if (driver) {
    await driver.quit();
  }
}

export default driver;
