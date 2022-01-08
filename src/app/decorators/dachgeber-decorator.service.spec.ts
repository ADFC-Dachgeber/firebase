import { TestBed } from '@angular/core/testing';
import { Dachgeber } from '../dachgeber';

import { DachgeberDecoratorService } from './dachgeber-decorator.service';

describe('DachgeberDecoratorService', () => {
  let service: DachgeberDecoratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DachgeberDecoratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('decorate', () => {
    it('decorates a dachgeber', () => {
      const dachgeber: Dachgeber = {
        uids: ['abc', 'def'],
        names: ['Max Mustermann', 'Hanna Mustermann'],
        description: 'Hauptstraße 45, 97941 Tauberbischofsheim, Plaetze: H:4 + G:10, Tel: (01234) 56789, eM: user83@example.com, Anm: z:Max & Hanna; Sp: GB,E,F; KW!; FK; kH; WM; Rep (DG-12345)',
        emails: ['m.mustermann@example.com', 'h.mustermann@example.com'],
        coordinate: [123, 456],
        telephones: ['(01234) 56789'],
      };

      expect(service.decorate(dachgeber)).toEqual(
        '<p>Max Mustermann & Hanna Mustermann</p>' +
        `<p>Hauptstraße 45, 97941 Tauberbischofsheim, Plaetze: max. Anzahl Pl. im Haus:4 + max. Anzahl der Plätze im Garten (Zelten):10, Telefon(private): (01234) 56789, EMail: user83@example.com, Angemeldet: Zusätzliche Person(en):Max & Hanna; Sprachen: GB,E,F; Kinder Willkommen; Fahrradkeller; keine Hunde bitte; Waschmaschine; Reperaturmöglichkeit (DG-12345)</p>` +
        '<p>EMail: <a href="mailto:m.mustermann@example.com">m.mustermann@example.com</a> & <a href="mailto:h.mustermann@example.com">h.mustermann@example.com</a></p>' +
        '<p>Tel: <a href="tel:(01234) 56789">(01234) 56789</a></p>'
      );
    });
  });
});
