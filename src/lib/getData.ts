import fs from "fs";
import path from "path";

export const getData = () => {
  const filePath = path.join(process.cwd(), "src", "public", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
};
