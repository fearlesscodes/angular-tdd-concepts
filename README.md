# Collection of Angular TDD Concepts

## Mock injected services
There are several ways of mocking the service calls. 

### Using the TestBed directly and set a spyOn on the to be mocked function call.
```
service = TestBed.get(service);
// E.g. the application inside calls the service function getCustomer
spyOn(service, 'getCustomer').and.returnValue(of(new Customer()));
```
In this case the application calls the service function getCustomer and subscribes to it. Therefore the return 
value should be type of Observable<Customer> -> of(new Customer).

### Using injector of the debugElement to retrieve the service.
``` 
service = fixture.debugElement.injector.get(Service);
// E.g. the application inside calls the service function getCustomer
spyOn(service, 'getCustomer').and.returnValue(of(new Customer()));
```

### Using stub to mock the service
This special case requires to create a calls which stubs the function to be mocked. Therefore the stub
should be used when the TestBed gets configured.
```

export class ServiceStub {
  getCustomer(): Observable<boolean> {
    return of(false);
  }
}
describe('AppComponent', () => {
TestBed.configureTestingModule({
      ...
      providers: [
        { provide: CustomerService, useClass: ServiceStub}
      ]
    }).compileComponents();
  }));
});
```
In this case you don't need to spyOn the function and return a value.


---

# Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
