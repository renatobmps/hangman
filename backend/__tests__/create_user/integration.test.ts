import { ok, rejects } from "node:assert";
import { describe, it } from "node:test";
import { createUserService } from "./__mock__.ts";
import {
  CreateUserRepositoryIM,
  MOCK_CREATE_USER_SERVICE_USER_DATA,
} from "./__dto__.ts";
import CreateUserService from "../../src/services/create_user.service.ts";

import { CreateUserValidation } from "../../src/entities/create_user_validation.ts";
import EncryptPasswordService from "../../src/services/encrypt_password.service.ts";

describe("CreateUserService integration", () => {
  describe("repository", () => {
    const arrange = new CreateUserService({
      ...createUserService,
      repository: new CreateUserRepositoryIM(),
    });

    it("should to integrate with in memory repository", async () => {
      const act = await arrange.execute(MOCK_CREATE_USER_SERVICE_USER_DATA);

      ok(act.id);
    });

    it("should to have a duplicate on in memory database", async () => {
      const act = arrange.execute(MOCK_CREATE_USER_SERVICE_USER_DATA);

      rejects(() => act);
    });
  });

  it("should to integrate with validation service", async () => {
    const arrange = new CreateUserService({
      ...createUserService,
      validation: new CreateUserValidation(),
    });

    const act = await arrange.execute(MOCK_CREATE_USER_SERVICE_USER_DATA);

    ok(act.id);
  });

  it("should to integrate with encrypt service", async () => {
    const arrange = new CreateUserService({
      ...createUserService,
      encryptService: new EncryptPasswordService(),
    });

    const act = await arrange.execute(MOCK_CREATE_USER_SERVICE_USER_DATA);

    ok(act.id);
  });
});
