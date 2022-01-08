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
      '<p>EMail: ' + dachgeber.emails.map(email => `<a href="mailto:${email}">${email}</a>`).join(' & ') + '</p>' +
      '<p>Tel: ' + dachgeber.telephones.map(tel => `<a href="tel:${tel}">${tel}</a>`).join(' & ') + '</p>';
  }
}

function expandAbbreviations(description: string): string {
  return REPLACEMENTS
    .reduce((acc: string, { regex, substitution }) =>
      acc.replace(new RegExp(regex), substitution), description);
}

const REPLACEMENTS = [
  { regex: 'eM:', substitution: 'EMail:' },
  { regex: 'Anm:', substitution: 'Angemeldet:' },
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
  { regex: 'Rep ', substitution: 'Reperaturmöglichkeit ' },
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
  { regex: 'Ki\((\d{1,2})\)', substitution: '$1-Kinder im Haus' },
  { regex: 'kPed;', substitution: 'keine Pedelecs' },
  { regex: 'kT;', substitution: 'keine Tiere erwünscht' },
  { regex: 'KW!;', substitution: 'Kinder Willkommen;' },
  { regex: 'LF;', substitution: 'Leih-Fahrrad' },
  { regex: 'nF;', substitution: 'nur Frauen;' },
  { regex: 'NG;', substitution: 'nur Gastgeber;' },
  { regex: 'nP;', substitution: 'nur Paare;' },
  { regex: 'NR;', substitution: 'Nichtraucher(in);' },
  { regex: 'NW:', substitution: 'Nordwestlich von ' },
  { regex: 'O:', substitution: 'oestlich von ' },
  { regex: 'OT:', substitution: 'Orts-/Stadt-Teil:' },
  { regex: 'R;', substitution: 'Raucher(in);' },
  { regex: 'Rep;', substitution: 'Reperaturmöglichkeit;' },
  { regex: 'RFW;', substitution: 'Radfernweg;' },
  { regex: 'RWW;', substitution: 'RadWanderWeg;' },
  { regex: 'Roll;', substitution: 'Rollstuhlgerechte Whg.;' },
  { regex: '\(Rus\)', substitution: 'etwas Russisch' },
  { regex: 'S;', substitution: 'Schlafsack (zwingend);' },
  { regex: 'SaB;', substitution: 'Schlafplatz auf dem Balkon;' },
  { regex: 'SO:', substitution: 'SudOestlich von ' },
  {
    regex: 'Sp:',
    substitution: 'Sprachen:'
  },
  { regex: 'T:', substitution: 'Telefon(private):' },
  { regex: 'Tel:', substitution: 'Telefon(private):' },
  { regex: 'UK;', substitution: 'UnterKunft;' },
  { regex: 'Geo;', substitution: 'Geokoordinaten im Dezimalgrad;' },
  { regex: 'Veg;', substitution: 'Vegetarier-Haushalt;' },
  { regex: 'vgl\.', substitution: 'vergleiche' },
  { regex: 'W:', substitution: 'Westlich von ' },
  { regex: 'WG;', substitution: 'Wohngemeinschaft;' },
  { regex: 'Whg;', substitution: 'Wohnung;' },
  { regex: 'WM;', substitution: 'Waschmaschine;' },
  { regex: 'WT;', substitution: 'Wäsche-trockner;' },
  { regex: 'WZi;', substitution: 'Wohnzimmer;' },
  { regex: 'www;', substitution: 'Internetgastzugang;' },
  {
    regex: '(\d{1,2})ÜN',
    substitution: 'Maximal möglichen Übernachtungen: $1'
  },
  {
    regex: '(\d{1,2})Z',
    substitution: 'Zelt(e) für $1-Person(en) vorhanden'
  },
  { regex: 'z:', substitution: 'Zusätzliche Person(en):' },
  { regex: 'ZE;', substitution: 'Zweit-Eintrag;' },
  { regex: 'Zi;', substitution: 'Zimmer;' },
  {
    regex: 'ZOd{2}',
    substitution: 'Zelten Ohne Anmeldung möglich. Eintreffen jedoch bis $1 Uhr'
  },
  { regex: '(\d{2})', substitution: 'Geburtsjahr $1' },
  { regex: '\\?:', substitution: 'Achtung: Diese Angabe fehlt noch:' },
];
