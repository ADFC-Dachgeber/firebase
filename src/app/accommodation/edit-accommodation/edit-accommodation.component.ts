import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-edit-dachgeber',
  templateUrl: './edit-accommodation.component.html',
  styleUrls: ['./edit-accommodation.component.less']
})
export class EditAccommodationComponent implements OnInit {
  id$: Observable<string | undefined> = of(undefined);
  dgForm: FormGroup = new FormGroup({
    // Location
    regionalStation: new FormControl(false),
    centralStation: new FormControl(false),
    northOf: new FormControl(''),
    eastOf: new FormControl(''),
    southOf: new FormControl(''),
    westOf: new FormControl(''),
    urbanDistrict: new FormControl(''),
    longBikePath: new FormControl(false),
    regionalBikePath: new FormControl(false),

    // Communication
    answeringMachine: new FormControl(false),
    shortNotice: new FormControl(false),
    workPhone: new FormControl('', [
      Validators.pattern("^\\+?[0-9\-]*$"),
      Validators.minLength(11),
      Validators.maxLength(15),
    ]),
    languages: new FormControl('', [
      Validators.maxLength(20),
    ]),
    noNoticeRequired: new FormControl(false),
    phone: new FormControl('', [
      Validators.pattern("^\\+?[0-9\-]*$"),
      Validators.minLength(11),
      Validators.maxLength(15),
    ]),
    campingWithoutNoticeUntil: new FormControl('', [
      Validators.pattern("[0-9]{1,2}")
    ]),

    // Conditions
    withoutBike: new FormControl(false),
    sleepingBagRequired: new FormControl(false),
    hpv: new FormControl(false),
    dogsWelcome: new FormControl(false),
    campingMatRequired: new FormControl(false),
    noDogs: new FormControl(false),
    noElectricBikes: new FormControl(false),
    noPets: new FormControl(false),
    childrenWelcome: new FormControl(false),
    womenOnly: new FormControl(false),
    hostOnly: new FormControl(false),
    couplesOnly: new FormControl(false),
    smokeFree: new FormControl(false),
    nNights: new FormControl(0),

    // Accommodation
    handicappedAccessible: new FormControl(false),
    shower: new FormControl(false),
    guestRoom: new FormControl(false),
    capacityInGarden: new FormControl(0),
    capacityInHouse: new FormControl(0),
    catsInHouse: new FormControl(false),
    kitchen: new FormControl(false),
    nChildren: new FormControl(0),
    smoker: new FormControl(false),
    wheelchairAccessible: new FormControl(false),
    sleepingOnBalcony: new FormControl(false),
    accommodation: new FormControl(false),
    vegetarian: new FormControl(false),
    sharedResidence: new FormControl(false),
    apartment: new FormControl(false),
    livingRoom: new FormControl(false),

    // Miscelaneous
    repairTools: new FormControl(false),
    garage: new FormControl(false),
    bikeRent: new FormControl(false),
    washingMachine: new FormControl(false),
    dryer: new FormControl(false),
    internet: new FormControl(false),
    tentForNPersons: new FormControl(0, [
      Validators.pattern("^[0-9]{1,2}$")
    ]),
    additionalPersons: new FormControl('', [
      Validators.maxLength(50),
    ]),
    secondListing: new FormControl('', [
      Validators.maxLength(50),
    ]),
    yearOfBirth: new FormControl('', [
      Validators.pattern('^(19)|(20)|(21)[0-9]{2}$'),
    ]),
    missingInfo: new FormControl('', [
      Validators.maxLength(50),
    ]),
    coordinateInDecimal: new FormControl(),
    additionalInfo: new FormControl('', [
      Validators.maxLength(100),
    ]),
  });

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.id$ = this.route.params.pipe(
      map(({ id }) => id),
    );
  }

  onSubmit(dgForm: FormGroup) {}
}
