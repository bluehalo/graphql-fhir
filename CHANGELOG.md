# 1.0.0 (2019-01-09)


### Bug Fixes

* fixed issues with filenames in newly generated code ([77e7a6b](https://github.com/Asymmetrik/graphql-fhir/commit/77e7a6b))


### Features

* Added support for automatic changleog generation ([2fe0f75](https://github.com/Asymmetrik/graphql-fhir/commit/2fe0f75))
* Added support for R4 resources and environment setup ([686a764](https://github.com/Asymmetrik/graphql-fhir/commit/686a764))


### BREAKING CHANGES

* New resources contain new dependencies. One of these
contains graphql which may require you to delete and reinstall node
modules. We have updated several versions so when updating, you should
rerun yarn install and may need to remove node_modules before hand.



