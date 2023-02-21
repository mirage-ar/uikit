## The Project

This is the Mirage UI Kit library. This project is intended to streamline the processs of building web projects by normalizing all of the web components.

- - - - 
## To edit the UI Kit

1. Use the command _npm install_ to install all packages and dependencies

2. To open the development server run _npm run dev_. This will open on your localhost branch

3. This project utilizes [Storybook](https://storybook.js.org/) to open storybook run the command _npm run storybook_

- - - -

## Usage

To begin with, we need to let npm know that any projects prefixed with _@mirage-ar_ need to pull from GitHub Packages and not npm. To do so folow these simple steps:

1. Generate a new `.npmrc` file scoped to the same level as your `package.json` file.

2. Within this create a new line and input `@mirage-ar:registry=https://npm.pkg.github.com`

Now to install the package to a project follow the listed steps:

1. Login to GitHub on the web, and [generate-a-new-token](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with the read/ write packages permissions. This needs to be a _classic_ token.

2. In the project you are adding the UI Kit to, run `$ npm login --scope=@mirage-ar --registry=https://npm.pkg.github.com`.

3. Here you will input your username, the classic auth token you generated, and a public email address.

4. Once you eneter the required details, a temporary access code will be sent to the public email provided. Input this public access code to authorize with [GitHub-Packages](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages).

5. Congratulations! You should now be able to run `npm install` and begin using the Mirage UI Kit.

- - - - 
## Packages

* [Storybook](https://storybook.js.org/ "Storybook")
* [Next](https://nextjs.org/ "Next")
