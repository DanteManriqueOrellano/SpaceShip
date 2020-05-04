# Angular con Formulario

Este proyecto contiene:
- lista de colecciones
- crear nuevas colecciones
- formulario anidado
- formulario array
- actualizacion del formulario


## Apuntes

Combiene estudiar la estructura de las carpetas para entender el ordenamiento.
## Prestar atenciones
Es importante Señalas que los componentes deben de carecer de la implementacion de la interface OnInit, para su correcto funcionamiento.
recordar siempre que los los componentes que son destinados a formularios deben terminar con "* - form"
recordar tambien que el compoente formulario principal (la que da inicio al formato typo json), debe extender hacia NgxRoot.
no olvidar que el componente formulario principal debe a su interior debe envolver @DataInput, de ser el caso tambien implementar los metodos privados toform formform 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
