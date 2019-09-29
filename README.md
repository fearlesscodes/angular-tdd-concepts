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
