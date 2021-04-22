import fs from "fs";
import util from "util";
import path from "path";

const readdir = util.promisify(fs.readdir);

let componentsNames = null;
let viewComponentsNames = null;

export async function getViewComponentsNames() {
  if (!componentsNames) {
    componentsNames = await readdir(path.join(__dirname, "components"));
  }
  if (!viewComponentsNames) {
    viewComponentsNames = componentsNames.filter((el) => el.startsWith("View"));
  }
  return viewComponentsNames;
}

export default {
  getViewComponentsNames
};
