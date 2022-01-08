import { Injectable } from '@angular/core';
import { Dachgeber } from '../dachgeber';

@Injectable({
  providedIn: 'root'
})
export class DachgeberDecoratorService {

  decorate(dachgeber: Dachgeber): string {
    const expandedDescription =
      expandAbbreviations(dachgeber.description);
    return `<p>${dachgeber.names.join(' & ')}</p>` +
      `<p>${expandedDescription}</p>` +
      'EMail: ' + dachgeber.emails.map(email => `<a href="mailto:${email}">${email}</a>`).join(' & ');
  }
}

function expandAbbreviations(description: string): string {
  return description
    .replace('H:', 'Haus:')
    .replace('G:', 'Garten:')
    .replace('eM:', `EMail:`)
    .replace('Sp:', 'Sprache(n):')
    .replace('KW!;', 'Kinder willkommen!;')
    .replace('FK;', 'Fahrradkeller;')
    .replace('Anm:', 'Angemeldet:')
    .replace('z:', 'Zusätzliche Person(en):')
    .replace('kH;', 'keine Hunde bitte;')
    .replace('WM;', 'Waschmaschine;')
    .replace('Rep', 'Reperaturmöglichkeit');
}

const EMAIL_REGEX = /eM:\ ?(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const DICT = [
  { regex: 'AB;', substitution: 'Anrufbeantworter;' },
  { regex: 'akA;', substitution: 'auch kurzfr. Anmeldg. mgl.;' },
  { regex: 'aoF;', substitution: 'auch ohne Fahrrad;' },
  { regex: 'aoI;', substitution: 'auch ohne Iso-/Luftmatte;' },
  { regex: 'aoS;', substitution: 'auch ohne Schlafsack;' },
  { regex: 'Beh;', substitution: 'Behindertengerechte Whg.;' },
  { regex: 'Bf;', substitution: 'Bahnhof;' },
  { regex: 'D:', substitution: '\tDiensttelefon:' },
  { regex: 'Du;', substitution: 'Dusche;' },
  { regex: 'eZ;', substitution: 'eigenes Zimmer für Gäste;' },
  { regex: 'FHW;', substitution: 'Fahrrad-/Hobby-Werkstatt;' },
  { regex: 'FK;', substitution: 'Fahrradkeller;' },
  {
    regex: 'G:',
    substitution: 'max. Anzahl der Plätze im Garten (Zelten):'
  },
  { regex: 'GZi;', substitution: 'Gäste-Zimmer;' },
  { regex: 'H:', substitution: 'max. Anzahl Pl. im Haus:' },
  { regex: 'HBf;', substitution: 'Hauptbahnhof;' },
  { regex: 'Hdy:', substitution: 'Handy-Telefonnummer:' },
  { regex: 'HG;', substitution: 'Hausgemeinschaft;' },
  { regex: 'HiH;', substitution: 'Hund(e) im Haus;' },
  { regex: 'HPV;', substitution: 'Human Powered Verband;' },
  { regex: 'Hw;', substitution: 'Hunde willkommen;' },
  { regex: 'Iso;', substitution: 'Isomatte/Luftmatraze;' },
  { regex: 'kA;', substitution: 'keine Anmeldung erforderlich;' },
  { regex: 'KaH;', substitution: 'Katze(n) im Haus;' },
  { regex: 'KB;', substitution: 'Küchenbenutzung;' },
  { regex: 'kDu;', substitution: 'keine Dusche vorhanden;' },
  { regex: 'kH;', substitution: 'keine Hunde bitte;' },
  { regex: 'Ki(', substitution: 'x-Kinder im Haus (x=Anzahl)' },
  { regex: 'kPed;', substitution: 'keine Pedelecs' },
  { regex: 'kT;', substitution: 'keine Tiere erwünscht' },
  { regex: 'KW!;', substitution: 'Kinder Willkommen' },
  { regex: 'LF;', substitution: 'Leih-Fahrrad' },
  { regex: 'nF;', substitution: 'nur Frauen;' },
];

const D = {
  'NG;': 'nur Gastgeber;',
  'nP;': 'nur Paare;',
  'NR;': 'Nichtraucher(in);',
  'NW:': 'Nordwestlich von ',
  'O:': 'oestlich von ',
  'OT:': 'Orts-/Stadt-Teil:',
  'R;': 'Raucher(in);',
  'Rep;': 'Reperaturmöglichkeit;',
  'RFW;': 'Radfernweg;',
  'RWW;': 'RadWanderWeg;',
  'Roll;': 'Rollstuhlgerechte Whg.;',
  '(Rus)': 'etwas Russisch',
  'S;': 'Schlafsack (zwingend);',
  'SaB;': 'Schlafplatz auf dem Balkon;',
  'SO:': 'SudOestlich von ',
  'Sp:': 'Sprachen (gemäss international Länderkennung):',
  'T:': 'Telefon(private):',
  'UK;': 'UnterKunft;',
  'Geo;': 'Geokoordinaten im Dezimalgrad;',
  'Veg;': 'Vegetarier-Haushalt;',
  'vgl.': 'vergleiche',
  'W:': 'Westlich von ',
  'WG;': 'Wohngemeinschaft;',
  'Whg;': 'Wohnung;',
  'WM;': 'Waschmaschine;',
  'WT;': 'Wäsche-trockner;',
  'WZi;': 'Wohnzimmer;',
  'www;': 'Internetgastzugang;',
  '(\d{1.2})ÜN': 'Maximal möglichen Übernachtungen: $1',
  '(\d{1,2})Z': 'Zelt(e) für $1-Person(en) vorhanden',
  'z:': 'Zusätzliche Person(en):',
  'ZE;': 'Zweit-Eintrag;',
  'Zi;': 'Zimmer;',
  'ZO\d{2}': 'Zelten Ohne Anmeldung möglich. Eintreffen jedoch bis $1 Uhr',
  '(*\d{2})': 'Geburtsjahr $1',
  '?:': 'Achtung: Diese Angabe fehlt noch:'
};