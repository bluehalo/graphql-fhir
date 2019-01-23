# [1.0.0](https://github.com/Asymmetrik/graphql-fhir/compare/74986a8...v1.0.0) (2019-01-11)


### Features

* new resources ([#17](https://github.com/Asymmetrik/graphql-fhir/issues/17)) ([74986a8](https://github.com/Asymmetrik/graphql-fhir/commit/74986a8))


### BREAKING CHANGES

* New resources contain new dependencies. One of these
contains graphql which may require you to delete and reinstall node
modules. We have updated several versions so when updating, you should
rerun yarn install and may need to remove node_modules before hand.
