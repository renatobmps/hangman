import { deepEqual } from "assert";
import { describe, it } from "node:test";
import UsernameHelper from "../../src/helpers/username.helper.ts"
import { INVALID, VALID } from "./__dto__.ts";

describe("UsernameHelper", () => {
  it('should to pass', () => {
    VALID.forEach(value => deepEqual(new UsernameHelper(value).check(), true));
  })

  it('should to fail', () => {
    INVALID.forEach(value => deepEqual(new UsernameHelper(value.text).check(), false));
  })

  it('should to convert properly', () => {
    INVALID.forEach(value => deepEqual(new UsernameHelper(value.text).convert(), value.expect));
  })
})