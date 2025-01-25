# Hangman Backend

Firs of all, the project was made using **`node v22.11.0`**, so is recommended to use the same version to have no compatibility problems.

## First run

The backend depends on the PostgreSQL database. If you are in local environment, you can run a Docker image of PostgreSQL and sets `DATABASE_URL` value on `.env` file.

### starting
Before starts the server, you will need update you setted database, to do it, you should to create the Prisma structure running ```npm run db:generate``` and you will need to run migrations to persist the modifications made during the development, running ```npm run db:migrate:dev```.

### seeding
The database will starts empty, but if you want to populate it and see the effects on application, you can seed the database with ```npm run db:seed```. This will field the database with mocked data, but you can use production database as base setting `SEED_DATABASE_URL` value on `.env` to mirror the more updated database.

### seeing data
Prisma has an studio that you can use as SGDB to see, filter and modify database and to run it, you can use ```npm run db:studio```.


## Security
To improve password protection, you can set a secret value to `HASH_SALT` on `.env` to enforce the password hashing algorithm.

## Deploy

### lint
This project don't have a lint configuration yet

### test
The project use only node to run tests, as you as using the correct node version, you can run it with ```npm run test``` to see test result and coverage information.

### building
To build the project, we are using `tsc`, and you can run it with ```npm run build```.