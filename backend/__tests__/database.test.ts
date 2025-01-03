import { describe, it } from 'node:test';
import assert from 'node:assert';
import { sutName } from './utils/tests.consts.ts';
import { db } from '../src/lib/db.ts';

describe('databaseConnection', () => {
  it('should to run an query', async () => {
    const tables = await db().$queryRaw`SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname='public'`;

    assert.strictEqual(Array.isArray(tables), true);
  });

  it('should to do a create', async () => {
    assert.doesNotThrow(async () => await db().hint.create({
      data: { text: sutName, is_activated: true }
    }))
  })

  it('should to read', async () => {
    assert.doesNotThrow(async () => await db().hint.findFirstOrThrow({ where: { text: sutName } }));
  })

  it('should to update', async () => {
    assert.doesNotThrow(async () => await db().hint.updateMany({ data: { is_activated: false, updated_at: new Date() }, where: { text: sutName } }))
  });

  it('should to delete', async () => {
    assert.doesNotThrow(async () => await db().hint.deleteMany({ where: { text: sutName } }))
  })
})