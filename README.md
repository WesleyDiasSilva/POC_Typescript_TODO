# TODO-Typescript

Back-end for todo-list, a poc for testing my knowledge in typescript.

## About

This todo-list was created for testing my knowledge in typescript, and prisma orm, it's simple application.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

After that, change in your .env the field DATABASE_URL for "postgresql://user:password@localhost:5432/dbname?schema=public",

Change user, password and dbname.

Then run this command:

```bash
npx prisma migrate dev
```

And after, run this command:

```bash
npm run dev
```

# How use - Routes


## Create task

You can use method post in route http://localhost:5000/tasks

With body in format: 

{
  "name":"task_name",
  "priority":"high",
  finished: true
}

The field priority must only be "high", "medium" or "low".

And the field finished, can be true, false, or you may not send.

## Get tasks

You can use method get in route http://localhost:5000/tasks

With this method, you will receive all the tasks.

## Delete task

You can use method delete in route http://localhost:5000/tasks/:id

The field "id" in url, it's need to change for an id valid in database.

With this route, you may delete a task.

## Edit task

You can use method put in route http://localhost:5000/tasks/:id

The field "id" in url, it's need to change for an id valid in database.

With this route, you may edit a task.

You must send a body like the route post, you can change name, priotiry and finished, according to the rules.