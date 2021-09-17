## [1.3.1](https://github.com/Asymmetrik/graphql-fhir/compare/1.2.4...1.3.1) (2021-09-17)

### Bug Fixes

- update deps ([35a2e9a](https://github.com/Asymmetrik/graphql-fhir/commit/35a2e9ad3a9d91e96238e20f40dc26428864a635))

## [1.3.0](https://github.com/Asymmetrik/graphql-fhir/compare/1.3.0...1.2.4) (2021-09-15)

### Update Dependencies

- upgrade to graphql 15.5.3
  ** formatError to customFormatErrorFn
  ** coerceValue to coerceInputValue

TODO REMEMBER to add the following package back in before merge

- "@asymmetrik/sof-graphql-invariant": "^1.0.2"
- "@asymmetrik/sof-strategy": "^1.0.2"

## [1.2.4](https://github.com/Asymmetrik/graphql-fhir/compare/1.2.3...1.2.4) (2019-08-20)

### Bug Fixes

- updated package containing vulnerability ([0d99acd](https://github.com/Asymmetrik/graphql-fhir/commit/0d99acd))
- upgrade packages ([#30](https://github.com/Asymmetrik/graphql-fhir/issues/30)) ([5cd0619](https://github.com/Asymmetrik/graphql-fhir/commit/5cd0619))

## [1.2.3](https://github.com/Asymmetrik/graphql-fhir/compare/v1.2.2...v1.2.3) (2019-05-21)

## [1.2.2](https://github.com/Asymmetrik/graphql-fhir/compare/v1.2.1...v1.2.2) (2019-04-02)

## [1.2.1](https://github.com/Asymmetrik/graphql-fhir/compare/v1.2.0...v1.2.1) (2019-03-22)

# [1.2.0](https://github.com/Asymmetrik/graphql-fhir/compare/v1.1.0...v1.2.0) (2019-03-22)

### Features

- docker ([#23](https://github.com/Asymmetrik/graphql-fhir/issues/23)) ([af7bfa3](https://github.com/Asymmetrik/graphql-fhir/commit/af7bfa3))
- enabled healthcheck for ALB in AWS healthchecks ([#24](https://github.com/Asymmetrik/graphql-fhir/issues/24)) ([0d05919](https://github.com/Asymmetrik/graphql-fhir/commit/0d05919))

# [1.1.0](https://github.com/Asymmetrik/graphql-fhir/compare/v1.0.1...v1.1.0) (2019-02-08)

### Features

- sof strategy from phx tools ([#22](https://github.com/Asymmetrik/graphql-fhir/issues/22)) ([41e37c1](https://github.com/Asymmetrik/graphql-fhir/commit/41e37c1))

## [1.0.1](https://github.com/Asymmetrik/graphql-fhir/compare/v1.0.0...v1.0.1) (2019-01-23)

### Bug Fixes

- Fix issue with ResourceList resolver ([#20](https://github.com/Asymmetrik/graphql-fhir/issues/20)) ([6826b37](https://github.com/Asymmetrik/graphql-fhir/commit/6826b37)), closes [#19](https://github.com/Asymmetrik/graphql-fhir/issues/19)

# [1.0.0](https://github.com/Asymmetrik/graphql-fhir/compare/74986a8...v1.0.0) (2019-01-11)

### Features

- new resources ([#17](https://github.com/Asymmetrik/graphql-fhir/issues/17)) ([74986a8](https://github.com/Asymmetrik/graphql-fhir/commit/74986a8))

### BREAKING CHANGES

- New resources contain new dependencies. One of these
  contains graphql which may require you to delete and reinstall node
  modules. We have updated several versions so when updating, you should
  rerun yarn install and may need to remove node_modules before hand.
