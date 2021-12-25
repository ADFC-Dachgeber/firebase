import { RouterTestingModule } from '@angular/router/testing';
import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from "@angular/router";

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { MapModule } from './map/map.module';
import { routes } from './app-routing.module';

describe('Router', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        MapModule,
        LoginModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  describe('When a user is not logged-in, ', () => {
    it('navigate to "" redirects you to /login', fakeAsync(() => {
      router.navigate(['']);
      tick();
      expect(location.path()).toBe('/login');
    }));
  });

  describe('When a user is logged-in, ', () => {
    it('navigate to "" redirects you to /map', fakeAsync(() => {
      router.navigate(['']);
      tick();
      expect(location.path()).toBe('/map');
    }));
  });
});
