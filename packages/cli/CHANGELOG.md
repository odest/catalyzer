# Changelog

## [0.1.2](https://github.com/odest/catalyzer/compare/create-catalyzer@v0.1.1...create-catalyzer@v0.1.2) (2026-06-17)


### Features

* migrate from eslint and prettier to ultracite and biome ([#74](https://github.com/odest/catalyzer/issues/74)) ([8bfc157](https://github.com/odest/catalyzer/commit/8bfc1579f66796f0060abf15e7fc06fa59415d35))

## [0.1.1](https://github.com/odest/catalyzer/compare/create-catalyzer@v0.1.0...create-catalyzer@v0.1.1) (2026-06-08)


### Documentation

* **cli:** Add AGENTS.md template and generate file during scaffold ([18306e7](https://github.com/odest/catalyzer/commit/18306e7ca47a51d299dbc51bdd3b2639aaaa1bad))

## [0.1.0](https://github.com/odest/catalyzer/compare/create-catalyzer@v0.0.1...create-catalyzer@v0.1.0) (2026-05-10)


### ⚠ BREAKING CHANGES

* The CLI tool @tntstack/create-app is now deprecated and replaced by create-catalyzer. Native bundle identifiers, internal package names, and repository URLs have completely changed

### Features

* **cli:** add interactive @tntstack/create scaffolding tool ([b39ae89](https://github.com/odest/catalyzer/commit/b39ae896b8bb7c5c0f51df07539f89b0fbd3c7cb))
* **cli:** add shadow templates and scaffold content cleanup ([9c15047](https://github.com/odest/catalyzer/commit/9c15047bab89b23a7a570e4da9a81919575e9413))
* **cli:** support apple directory and file renaming during scaffold ([d8beab1](https://github.com/odest/catalyzer/commit/d8beab1df1be3f93c9d4335e4e5cff5956b6549e))
* **packages/cli:** add base scaffolding tool structure ([56f90f7](https://github.com/odest/catalyzer/commit/56f90f733365ace9bb88f2844a7a8a8c1fc6b204))
* rebrand project from tntstack to catalyzer ([37ef188](https://github.com/odest/catalyzer/commit/37ef188d641c7662964007dcb2c66a170557e0e4))


### Bug Fixes

* **cli:** auto-inject version and add identifier validation ([1be815d](https://github.com/odest/catalyzer/commit/1be815d778cb8b0134afa0d92ab40f18ed495492))
* **cli:** fix typo in README ([95d4d95](https://github.com/odest/catalyzer/commit/95d4d95560e2ee29b6b6158fc68f5c572e94253c))
* **cli:** improve scaffold UX, error recovery, and template versioning ([657cf1e](https://github.com/odest/catalyzer/commit/657cf1e8c1ce43fd2c1f18c701d215b60f04a34e))
* **cli:** resolve 404 error on npm publish by adding publishConfig ([4251e18](https://github.com/odest/catalyzer/commit/4251e1832922d665f28c8a851841c940e1a6ff8c))


### Documentation

* **cli:** add a deprecation warning and migration information to the README ([10a03e3](https://github.com/odest/catalyzer/commit/10a03e3434abf8e6bf894d9afb4aacef761c934f))
* **cli:** Add package metadata and README for CLI scaffolding ([d73ad2a](https://github.com/odest/catalyzer/commit/d73ad2a8456bef2c4f80d87575cf376097ee4dba))
* **cli:** update README with new flags and configuration step ([0ac8e13](https://github.com/odest/catalyzer/commit/0ac8e134777a5509c793f25290c43f1297ae66c1))
* Update license to MIT and adjust docs ([abf9340](https://github.com/odest/catalyzer/commit/abf9340faf121a79f8a545500bdabaf8c3a0ed35))


### Styles

* enforce global formatting with new prettier rules ([5db1510](https://github.com/odest/catalyzer/commit/5db1510fb75e05de9588d69f9ff05da99400b730))


### Code Refactoring

* **cli:** modularize renaming logic and transition to targeted metadata updates ([e9fc6f0](https://github.com/odest/catalyzer/commit/e9fc6f00c40c495b4cffa29b33565d8154ba9006))
* **scripts:** unify lint scripts and update ts version ([c1e94e4](https://github.com/odest/catalyzer/commit/c1e94e4d224b525501cb893bf9374684515ab3f5))


### Tests

* **cli:** add validation utils tests and test script ([b6150ac](https://github.com/odest/catalyzer/commit/b6150ac8a6ce73e398076c27e41b0c22183ca65e))


### Build System

* **cli:** rename package to @tntstack/create-app ([b6eddca](https://github.com/odest/catalyzer/commit/b6eddca915b32028be947853667aa66f613c6441))

## [0.1.10](https://github.com/odest/tntstack/compare/@tntstack/create-app@v0.1.9...@tntstack/create-app@v0.1.10) (2026-05-10)


### Documentation

* **cli:** add a deprecation warning and migration information to the README ([10a03e3](https://github.com/odest/tntstack/commit/10a03e3434abf8e6bf894d9afb4aacef761c934f))


### Styles

* enforce global formatting with new prettier rules ([5db1510](https://github.com/odest/tntstack/commit/5db1510fb75e05de9588d69f9ff05da99400b730))

## [0.1.9](https://github.com/odest/tntstack/compare/@tntstack/create-app@v0.1.8...@tntstack/create-app@v0.1.9) (2026-05-03)


### Features

* **cli:** add shadow templates and scaffold content cleanup ([9c15047](https://github.com/odest/tntstack/commit/9c15047bab89b23a7a570e4da9a81919575e9413))


### Bug Fixes

* **cli:** auto-inject version and add identifier validation ([1be815d](https://github.com/odest/tntstack/commit/1be815d778cb8b0134afa0d92ab40f18ed495492))
* **cli:** improve scaffold UX, error recovery, and template versioning ([657cf1e](https://github.com/odest/tntstack/commit/657cf1e8c1ce43fd2c1f18c701d215b60f04a34e))


### Documentation

* **cli:** update README with new flags and configuration step ([0ac8e13](https://github.com/odest/tntstack/commit/0ac8e134777a5509c793f25290c43f1297ae66c1))


### Code Refactoring

* **cli:** modularize renaming logic and transition to targeted metadata updates ([e9fc6f0](https://github.com/odest/tntstack/commit/e9fc6f00c40c495b4cffa29b33565d8154ba9006))


### Tests

* **cli:** add validation utils tests and test script ([b6150ac](https://github.com/odest/tntstack/commit/b6150ac8a6ce73e398076c27e41b0c22183ca65e))

## [0.1.8](https://github.com/odest/tntstack/compare/@tntstack/create-app@v0.1.7...@tntstack/create-app@v0.1.8) (2026-03-23)


### Bug Fixes

* **cli:** fix typo in README ([95d4d95](https://github.com/odest/tntstack/commit/95d4d95560e2ee29b6b6158fc68f5c572e94253c))

## [0.1.7](https://github.com/odest/tntstack/compare/@tntstack/create-app@v0.1.6...@tntstack/create-app@v0.1.7) (2026-03-14)


### Bug Fixes

* **cli:** resolve 404 error on npm publish by adding publishConfig ([4251e18](https://github.com/odest/tntstack/commit/4251e1832922d665f28c8a851841c940e1a6ff8c))

## [0.1.6](https://github.com/odest/tntstack/compare/@tntstack/create-app-v0.1.5...@tntstack/create-app@v0.1.6) (2026-03-14)


### Code Refactoring

* **scripts:** unify lint scripts and update ts version ([c1e94e4](https://github.com/odest/tntstack/commit/c1e94e4d224b525501cb893bf9374684515ab3f5))

## [0.1.5](https://github.com/odest/tntstack/compare/@tntstack/create-app-v0.1.4...@tntstack/create-app-v0.1.5) (2026-03-12)


### Features

* **cli:** support apple directory and file renaming during scaffold ([d8beab1](https://github.com/odest/tntstack/commit/d8beab1df1be3f93c9d4335e4e5cff5956b6549e))


### Documentation

* Update license to MIT and adjust docs ([abf9340](https://github.com/odest/tntstack/commit/abf9340faf121a79f8a545500bdabaf8c3a0ed35))

## [0.1.4](https://github.com/odest/tntstack/compare/@tntstack/create-app-v0.1.3...@tntstack/create-app-v0.1.4) (2026-03-11)


### Features

* **cli:** add interactive @tntstack/create scaffolding tool ([b39ae89](https://github.com/odest/tntstack/commit/b39ae896b8bb7c5c0f51df07539f89b0fbd3c7cb))
* **packages/cli:** add base scaffolding tool structure ([56f90f7](https://github.com/odest/tntstack/commit/56f90f733365ace9bb88f2844a7a8a8c1fc6b204))


### Documentation

* **cli:** Add package metadata and README for CLI scaffolding ([d73ad2a](https://github.com/odest/tntstack/commit/d73ad2a8456bef2c4f80d87575cf376097ee4dba))


### Build System

* **cli:** rename package to @tntstack/create-app ([b6eddca](https://github.com/odest/tntstack/commit/b6eddca915b32028be947853667aa66f613c6441))

## [0.1.3](https://github.com/odest/tntstack/compare/@tntstack/create-v0.1.2...@tntstack/create-v0.1.3) (2026-03-11)


### Features

* **cli:** add interactive @tntstack/create scaffolding tool ([b39ae89](https://github.com/odest/tntstack/commit/b39ae896b8bb7c5c0f51df07539f89b0fbd3c7cb))

## [0.1.2](https://github.com/odest/tntstack/compare/@tntstack/create-v0.1.1...@tntstack/create-v0.1.2) (2026-03-10)


### Features

* **packages/cli:** add base scaffolding tool structure ([56f90f7](https://github.com/odest/tntstack/commit/56f90f733365ace9bb88f2844a7a8a8c1fc6b204))


### Documentation

* **cli:** Add package metadata and README for CLI scaffolding ([d73ad2a](https://github.com/odest/tntstack/commit/d73ad2a8456bef2c4f80d87575cf376097ee4dba))

## [0.1.1](https://github.com/odest/tntstack/compare/v0.1.0...v0.1.1) (2026-03-10)


### Features

* **packages/cli:** add base scaffolding tool structure ([56f90f7](https://github.com/odest/tntstack/commit/56f90f733365ace9bb88f2844a7a8a8c1fc6b204))
