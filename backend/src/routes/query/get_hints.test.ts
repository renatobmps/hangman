import { describe, it } from "node:test";
import { apiRequest } from "../../../__tests__/utils/api_request.ts";
import assert from "node:assert";

describe('get hints', () => {
  describe('e2e', () => {
    it('should return all hints', async () => {
      const request = await apiRequest<{ getHints: Array<{ id?: string }> }>(`
          query {
            getHints {
              id
            }
          }
      `);

      assert.strictEqual(request.statusCode, 200);
      assert.ok(request.data);
      assert.ok(request.data.getHints);
      assert.equal(Array.isArray(request.data.getHints), true);
      assert.equal(request.data.getHints.every(({ id }) => typeof id === 'string'), true);
    })
  })
});