import { describe, expect, it } from "vitest";
import {
  CURRENT_USER_REDACTION_TOKEN,
  redactCurrentUserText,
  redactCurrentUserValue,
} from "../log-redaction.js";

describe("log redaction", () => {
  it("redacts the active username inside home-directory paths", () => {
    const userName = "one_person_capitaluser";
    const input = [
      `cwd=/Users/${userName}/one_person_capital`,
      `home=/home/${userName}/workspace`,
      `win=C:\\Users\\${userName}\\one_person_capital`,
    ].join("\n");

    const result = redactCurrentUserText(input, {
      userNames: [userName],
      homeDirs: [`/Users/${userName}`, `/home/${userName}`, `C:\\Users\\${userName}`],
    });

    expect(result).toContain(`cwd=/Users/${CURRENT_USER_REDACTION_TOKEN}/one_person_capital`);
    expect(result).toContain(`home=/home/${CURRENT_USER_REDACTION_TOKEN}/workspace`);
    expect(result).toContain(`win=C:\\Users\\${CURRENT_USER_REDACTION_TOKEN}\\one_person_capital`);
    expect(result).not.toContain(userName);
  });

  it("redacts standalone username mentions without mangling larger tokens", () => {
    const userName = "one_person_capitaluser";
    const result = redactCurrentUserText(
      `user ${userName} said ${userName}/project should stay but aone_person_capitaluserz should not change`,
      {
        userNames: [userName],
        homeDirs: [],
      },
    );

    expect(result).toBe(
      `user ${CURRENT_USER_REDACTION_TOKEN} said ${CURRENT_USER_REDACTION_TOKEN}/project should stay but aone_person_capitaluserz should not change`,
    );
  });

  it("recursively redacts nested event payloads", () => {
    const userName = "one_person_capitaluser";
    const result = redactCurrentUserValue({
      cwd: `/Users/${userName}/one_person_capital`,
      prompt: `open /Users/${userName}/one_person_capital/ui`,
      nested: {
        author: userName,
      },
      values: [userName, `/home/${userName}/project`],
    }, {
      userNames: [userName],
      homeDirs: [`/Users/${userName}`, `/home/${userName}`],
    });

    expect(result).toEqual({
      cwd: `/Users/${CURRENT_USER_REDACTION_TOKEN}/one_person_capital`,
      prompt: `open /Users/${CURRENT_USER_REDACTION_TOKEN}/one_person_capital/ui`,
      nested: {
        author: CURRENT_USER_REDACTION_TOKEN,
      },
      values: [CURRENT_USER_REDACTION_TOKEN, `/home/${CURRENT_USER_REDACTION_TOKEN}/project`],
    });
  });
});
