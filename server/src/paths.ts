import fs from "node:fs";
import path from "node:path";
import { resolveDefaultConfigPath } from "./home-paths.js";

const ONE_PERSON_CAPITAL_CONFIG_BASENAME = "config.json";
const ONE_PERSON_CAPITAL_ENV_FILENAME = ".env";

function findConfigFileFromAncestors(startDir: string): string | null {
  const absoluteStartDir = path.resolve(startDir);
  let currentDir = absoluteStartDir;

  while (true) {
    const candidate = path.resolve(currentDir, ".one_person_capital", ONE_PERSON_CAPITAL_CONFIG_BASENAME);
    if (fs.existsSync(candidate)) {
      return candidate;
    }

    const nextDir = path.resolve(currentDir, "..");
    if (nextDir === currentDir) break;
    currentDir = nextDir;
  }

  return null;
}

export function resolveOnePersonCapitalConfigPath(overridePath?: string): string {
  if (overridePath) return path.resolve(overridePath);
  if (process.env.ONE_PERSON_CAPITAL_CONFIG) return path.resolve(process.env.ONE_PERSON_CAPITAL_CONFIG);
  return findConfigFileFromAncestors(process.cwd()) ?? resolveDefaultConfigPath();
}

export function resolveOnePersonCapitalEnvPath(overrideConfigPath?: string): string {
  return path.resolve(path.dirname(resolveOnePersonCapitalConfigPath(overrideConfigPath)), ONE_PERSON_CAPITAL_ENV_FILENAME);
}
