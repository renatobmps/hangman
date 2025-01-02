import assert from "node:assert";
import { after, describe, it } from "node:test";
import { apiRequest } from "./utils/api_request.ts";
import { CreateUserController } from "../src/controllers/create_user_controller.ts";
import { CreateUserRepositoryIM } from "../src/entities/create_user_repository_IM.ts";
import { CreateUserValidation } from "../src/entities/create_user_validation.ts";
import clearDatabase from "./utils/clear_database.ts";
import { CreateUserEncryptService } from "../src/entities/create_user_encrypt_service.ts";

after(async () => {
  await clearDatabase();
})

describe('Create user', async () => {
  it('should work with mock route', async () => {
    const request = await apiRequest(`
      mutation {
        mockCreateUser(name: "system_under_test_username") {
          id
          name
        }
      }
    `);

    assert.strictEqual(request.statusCode, 200);
    assert.ok(request.data);
  })

  it('should to use controller', async () => {
    const createUserController = new CreateUserController(
      new CreateUserRepositoryIM(),
      new CreateUserValidation(),
      new CreateUserEncryptService(),
    );

    const newUser = await createUserController.execute({
      username: 'username_test',
      password: 'password_test',
      email: 'email_test@example.com'
    });

    assert.ok(newUser.id);
  })

  it('should work with non mock route', async () => {
    const request = await apiRequest(`
      mutation {
        createUser(username: "system_under_test_username_${Math.ceil(Math.random() * 1024)}", password: "system_under_test_password", email: "text@example.com")
      }
    `);

    assert.strictEqual(request.statusCode, 200);
    assert.ok(request.data);
  });
})