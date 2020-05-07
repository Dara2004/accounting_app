# Automating the hardest part of our stack

#### ~~i.e. manually writing gql queries and~~ creating associated types for TypeScript

## 1. Each Time: Generate up-to-date .graphql schema using Postgraphile

    npx postgraphile -c postgres://postgres:Daranguyen123@esolife-db.cxsjmdonynge.ap-southeast-1.rds.amazonaws.com:5432/accounting_app -o --watch --host 0.0.0.0 --port 5000 --export-schema-graphql ./accounting_app_schema.graphql

### 1a. Making this easier: add it as a script to package.json (example)

One time:

    "scripts": {
        (other scripts)
        "gen": "npx postgraphile -c postgres://postgres:Daranguyen123@esolife-db.cxsjmdonynge.ap-southeast-1.rds.amazonaws.com:5432/accounting_app -o --watch --host 0.0.0.0 --port 5000 --export-schema-graphql ./accounting_app_schema.graphql"
    },

Then each time:

    yarn gen

## 2. One Time: Install GraphQL Code Generator

It can generate:

- Custom React hooks
- TypeScript types

        yarn global add @graphql-codegen/cli
        yarn global add graphql

Maybe can add it as dev dependency but why not just add it globally

## 3. Run GraphQL Code Generator

    graphql-codegen init

This asks us some questions which we will answer.

At the end of it, it changes our pacakage.json to add dependencies and an npm / yarn command.

# The Improved Workflow

### 1. Change postgres database schema (DataGrip)

### 2. Run command to use PostGraphile to regenerate GraphQL schema file

### 3. Use GraphiQL to create desired GraphQL query/mutation

### 4. Copy paste it into a .graphql file directly in the right folder (/queries folder in this case)

### 5. Run command to generate Custom Typescript Types and Apollo Client React Hooks

### 6. Use the hook in a React component! It comes with generated documentation and code example to copy paste.
