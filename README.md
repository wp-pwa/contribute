# Frontity - Contribution Guidelines

Thank you for thinking about contributing to a Frontity project!

These are the different steps needed to contribute to a Frontity project.

[![Build Status](https://travis-ci.org/frontity/contribute.svg?branch=master)](https://travis-ci.org/frontity/contribute)

## Contribution worflow

#### 1. Open an issue

First, open an issue in the relevant repository. Use the issue template to fill the required fields.

While posting the issue, keep these notes in mind:
- Try to add as much detail as possible. Be specific!
- If you're requesting a new feature, explain why you'd like it to be added.
- Search this repository for issues and pull requests and whether it has been fixed or reported already.
- Ensure you are using the latest code before logging bugs.
- Disable all WordPress plugins and/or Frontity extensions to ensure it's not a conflict issue.

#### 2. Fork the repository and create a branch

Use GitHub to fork the repository (or repositories). Create a branch for your pull request. The name should start with the issue number. For example, if the issue is `#17`, the branch should be something like `17-add-this-new-cool-feature` or `17-fix-this-ugly-bug`.

#### 3. Clone the repo and setup the local environment

Clone your fork and follow the **Local Environment** instructions of that repository. It's possible that you need to clone other repositories in order to make it work. For example, if you want to contribute to a specific package, you'll need to clone `core` first, then clone your fork into the `packages` folder.

#### 4. Make code changes and commit! :tada:

The fun part. Make some code changes and commit them to your newly created branch.

##### Testing

Remember to add tests for all the files you create/modify. We use the [jest](https://facebook.github.io/jest/) framework.

##### Commit convention

We follow the [Angular Conventional Changelog](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) for commits. Please, review it before commiting.

To make your life easier, you can use `npm run cz` instead of `git commit`. That will launch [commitizen](http://commitizen.github.io/cz-cli/) with the configuration we use, so you just have to answer to its questions.

##### Commit hooks

Be aware that we also use [husky](https://github.com/typicode/husky) to run tests and linting before validating a commit. If tests don't pass, or the commit message doesn't follow the *Angular Convential Changelog* the commit will fail.

#### 5. Push the branch to your forked repository

Once you're done coding (or think you're done) push the branch to your forked repository. Don't worry if it's not finished yet. You can add more commits latter.

#### 6. Submit a pull request to the original repository

In the PR description, mention the original issue. For example: `Fixes #17` or `Close #17`. Any [Github closing keyword](https://help.github.com/articles/closing-issues-using-keywords/) is valid.

#### 7. Wait for the review and the merge

That's it! Now you just need to wait for a Frontity member to review your PR. She may comment on additional changes needed, or approve and merge the PR right away.

## Starting a new Frontity project

If you are starting a new project for the Frontity org, please use this repository as reference for all the configuration files.

You should also include a `CONTRIBUTING.md` file pointing to this `README.md`.

## License

All Node/JS Frontity projects are licensed under the Apache 2.0 license, and all contributions will be released under the Apache 2.0 license. You maintain copyright over any contribution you make, and by submitting a pull request, you are agreeing to release that contribution under the Apache 2.0 license.

All Wordpress/PHP Frontity projects are licensed under the GPLv3 license, and all contributions will be released under the GPLv3 license. You maintain copyright over any contribution you make, and by submitting a pull request, you are agreeing to release that contribution under the GPLv3 license.
