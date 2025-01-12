import { after, describe, it } from "node:test";
import { createUser } from "./create_user.ts";
import { MOCK_CREATE_USER_USE_CASE_USER } from "../../__tests__/mocks/use_cases/create_user.ts";
import assert from "node:assert";
import clearDatabase from "../../__tests__/utils/clear_database.ts";

after(async () => {
  await clearDatabase();
});

describe('createUser', () => {
  it('should to create a user', async () => {
    const newUser = await createUser(MOCK_CREATE_USER_USE_CASE_USER);

    assert.ok(newUser.id);
  });
});
