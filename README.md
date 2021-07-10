# cra-template-soleil-airtable

This is [@soleilyasmina](https://github.com/soleilyasmina)'s custom Create React App template, for spinning up quick Airtable applications.

## Usage

When using `npx create-react-app`, add `--template soleil-airtable`, such as:
```sh
npx create-react-app my-app --template soleil-airtable
```

## Setup

There are two environment variables referenced in this application: `REACT_APP_AIRTABLE_BASE` and `REACT_APP_AIRTABLE_KEY`. These should be created in the `.env.development.local` file. A sample one is provided in the `env.development.local` file (make sure to add the `.` in front before committing to ensure it is ignored).

This was made by referencing the original [cra-template](https://github.com/facebook/create-react-app/tree/master/packages/cra-template).

