# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2019-11-16
### Added
- Implement user dashboard as AngularJS single page application [#37](https://github.com/LeNPaul/physics-in-motion/issues/37)
- Add change log [#46](https://github.com/LeNPaul/physics-in-motion/issues/46)
- Create tests for lessons API [#55](https://github.com/LeNPaul/physics-in-motion/issues/55)
- Automate deployment from development to production process [#57](https://github.com/LeNPaul/physics-in-motion/issues/57)

### Changed
- Dynamically generate list of lessons under "Resume Learning" in user dashboard based on most recently viewed lessons [#40](https://github.com/LeNPaul/physics-in-motion/issues/40)
- Figure out best way to avoid needing to show start.html page when opening a lesson [#53](https://github.com/LeNPaul/physics-in-motion/issues/53)
- Refactor lessons router so that endpoints are appropriately PUT or POST requests [#59](https://github.com/LeNPaul/physics-in-motion/issues/59) 
- Change /recent_lessons endpoint to return lesson name as well as the name of the first lesson module [#60](https://github.com/LeNPaul/physics-in-motion/issues/60)
- Use own promise library instead of mongoose's own default promise library [#69](https://github.com/LeNPaul/physics-in-motion/issues/69)
- Update package to latest versions [#70](https://github.com/LeNPaul/physics-in-motion/issues/70)
- Remove 'useMongoClient' option for mongoose [#73](https://github.com/LeNPaul/physics-in-motion/issues/73)
- Add 'useNewUrlParser' option for MongoClient.connect [#74](https://github.com/LeNPaul/physics-in-motion/issues/74)
- Pass option { useUnifiedTopology: true } to the MongoClient constructor [#75](https://github.com/LeNPaul/physics-in-motion/issues/75)
- Change response from /update_lesson_status to return status of request [#82](https://github.com/LeNPaul/physics-in-motion/issues/82)
- Change response from /update_lesson_notes to return status of request [#83](https://github.com/LeNPaul/physics-in-motion/issues/83)
- Change response from /update_lesson_time to return status of request [#84](https://github.com/LeNPaul/physics-in-motion/issues/84)

### Fixed
- Prevent lesson module functions from being called unless a user is logged in [#58](https://github.com/LeNPaul/physics-in-motion/issues/58)
- Remove dashes from lesson module name for Simple Harmonic Motion notes page [#71](https://github.com/LeNPaul/physics-in-motion/issues/71)
- Remove references to dashboard.js file [#72](https://github.com/LeNPaul/physics-in-motion/issues/72)
- Fix unit tests not closing because application server process is still running [#76](https://github.com/LeNPaul/physics-in-motion/issues/76)

## [0.1.0] - 2019-08-31
### Added
- Each lesson module will have at least one interactive chart [#11](https://github.com/LeNPaul/physics-in-motion/issues/11)
- Able to save user notes from each lesson module that can also be viewed from the user dashboard [#13](https://github.com/LeNPaul/physics-in-motion/issues/13)
- Each module has an option to indicate if a module has been completed by the user [#14](https://github.com/LeNPaul/physics-in-motion/issues/14)
- Able to track total progress and see the most recently viewed lesson modules on the user dashboard [#15](https://github.com/LeNPaul/physics-in-motion/issues/15)
### Changed
- Implemented workflow for processing source files for production deployment [#4](https://github.com/LeNPaul/physics-in-motion/issues/4) [#29](https://github.com/LeNPaul/physics-in-motion/issues/29)
- Refactored API endpoints and added authentication for user-specific API requests [#51](https://github.com/LeNPaul/physics-in-motion/issues/51) [#56](https://github.com/LeNPaul/physics-in-motion/issues/56)

## [0.0.0] - 2018-03-18
### Added
- Started from the [MEAN Stack Single Page Application Starter Kit](https://github.com/scotch-io/starter-node-angular).
- Built the home page and signin/signup pages, as well as a few other miscellaneous pages.
- Attempted to implement user authentication, but ultimately planning on completely restructuring the code, and starting from another template, [passport-local-express4](https://github.com/mjhea0/passport-local-express4)
