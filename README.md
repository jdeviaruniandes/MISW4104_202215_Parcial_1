# Parcial

This project is to solve [Parcial](https://www.dropbox.com/s/810ko2ghwa2uxxc/Parcial_Grupo1.docx)

Was made for Johnattan Fernando Devia Rojas, for the master degree in software engineer.

## Process

1. Read [Parcial](https://www.dropbox.com/s/810ko2ghwa2uxxc/Parcial_Grupo1.docx)
2. Generate module with cli: `ng generate module Vehicle`
3. Generate module with cli: `ng generate component VehicleList`
4. Generate model Vehicle from endpoint
5. Generate expected tests for component list vehicles
6. Generate code to fill requirements in tests
7. Generate vehicle service with cli: `ng generate service Vehicle`
8. Generate expected tests for service Vehicle
9. Call services in component
10. Generate Pipe to group by brands `ng generate pipe VehicleBrands`
11. Generate tests output for brands for Pipe VehicleBrands
12. Generate Code to cover tests for Pipe VehicleBrands
13. Implement Pipe VehicleBrands on view VehicleList

## How to improve

1. Require to design to send header image editable, to set text in html and not as image
2. Support tested until viewport with 350px for a good experience, still working in lower resolution

## Install dependencies

Run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
