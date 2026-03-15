import fs from "node:fs";
import { onePersonCapitalConfigSchema, type OnePersonCapitalConfig } from "@one-person-capital/shared";
import { resolveOnePersonCapitalConfigPath } from "./paths.js";

export function readConfigFile(): OnePersonCapitalConfig | null {
  const configPath = resolveOnePersonCapitalConfigPath();

  if (!fs.existsSync(configPath)) return null;

  try {
    const raw = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    return onePersonCapitalConfigSchema.parse(raw);
  } catch {
    return null;
  }
}
