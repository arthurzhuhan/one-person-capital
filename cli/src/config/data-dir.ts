import path from "node:path";
import {
  expandHomePrefix,
  resolveDefaultConfigPath,
  resolveDefaultContextPath,
  resolveOnePersonCapitalInstanceId,
} from "./home.js";

export interface DataDirOptionLike {
  dataDir?: string;
  config?: string;
  context?: string;
  instance?: string;
}

export interface DataDirCommandSupport {
  hasConfigOption?: boolean;
  hasContextOption?: boolean;
}

export function applyDataDirOverride(
  options: DataDirOptionLike,
  support: DataDirCommandSupport = {},
): string | null {
  const rawDataDir = options.dataDir?.trim();
  if (!rawDataDir) return null;

  const resolvedDataDir = path.resolve(expandHomePrefix(rawDataDir));
  process.env.ONE_PERSON_CAPITAL_HOME = resolvedDataDir;

  if (support.hasConfigOption) {
    const hasConfigOverride = Boolean(options.config?.trim()) || Boolean(process.env.ONE_PERSON_CAPITAL_CONFIG?.trim());
    if (!hasConfigOverride) {
      const instanceId = resolveOnePersonCapitalInstanceId(options.instance);
      process.env.ONE_PERSON_CAPITAL_INSTANCE_ID = instanceId;
      process.env.ONE_PERSON_CAPITAL_CONFIG = resolveDefaultConfigPath(instanceId);
    }
  }

  if (support.hasContextOption) {
    const hasContextOverride = Boolean(options.context?.trim()) || Boolean(process.env.ONE_PERSON_CAPITAL_CONTEXT?.trim());
    if (!hasContextOverride) {
      process.env.ONE_PERSON_CAPITAL_CONTEXT = resolveDefaultContextPath();
    }
  }

  return resolvedDataDir;
}
