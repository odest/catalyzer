# Changelog

## [2.0.1](https://github.com/odest/catalyzer/compare/v2.0.0...v2.0.1) (2026-06-07)


### Documentation

* add comprehensive AGENTS.md documentation ([58f927e](https://github.com/odest/catalyzer/commit/58f927e2603b8921578fdf290150cb4f85274b79))


### Build System

* **deps-dev:** bump turbo from 2.9.6 to 2.9.14 ([#68](https://github.com/odest/catalyzer/issues/68)) ([00905df](https://github.com/odest/catalyzer/commit/00905df14ba52fd6313c18cab63ef5640c08b046))
* **deps:** bump mermaid from 11.14.0 to 11.15.0 ([#65](https://github.com/odest/catalyzer/issues/65)) ([4413c17](https://github.com/odest/catalyzer/commit/4413c17032dc1fe67c6420c95ef7956ab14476c4))
* **deps:** bump next from 16.2.4 to 16.2.6 ([#66](https://github.com/odest/catalyzer/issues/66)) ([2efe049](https://github.com/odest/catalyzer/commit/2efe0495b72e13f8ebdea1db2f700b08a051f0f3))

## [2.0.0](https://github.com/odest/catalyzer/compare/v1.5.0...v2.0.0) (2026-05-10)


### ⚠ BREAKING CHANGES

* The CLI tool @tntstack/create-app is now deprecated and replaced by create-catalyzer. Native bundle identifiers, internal package names, and repository URLs have completely changed

### Features

* **cli:** add shadow templates and scaffold content cleanup ([9c15047](https://github.com/odest/catalyzer/commit/9c15047bab89b23a7a570e4da9a81919575e9413))
* **core:** add notification center and search to app header ([2d2ec0e](https://github.com/odest/catalyzer/commit/2d2ec0ea21c57448edc31906fc37e2af6d4fa1dd))
* rebrand project from tntstack to catalyzer ([37ef188](https://github.com/odest/catalyzer/commit/37ef188d641c7662964007dcb2c66a170557e0e4))


### Bug Fixes

* **cli:** auto-inject version and add identifier validation ([1be815d](https://github.com/odest/catalyzer/commit/1be815d778cb8b0134afa0d92ab40f18ed495492))
* **cli:** improve scaffold UX, error recovery, and template versioning ([657cf1e](https://github.com/odest/catalyzer/commit/657cf1e8c1ce43fd2c1f18c701d215b60f04a34e))
* **core:** align components with v4 vega patterns and resolve hotkey conflicts ([acebee0](https://github.com/odest/catalyzer/commit/acebee080ed5da6c8b6daa6886a68dc47a7137f7))


### Documentation

* **cli:** add a deprecation warning and migration information to the README ([10a03e3](https://github.com/odest/catalyzer/commit/10a03e3434abf8e6bf894d9afb4aacef761c934f))
* **cli:** update README with new flags and configuration step ([0ac8e13](https://github.com/odest/catalyzer/commit/0ac8e134777a5509c793f25290c43f1297ae66c1))
* **deployment:** standardize and refine platform deployment guides ([a920ac3](https://github.com/odest/catalyzer/commit/a920ac338132ab8cf90286b0c19e22ed01d674dc))
* update CLI usage docs and add a simple configuration step ([959c087](https://github.com/odest/catalyzer/commit/959c087a0634e2b81ae334990761d2ea23311b6b))


### Styles

* enforce global formatting with new prettier rules ([5db1510](https://github.com/odest/catalyzer/commit/5db1510fb75e05de9588d69f9ff05da99400b730))
* **web:** align download page width and update platform mappings ([46490e0](https://github.com/odest/catalyzer/commit/46490e069c46039444e7faff86ac40de0a6cdc97))


### Code Refactoring

* centralize project metadata and decouple hardcoded template identity ([02ed2cb](https://github.com/odest/catalyzer/commit/02ed2cbd3b20a604d69634ef8c89d497a1237339))
* **cli:** modularize renaming logic and transition to targeted metadata updates ([e9fc6f0](https://github.com/odest/catalyzer/commit/e9fc6f00c40c495b4cffa29b33565d8154ba9006))
* **ui:** revert adaptive sizing to standard tailwind utilities ([9bb5d67](https://github.com/odest/catalyzer/commit/9bb5d6734cd891a9e045e83d095790d23117b74f))
* **ui:** update shadcn components to v4 radix-vega style ([0dcb0f2](https://github.com/odest/catalyzer/commit/0dcb0f233e911444f08fb6d1032cc23296fdc9b7))


### Tests

* **cli:** add validation utils tests and test script ([b6150ac](https://github.com/odest/catalyzer/commit/b6150ac8a6ce73e398076c27e41b0c22183ca65e))


### Build System

* **deps:** bump next-intl from 4.9.1 to 4.9.2 ([#61](https://github.com/odest/catalyzer/issues/61)) ([f477f65](https://github.com/odest/catalyzer/commit/f477f65d29089671bafcdb43194150df6b604f4b))
* **deps:** bump tauri from 2.10.3 to 2.11.1 in /apps/native/src-tauri ([#62](https://github.com/odest/catalyzer/issues/62)) ([99fccf0](https://github.com/odest/catalyzer/commit/99fccf0498a0724db4bee45c649fb808761f5e57))

## [1.5.0](https://github.com/odest/tntstack/compare/v1.4.7...v1.5.0) (2026-04-26)


### Features

* add command palette with navigation and settings ([#55](https://github.com/odest/tntstack/issues/55)) ([36fe82a](https://github.com/odest/tntstack/commit/36fe82a95b14cdbd10d9eef087bc5b52749d61a4))
* **core:** Add Reports page and update dashboard navigation ([77b7f50](https://github.com/odest/tntstack/commit/77b7f500320ecd56aaafef7261638825f5154826))
* **core:** replace static greet text with toast and dynamic i18n ([6456e17](https://github.com/odest/tntstack/commit/6456e17e57d8a16a9a3ae57735eb93da762d9edc))
* **hotkeys:** add keyboard shortcuts and dialog/drawer ([#54](https://github.com/odest/tntstack/issues/54)) ([4ff28b8](https://github.com/odest/tntstack/commit/4ff28b8fede9b09809c711dd34b5cf12de8281cf))
* **landing:** implement footer section with theme toggle and links ([#53](https://github.com/odest/tntstack/issues/53)) ([ec7387d](https://github.com/odest/tntstack/commit/ec7387d6a1147a5af55b717779dde745c755bfef))
* **mobile:** add mobile bottom navigation and drawers ([40e0bb0](https://github.com/odest/tntstack/commit/40e0bb0ca28b6c1e74fa862ddbbbba7d7edc7f96))
* **ui:** adaptive styling and mobile UX improvements ([#57](https://github.com/odest/tntstack/issues/57)) ([9d4e5d5](https://github.com/odest/tntstack/commit/9d4e5d5c96a8c960f906b00ac2a69e577c750b0c))
* **web:** implement download page with dynamic OS artifacts ([#49](https://github.com/odest/tntstack/issues/49)) ([25841eb](https://github.com/odest/tntstack/commit/25841ebf48545b5434cc7198913124b08b508332))


### Bug Fixes

* **core:** resolve implicit any type error in greet component ([0dcd28a](https://github.com/odest/tntstack/commit/0dcd28aa1bb72284e0547b8848130bb28c6c246e))


### Documentation

* sync documentation with current codebase ([08a7dbe](https://github.com/odest/tntstack/commit/08a7dbe65014881e38186ae0c4bc466072ff7cc9))


### Code Refactoring

* **ui:** implement adaptive sizing and typography via CSS variables ([dda740b](https://github.com/odest/tntstack/commit/dda740b7322b0c84d3d2e3f943872d6c8b0b8252))
* **ui:** implement responsive hybrid layouts and optimize mobile ux ([fbfbb24](https://github.com/odest/tntstack/commit/fbfbb24f5f08b43c82cf7ea0b1b2c29bed3ae8ae))
* **ui:** purge remaining hardcoded tailwind classes across components ([b16efc1](https://github.com/odest/tntstack/commit/b16efc155d225d5cde3c1be473a6e8e5f615030b))


### Build System

* **deps:** bump next from 16.2.1 to 16.2.3 ([#52](https://github.com/odest/tntstack/issues/52)) ([adf1d2e](https://github.com/odest/tntstack/commit/adf1d2ec99809bd4058708b9ff0c993ada569289))
* **deps:** bump next-intl from 4.8.3 to 4.9.1 ([#51](https://github.com/odest/tntstack/issues/51)) ([ed5c70f](https://github.com/odest/tntstack/commit/ed5c70f48977ea752e65a5fe90219a78f9e7332c))

## [1.4.7](https://github.com/odest/tntstack/compare/v1.4.6...v1.4.7) (2026-03-29)


### Bug Fixes

* **ci:** use separate pull requests for release-please ([edebdc9](https://github.com/odest/tntstack/commit/edebdc9932795c0a4562a43502da4efeb6408794))

## [1.4.6](https://github.com/odest/tntstack/compare/v1.4.5...v1.4.6) (2026-03-29)


### Bug Fixes

* **ci:** remove custom pull request title pattern ([67d32c9](https://github.com/odest/tntstack/commit/67d32c91cd7f3a5ccb5246542e8578ac233d526c))

## [1.4.5](https://github.com/odest/tntstack/compare/v1.4.4...v1.4.5) (2026-03-29)


### Documentation

* update architecture documentation for ui and core packages split ([c65c0ed](https://github.com/odest/tntstack/commit/c65c0edc6054bd909c5fa6426fbb0adfba43e729))


### Code Refactoring

* **packages:** extract business logic from ui to core ([59bd4ec](https://github.com/odest/tntstack/commit/59bd4ec64acedb43a472414fbf84f51f1b4f22de))

## [1.4.4](https://github.com/odest/tntstack/compare/v1.4.3...v1.4.4) (2026-03-27)


### Bug Fixes

* **web:** resolve metadata image prerender error in localized routes ([d2cd0c7](https://github.com/odest/tntstack/commit/d2cd0c7544749a5a1e07ec735845b54a3dfd660a))


### Documentation

* add linear git history requirements to setup instructions ([eb0b39e](https://github.com/odest/tntstack/commit/eb0b39e3290afb0186df0304c8dabce3d012cdea))


### Code Refactoring

* **icons:** update app icons and add missing sizes ([4569231](https://github.com/odest/tntstack/commit/45692317203215cbf5233bd4585410e2de85815f))


### Continuous Integration

* **workflows:** fix universal apk upload wildcard and enforce checkout ref ([a4345e3](https://github.com/odest/tntstack/commit/a4345e31d6d522a9097a9db0f4f65fa73fc44365))

## [1.4.3](https://github.com/odest/tntstack/compare/v1.4.2...v1.4.3) (2026-03-24)


### Bug Fixes

* **native:** disable link prefetching to resolve silent navigation hangs on windows ([f2c615d](https://github.com/odest/tntstack/commit/f2c615da07864cb0c579b746a8d6bc1994c1f1c7))


### Continuous Integration

* **workflows:** add selective desktop builds and refine artifact naming ([4aa58a4](https://github.com/odest/tntstack/commit/4aa58a4ea29a060e9fd9057d8a48d7a6235fe061))
* **workflows:** implement dynamic matrix and enforce explicit refs for checkout ([99178f1](https://github.com/odest/tntstack/commit/99178f130ee39e1a1d668222c194da45e946ecb2))

## [1.4.2](https://github.com/odest/tntstack/compare/v1.4.1...v1.4.2) (2026-03-23)


### Bug Fixes

* **cli:** fix typo in README ([95d4d95](https://github.com/odest/tntstack/commit/95d4d95560e2ee29b6b6158fc68f5c572e94253c))


### Documentation

* add apps and packages architecture documentation ([3fdf9c8](https://github.com/odest/tntstack/commit/3fdf9c89fe264a2bfc4451077ae11f14223bd2fb))

## [1.4.1](https://github.com/odest/tntstack/compare/v1.4.0...v1.4.1) (2026-03-18)


### Build System

* **deps:** bump next from 16.1.6 to 16.1.7 ([4a0b0fb](https://github.com/odest/tntstack/commit/4a0b0fbcb70c84960b98a9761bd91f27d828b9b5))
* **deps:** bump next from 16.1.6 to 16.1.7 ([e6b4733](https://github.com/odest/tntstack/commit/e6b4733514e647d525f4249de9083c784e9b3411))

## [1.4.0](https://github.com/odest/tntstack/compare/v1.3.2...v1.4.0) (2026-03-15)


### Features

* **docs:** add Mermaid support and MDX helpers, update documentation content ([645fe37](https://github.com/odest/tntstack/commit/645fe3778414576e1735f64a0a933c28907d2c4f))


### Bug Fixes

* **docs:** add force-static to resolve DYNAMIC_SERVER_USAGE error ([09c7e9c](https://github.com/odest/tntstack/commit/09c7e9ce3b92348fb063c5a38c5da6b4cb54ea50))

## [1.3.2](https://github.com/odest/tntstack/compare/v1.3.1...v1.3.2) (2026-03-14)


### Bug Fixes

* **cli:** resolve 404 error on npm publish by adding publishConfig ([4251e18](https://github.com/odest/tntstack/commit/4251e1832922d665f28c8a851841c940e1a6ff8c))

## [1.3.1](https://github.com/odest/tntstack/compare/v1.3.0...v1.3.1) (2026-03-14)


### Bug Fixes

* **ui:** explicitly define children prop in ThemeProvider for React 19 compatibility ([a71bc81](https://github.com/odest/tntstack/commit/a71bc8112e468dfa54f146987c66e21e4419d37d))
* **web:** resolve missing open graph images in localized routes ([9240081](https://github.com/odest/tntstack/commit/92400815358bfd6dc630cc2496a3d47294c14ca9))


### Code Refactoring

* **scripts:** unify lint scripts and update ts version ([c1e94e4](https://github.com/odest/tntstack/commit/c1e94e4d224b525501cb893bf9374684515ab3f5))

## [1.3.0](https://github.com/odest/tntstack/compare/v1.2.1...v1.3.0) (2026-03-12)


### Features

* **cli:** support apple directory and file renaming during scaffold ([d8beab1](https://github.com/odest/tntstack/commit/d8beab1df1be3f93c9d4335e4e5cff5956b6549e))
* **native:** update application icons across all platforms ([8486bd2](https://github.com/odest/tntstack/commit/8486bd2594354a747863fce40fa18961febc4b2b))
* **web:** Add PWA support with Serwist, add favicons, metadata, and manifest ([3b08c17](https://github.com/odest/tntstack/commit/3b08c17ead9eb6da223295a7bf511b4f307fe700))


### Documentation

* Update license to MIT and adjust docs ([abf9340](https://github.com/odest/tntstack/commit/abf9340faf121a79f8a545500bdabaf8c3a0ed35))


### Code Refactoring

* swap hexagon icon for custom logo and add brand assets ([c6f09fe](https://github.com/odest/tntstack/commit/c6f09fe5832b09264799c9959e83c5cfb3910310))


### Build System

* **ios:** initialize Tauri iOS project via GitHub Actions ([fd1fef0](https://github.com/odest/tntstack/commit/fd1fef0a1f5b22f90a043ff90f01e2ff5e75626d))


### Continuous Integration

* **ios:** add temporary project initialization workflow ([840f3cf](https://github.com/odest/tntstack/commit/840f3cf89f44229c048229cc2aadaac8cde7956d))
* **ios:** remove temporary project init workflow ([ce145bd](https://github.com/odest/tntstack/commit/ce145bddd56ae2781c729535d7c6d64f05e9966f))

## [1.2.1](https://github.com/odest/tntstack/compare/v1.2.0...v1.2.1) (2026-03-11)


### Build System

* **cli:** rename package to @tntstack/create-app ([b6eddca](https://github.com/odest/tntstack/commit/b6eddca915b32028be947853667aa66f613c6441))

## [1.2.0](https://github.com/odest/tntstack/compare/v1.1.2...v1.2.0) (2026-03-11)


### Features

* **cli:** add interactive @tntstack/create scaffolding tool ([b39ae89](https://github.com/odest/tntstack/commit/b39ae896b8bb7c5c0f51df07539f89b0fbd3c7cb))


### Bug Fixes

* **release:** correct component paths in linked-versions config ([f37aa5d](https://github.com/odest/tntstack/commit/f37aa5d967dc10c9013783714451ebb44d167663))

## [1.1.2](https://github.com/odest/tntstack/compare/v1.1.1...v1.1.2) (2026-03-10)


### Continuous Integration

* **android:** implement smart debug/release build pipelines ([76a4ae5](https://github.com/odest/tntstack/commit/76a4ae58fca4965b1b372f0512742b64ce7fe4b3))

## [1.1.1](https://github.com/odest/tntstack/compare/v1.1.0...v1.1.1) (2026-03-10)


### Documentation

* **cli:** Add package metadata and README for CLI scaffolding ([d73ad2a](https://github.com/odest/tntstack/commit/d73ad2a8456bef2c4f80d87575cf376097ee4dba))


### Code Refactoring

* **ci:** add publish CLI workflow and improve version fetch logic ([087c196](https://github.com/odest/tntstack/commit/087c196a898cd8870d828b13ac69ae0db377fd31))

## [1.1.0](https://github.com/odest/tntstack/compare/v1.0.0...v1.1.0) (2026-03-10)


### Features

* add contributing and funding docs, improve README, and enhance UI with skeletons and sidebar variant selector ([0a34782](https://github.com/odest/tntstack/commit/0a34782cbca29d2f858d8f85f293e3370c57f3ec))
* add init scripts, svg assets, improve README ([21d6de5](https://github.com/odest/tntstack/commit/21d6de5834dda0bcf7f90f80dc1984b1b5c234dc))
* add skeleton loading placeholders for mode-card and themes-list ([eaf937c](https://github.com/odest/tntstack/commit/eaf937ccbe750f155dcc2c8209ba9cee4f9b028b))
* **android:** add Android build configuration and resources ([ec04ee7](https://github.com/odest/tntstack/commit/ec04ee706b02bbc815e4d45d2e48fffee57b8122))
* **dashboard:** add dashboard pages, routes, navigation and i18n ([14a4db4](https://github.com/odest/tntstack/commit/14a4db497c7c4d2734d27e60071764abdbaff202))
* **docs:** setup Fumadocs and initial MDX structure ([7d51764](https://github.com/odest/tntstack/commit/7d51764473262b2f4063e14bf3ead445911b2c3d))
* **i18n:** add internationalization support for web and native apps ([2e9da4f](https://github.com/odest/tntstack/commit/2e9da4f3fe853a818426de083d816a67f9e9d0ea))
* **i18n:** add support for 10 languages ([7f0a219](https://github.com/odest/tntstack/commit/7f0a219d85d78dca056b65dcf31fe776c708cfef))
* **i18n:** add translation texts for pages and components ([27017ba](https://github.com/odest/tntstack/commit/27017bac3976ace273635faf72f10a465cd12fc0))
* improve sidebar and theme handling ([44016ab](https://github.com/odest/tntstack/commit/44016ab602045cc41a5a61ecfa744ab265c45fbb))
* **landing:** add basic landing page with ui components ([f50aa28](https://github.com/odest/tntstack/commit/f50aa28d9930bdcaa763f0e2a2cac3e431588df2))
* **language:** Add language card and switcher hook ([05f7a23](https://github.com/odest/tntstack/commit/05f7a23959d259d9c359c70fab40ac801240660e))
* **packages/cli:** add base scaffolding tool structure ([56f90f7](https://github.com/odest/tntstack/commit/56f90f733365ace9bb88f2844a7a8a8c1fc6b204))
* **select:** Add search and sort to ThemesList with new Select component ([cf54e6f](https://github.com/odest/tntstack/commit/cf54e6f8326081e21093b6726978d141fc3c9e21))
* **sidebar:** add sidebar variant selector UI and persistent store ([f6b7bb3](https://github.com/odest/tntstack/commit/f6b7bb31d34ae847fe4cf933c688fd79865ef01e))
* **sidebar:** close mobile sidebar on link click ([19cd438](https://github.com/odest/tntstack/commit/19cd43888df4324b3f88d3dd1f62fd3d9461aaf6))
* **theme:** add view transition on theme change and system mode support ([d942b57](https://github.com/odest/tntstack/commit/d942b57313c93aa2db442f589af92c82497e146b))
* **ui:** add language toggle and locale config ([60d1e56](https://github.com/odest/tntstack/commit/60d1e56b4375a872340093e1644cb8689acedc61))
* **ui:** improve mode toggle with view transitions ([fabc024](https://github.com/odest/tntstack/commit/fabc0243a5ead607a157b350dabffcb196c8dc0b))


### Bug Fixes

* appearance settings are not responsive on mobile view (close [#8](https://github.com/odest/tntstack/issues/8)) ([1fe1b69](https://github.com/odest/tntstack/commit/1fe1b698eeec5794316d83ab8a698874ddd88b23))
* **common/greet:** add error handling and clear input after greet ([e954c0f](https://github.com/odest/tntstack/commit/e954c0fff9441c0913e47f6bd93ea6c8eed6675d))
* **deps:** upgrade next.js and react to resolve new RSC vulnerabilities ([6f54846](https://github.com/odest/tntstack/commit/6f54846d5ff03a8c20b4b5da2131fd0246c3b977))
* **deps:** upgrade react to resolve new RSC vulnerabilities ([63a94a9](https://github.com/odest/tntstack/commit/63a94a9a56bc9d8e334e5dafe15634b4da542ccf))
* **greet:** handle invalid input and sanitize name ([201a5d0](https://github.com/odest/tntstack/commit/201a5d06fb477c5a6ad51098dbda258838387499))
* **init:** update init scripts and sidebar to replace placeholder ([dbe2ca8](https://github.com/odest/tntstack/commit/dbe2ca8ef708e98cdd7a408ddcb75e5d4a3c9881))
* **lint:** add eslint dependency to ui package and fix exhaustive-deps warning ([5bc54a1](https://github.com/odest/tntstack/commit/5bc54a16cdb2f7dfafc72248b83514566bef0dbd))


### Documentation

* add CONTRIBUTING.md, FUNDING.yml, overhaul README ([8e9a878](https://github.com/odest/tntstack/commit/8e9a878df6dbddc9ab7710fafafa913cf7c3a11e))
* fix formatting of README warning block ([7a5cb63](https://github.com/odest/tntstack/commit/7a5cb63c5fddf95036eefb5d66422c9de98def28))
* **README:** add required Android signing notes and guide ([a06dba1](https://github.com/odest/tntstack/commit/a06dba1fa0fb8d3374afe682156ab920a24fb59c))


### Code Refactoring

* change project name and package identifiers to tntstack ([9ea84f1](https://github.com/odest/tntstack/commit/9ea84f1ec0b806851bbc533ac766fbd8375d6586))
* Refactor theme card to reusable themes list component ([4018b8b](https://github.com/odest/tntstack/commit/4018b8b5c8c2cd2cb8d1ca4702f1cbd92ddebc55))
* **release:** split release workflow into modular reusable workflows ([23d2ff6](https://github.com/odest/tntstack/commit/23d2ff613d35a088fdda3accae963025971e3740))
* remove unused pages and navigation items ([86ac6b3](https://github.com/odest/tntstack/commit/86ac6b3802e747785400d0552c580d8ce20a0a37))
* set up CI workflow and improve project structure ([a881e92](https://github.com/odest/tntstack/commit/a881e928856ed955b481ee42ebd4dadc2b6503d0))
* **theme-store:** move sortOption to store and update ThemesList ([dab3012](https://github.com/odest/tntstack/commit/dab301269bb8ab0fe60e224bd57c5cbb62a3c2e8))
* **ui:** extract theme init script to shared module ([0e51547](https://github.com/odest/tntstack/commit/0e515474305715b54bb05ccde1111499cfcf8eb5))
* **ui:** replace mounting with useMounted hook skeleton component ([c5366b6](https://github.com/odest/tntstack/commit/c5366b6d1600a71025a17eeef5cd179d99dea5d6))
* **ui:** replace mounting with useMounted hook skeleton component ([cd9faa3](https://github.com/odest/tntstack/commit/cd9faa318c847dafbd018804db456210e2cf275e))
* update LinkComponent types and use LucideIcon for nav icons ([7ed51cd](https://github.com/odest/tntstack/commit/7ed51cdb4f8e32150b931f4f1c33e19018be3a41))
* use sidebar state for grid layout in mode and variant cards ([e7e84af](https://github.com/odest/tntstack/commit/e7e84af7268a997f6bafe670a588c8903e2e41ec))
* **utils:** Extract storage retrieval to utility and use it in stores ([af79486](https://github.com/odest/tntstack/commit/af794864c2b67f2f245818ddaf8b85577c768d50))


### Build System

* **android:** add keystore signing config for release builds ([a203803](https://github.com/odest/tntstack/commit/a203803b0d4286019ab0f072910ddfd64d4c8e6f))
* **android:** Move signing config to signingConfigs block and update keys ([1b19d2a](https://github.com/odest/tntstack/commit/1b19d2af51bc0262d39c7954921f6e2216239c9e))
* **deps:** bump next from 15.5.0 to 15.5.9 ([c17477c](https://github.com/odest/tntstack/commit/c17477c72416240f3520d30d594b72843c06eb5e))
* **deps:** bump next from 15.5.0 to 15.5.9 ([33ee5cd](https://github.com/odest/tntstack/commit/33ee5cd2591eb70d31ce4db7814c723dd1dade5d))
* Exclude src-tauri from tsconfig and add Android .gitignore in scripts ([a2c8a89](https://github.com/odest/tntstack/commit/a2c8a89bdb3608ab98fb5152321de8deee8a0216))


### Continuous Integration

* add Android/desktop build workflows, drop old release-please ([9bf3f34](https://github.com/odest/tntstack/commit/9bf3f3400e6312c6dcf08d9d6d2857e189dcd344))
* Add manuel build apps workflow and simplify release workflow ([b190639](https://github.com/odest/tntstack/commit/b1906395495229e25f843bf8f86a1ee93912fe15))
* add publish-tauri job to android-build and remove desktop-build ([39fae4f](https://github.com/odest/tntstack/commit/39fae4fd1a756987804bbd02b69bbf17eb04a3f2))
* **release-please:** add Release Please workflow and config ([da6c6dc](https://github.com/odest/tntstack/commit/da6c6dc69943800a480943d103e1831dd6a5dec4))
* standardize secret name to github_token across workflows ([3f6b434](https://github.com/odest/tntstack/commit/3f6b434a4c46d7cfb250fda3e566402099d99cca))
* Update android build workflow, add split-APK upload and rename job ([3d09a38](https://github.com/odest/tntstack/commit/3d09a384a1123a206dc7fe32e873fbf35e0e5b58))
* **workflow:** Add Rust and Node cache to Android build workflow ([3a9c510](https://github.com/odest/tntstack/commit/3a9c5101df691da1f34b21cbc7b3ad1a8acf413b))
* **workflows:** Update CI workflows to use secrets.GITHUB_TOKEN ([96130d5](https://github.com/odest/tntstack/commit/96130d5a53fe0298c8a184a64f3d5d6aae7450d1))
* **workflows:** update NDK, rename artifacts, fix lockfile cache ([841e1e4](https://github.com/odest/tntstack/commit/841e1e430fb69164908a3823ebaa70317cd25919))
* **workflows:** update pnpm setup, fix quoting, change asset pattern ([73379b2](https://github.com/odest/tntstack/commit/73379b2845991f9de908dc46f0bf4452bafc916d))

## [0.0.4](https://github.com/odest/tntstack/compare/v0.0.3...v0.0.4) (2025-12-12)


### Features

* add contributing and funding docs, improve README, and enhance UI with skeletons and sidebar variant selector ([0a34782](https://github.com/odest/tntstack/commit/0a34782cbca29d2f858d8f85f293e3370c57f3ec))
* add init scripts, svg assets, improve README ([21d6de5](https://github.com/odest/tntstack/commit/21d6de5834dda0bcf7f90f80dc1984b1b5c234dc))
* add skeleton loading placeholders for mode-card and themes-list ([eaf937c](https://github.com/odest/tntstack/commit/eaf937ccbe750f155dcc2c8209ba9cee4f9b028b))
* **i18n:** add internationalization support for web and native apps ([2e9da4f](https://github.com/odest/tntstack/commit/2e9da4f3fe853a818426de083d816a67f9e9d0ea))
* **i18n:** add support for 10 languages ([7f0a219](https://github.com/odest/tntstack/commit/7f0a219d85d78dca056b65dcf31fe776c708cfef))
* **i18n:** add translation texts for pages and components ([27017ba](https://github.com/odest/tntstack/commit/27017bac3976ace273635faf72f10a465cd12fc0))
* **language:** Add language card and switcher hook ([05f7a23](https://github.com/odest/tntstack/commit/05f7a23959d259d9c359c70fab40ac801240660e))
* **sidebar:** add sidebar variant selector UI and persistent store ([f6b7bb3](https://github.com/odest/tntstack/commit/f6b7bb31d34ae847fe4cf933c688fd79865ef01e))
* **ui:** add language toggle and locale config ([60d1e56](https://github.com/odest/tntstack/commit/60d1e56b4375a872340093e1644cb8689acedc61))


### Bug Fixes

* appearance settings are not responsive on mobile view (close [#8](https://github.com/odest/tntstack/issues/8)) ([1fe1b69](https://github.com/odest/tntstack/commit/1fe1b698eeec5794316d83ab8a698874ddd88b23))
* **common/greet:** add error handling and clear input after greet ([e954c0f](https://github.com/odest/tntstack/commit/e954c0fff9441c0913e47f6bd93ea6c8eed6675d))
* **greet:** handle invalid input and sanitize name ([201a5d0](https://github.com/odest/tntstack/commit/201a5d06fb477c5a6ad51098dbda258838387499))


### Documentation

* add CONTRIBUTING.md, FUNDING.yml, overhaul README ([8e9a878](https://github.com/odest/tntstack/commit/8e9a878df6dbddc9ab7710fafafa913cf7c3a11e))
* fix formatting of README warning block ([7a5cb63](https://github.com/odest/tntstack/commit/7a5cb63c5fddf95036eefb5d66422c9de98def28))
* **README:** add required Android signing notes and guide ([a06dba1](https://github.com/odest/tntstack/commit/a06dba1fa0fb8d3374afe682156ab920a24fb59c))


### Code Refactoring

* **ui:** extract theme init script to shared module ([0e51547](https://github.com/odest/tntstack/commit/0e515474305715b54bb05ccde1111499cfcf8eb5))
* **ui:** replace mounting with useMounted hook skeleton component ([c5366b6](https://github.com/odest/tntstack/commit/c5366b6d1600a71025a17eeef5cd179d99dea5d6))
* **ui:** replace mounting with useMounted hook skeleton component ([cd9faa3](https://github.com/odest/tntstack/commit/cd9faa318c847dafbd018804db456210e2cf275e))
* update LinkComponent types and use LucideIcon for nav icons ([7ed51cd](https://github.com/odest/tntstack/commit/7ed51cdb4f8e32150b931f4f1c33e19018be3a41))
* use sidebar state for grid layout in mode and variant cards ([e7e84af](https://github.com/odest/tntstack/commit/e7e84af7268a997f6bafe670a588c8903e2e41ec))
* **utils:** Extract storage retrieval to utility and use it in stores ([af79486](https://github.com/odest/tntstack/commit/af794864c2b67f2f245818ddaf8b85577c768d50))


### Build System

* **deps:** bump next from 15.5.0 to 15.5.9 ([c17477c](https://github.com/odest/tntstack/commit/c17477c72416240f3520d30d594b72843c06eb5e))
* **deps:** bump next from 15.5.0 to 15.5.9 ([33ee5cd](https://github.com/odest/tntstack/commit/33ee5cd2591eb70d31ce4db7814c723dd1dade5d))
* Exclude src-tauri from tsconfig and add Android .gitignore in scripts ([a2c8a89](https://github.com/odest/tntstack/commit/a2c8a89bdb3608ab98fb5152321de8deee8a0216))

## [0.0.3](https://github.com/odest/tntstack/compare/v0.0.2...v0.0.3) (2025-09-02)


### Features

* **android:** add Android build configuration and resources ([ec04ee7](https://github.com/odest/tntstack/commit/ec04ee706b02bbc815e4d45d2e48fffee57b8122))
* improve sidebar and theme handling ([44016ab](https://github.com/odest/tntstack/commit/44016ab602045cc41a5a61ecfa744ab265c45fbb))
* **select:** Add search and sort to ThemesList with new Select component ([cf54e6f](https://github.com/odest/tntstack/commit/cf54e6f8326081e21093b6726978d141fc3c9e21))
* **sidebar:** close mobile sidebar on link click ([19cd438](https://github.com/odest/tntstack/commit/19cd43888df4324b3f88d3dd1f62fd3d9461aaf6))
* **theme:** add view transition on theme change and system mode support ([d942b57](https://github.com/odest/tntstack/commit/d942b57313c93aa2db442f589af92c82497e146b))
* **ui:** improve mode toggle with view transitions ([fabc024](https://github.com/odest/tntstack/commit/fabc0243a5ead607a157b350dabffcb196c8dc0b))


### Code Refactoring

* Refactor theme card to reusable themes list component ([4018b8b](https://github.com/odest/tntstack/commit/4018b8b5c8c2cd2cb8d1ca4702f1cbd92ddebc55))
* **release:** split release workflow into modular reusable workflows ([23d2ff6](https://github.com/odest/tntstack/commit/23d2ff613d35a088fdda3accae963025971e3740))
* **theme-store:** move sortOption to store and update ThemesList ([dab3012](https://github.com/odest/tntstack/commit/dab301269bb8ab0fe60e224bd57c5cbb62a3c2e8))


### Build System

* **android:** add keystore signing config for release builds ([a203803](https://github.com/odest/tntstack/commit/a203803b0d4286019ab0f072910ddfd64d4c8e6f))
* **android:** Move signing config to signingConfigs block and update keys ([1b19d2a](https://github.com/odest/tntstack/commit/1b19d2af51bc0262d39c7954921f6e2216239c9e))


### Continuous Integration

* add Android/desktop build workflows, drop old release-please ([9bf3f34](https://github.com/odest/tntstack/commit/9bf3f3400e6312c6dcf08d9d6d2857e189dcd344))
* add publish-tauri job to android-build and remove desktop-build ([39fae4f](https://github.com/odest/tntstack/commit/39fae4fd1a756987804bbd02b69bbf17eb04a3f2))
* **release-please:** add Release Please workflow and config ([da6c6dc](https://github.com/odest/tntstack/commit/da6c6dc69943800a480943d103e1831dd6a5dec4))
* standardize secret name to github_token across workflows ([3f6b434](https://github.com/odest/tntstack/commit/3f6b434a4c46d7cfb250fda3e566402099d99cca))
* Update android build workflow, add split-APK upload and rename job ([3d09a38](https://github.com/odest/tntstack/commit/3d09a384a1123a206dc7fe32e873fbf35e0e5b58))
* **workflow:** Add Rust and Node cache to Android build workflow ([3a9c510](https://github.com/odest/tntstack/commit/3a9c5101df691da1f34b21cbc7b3ad1a8acf413b))
* **workflows:** Update CI workflows to use secrets.GITHUB_TOKEN ([96130d5](https://github.com/odest/tntstack/commit/96130d5a53fe0298c8a184a64f3d5d6aae7450d1))
* **workflows:** update NDK, rename artifacts, fix lockfile cache ([841e1e4](https://github.com/odest/tntstack/commit/841e1e430fb69164908a3823ebaa70317cd25919))
