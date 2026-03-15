import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  describeLocalInstancePaths,
  expandHomePrefix,
  resolveOnePersonCapitalHomeDir,
  resolveOnePersonCapitalInstanceId,
} from "../config/home.js";

const ORIGINAL_ENV = { ...process.env };

describe("home path resolution", () => {
  afterEach(() => {
    process.env = { ...ORIGINAL_ENV };
  });

  it("defaults to ~/.one_person_capital and default instance", () => {
    delete process.env.ONE_PERSON_CAPITAL_HOME;
    delete process.env.ONE_PERSON_CAPITAL_INSTANCE_ID;

    const paths = describeLocalInstancePaths();
    expect(paths.homeDir).toBe(path.resolve(os.homedir(), ".one_person_capital"));
    expect(paths.instanceId).toBe("default");
    expect(paths.configPath).toBe(path.resolve(os.homedir(), ".one_person_capital", "instances", "default", "config.json"));
  });

  it("supports ONE_PERSON_CAPITAL_HOME and explicit instance ids", () => {
    process.env.ONE_PERSON_CAPITAL_HOME = "~/one_person_capital-home";

    const home = resolveOnePersonCapitalHomeDir();
    expect(home).toBe(path.resolve(os.homedir(), "one_person_capital-home"));
    expect(resolveOnePersonCapitalInstanceId("dev_1")).toBe("dev_1");
  });

  it("rejects invalid instance ids", () => {
    expect(() => resolveOnePersonCapitalInstanceId("bad/id")).toThrow(/Invalid instance id/);
  });

  it("expands ~ prefixes", () => {
    expect(expandHomePrefix("~")).toBe(os.homedir());
    expect(expandHomePrefix("~/x/y")).toBe(path.resolve(os.homedir(), "x/y"));
  });
});
