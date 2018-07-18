## Issues

We use GitHub issues to track bugs, request's for change, and questions. Please open an issue if you encounter any of those and try to follow the issue template as best as you can. We will reply to you as soon as possible.

## Pull Requests

All active development for graphql-fhir happens here on GitHub. We welcome all [pull requests](https://help.github.com/articles/creating-a-pull-request/).

1. Fork the repo and create your branch from `master`, unless you are working with us on some of our staging features which are currently in the `develop` branch.
2. If you are adding code, please add tests if applicable. We do look at code coverage.
3. Make sure any code passes our Coding style guidelines defined below.
4. If your code affects anything that is mentioned in our documentation, please update the relevant documentation.
5. Run `yarn test --coverage` before submitting your pull request back to the branch you branched off of.

## Coding Style

Code style is governed by eslint and our `.editorconfig`. Please make sure that the editor you are using supports `.editorconfig` files. ESLint runs on all non-generated code. So anything under the `src` directory but not inside `src/resources` directory. You can run `yarn lint` to see any incompatibilities.

Resources are generated using an internal tool and generate boilerplate which will have unused vars and other minor issues. They will not currently and ever pass the linter. When you fork this starter server, you should implement the resolver's and fix any lingering issues in your own project.

Some additional things we like to try to adhere to are:

* Avoid abbreviations, use verbose names so people reading the code know your intentions.
* Add comments to your code where appropriate.
* Try to keep lines under 80 characters.
* Prefer multiline ternaries
    ```javascript
    let value = someCondition
        ? columnA
        : columnB;
    ```

## License

By contributing to Asymmetrik's graphql-fhir repo, you agree that your contributions will be licensed under the MIT license.
