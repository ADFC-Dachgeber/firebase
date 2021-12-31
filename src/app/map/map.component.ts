import { AfterContentInit, Component, ɵɵsetComponentScope } from '@angular/core';
import { Overlay } from 'ol';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { OSM, Vector as VectorSource, Cluster as ClusterSource } from 'ol/source';
import { GeoJSON } from 'ol/format';
import { Vector as VectorLayer } from 'ol/layer';
import { Style, Fill, Text, Icon } from 'ol/style';
import { Observable } from 'rxjs';

import { Dachgeber } from '../dachgeber';
import { DachgeberService } from '../dachgeber/dachgeber.service';
import { GeoJSONFeature, GeoJSONFeatureCollection } from 'ol/format/GeoJSON';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements AfterContentInit {
  dachgebers$: Observable<Dachgeber[]>;

  constructor(
    private readonly dachgeberService: DachgeberService,
  ) {
    this.dachgebers$ = this.dachgeberService.dachgebers$
  }

  ngAfterContentInit(): void {
    this.dachgebers$.subscribe(this.render);
  }

  render(dachgebers: Dachgeber[]): void {
    const container = document.getElementById('popup')!;
    const content = document.getElementById('popup-content')!;
    const closer = document.getElementById('popup-closer')!;

    /**
    * Create an overlay to anchor the popup to the map.
    */
    const overlay = new Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });
    closer.onclick = function () {
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    };
    const features = new GeoJSON()
      .readFeatures(
        JSON.stringify(dgsToGeoJSON(dachgebers))
      );
    const clusterSource = new ClusterSource({
      distance: 40,
      source: new VectorSource({
        features,
        format: new GeoJSON({
          featureProjection: 'EPSG:3857'
        }),
      }),
    });
    const styleCache: { [key: number]: any } = {};
    const vectorLayer = new VectorLayer({
      source: clusterSource,
      style: function (feature) {
        const size = feature.get('features').length;
        let style = styleCache[size];

        if (!style) {
          style = new Style({
            image: new Icon({
              src: '/assets/images/dg-icon.bmp'
            }),
            text: new Text({
              text: size.toString(),
              offsetX: 15,
              offsetY: 15,
              fill: new Fill({
                color: '#00f',
              }),
            }),
          });
          styleCache[size] = style;
        }

        return style;
      }
    });

    const view: View = new View({
      center: fromLonLat([10.4541194, 51.1642292,]),
      zoom: 6,
      projection: 'EPSG:3857', // default projection is EPSG:3857
    })

    const map = new Map({
      target: 'map',
      overlays: [overlay],
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: view,
    });

    map.on('click', evt => {
      const coordinate = evt.coordinate;
      const features = map.getFeaturesAtPixel(evt.pixel, { hitTolerance: 10 });

      if (features.length > 0) {
        const feature = features[0].get('features')[0];
        content.innerHTML = `
          <p>${feature.get('names')}</p>
          <p>${feature.get('description')}</p>
          <p>${feature.get('emails')}</p>
        `;
        overlay.setPosition(coordinate);
        container.removeAttribute('class')
      } else {
        container.setAttribute('class', 'hidden');
      }
    });
  }
}

function dgsToGeoJSON(dachgebers: ReadonlyArray<Dachgeber>):
  GeoJSONFeatureCollection {
  return {
    type: 'FeatureCollection',
    features: dachgebers.map(dgToGeoJSON),
  }
}

function dgToGeoJSON(dachgeber: Dachgeber): GeoJSONFeature {
  return {
    type: 'Feature',
    properties: {
      names: dachgeber.names.join('& '),
      emails: dachgeber.emails.join('& '),
      description: dachgeber.description,
    },
    geometry: {
      type: 'Point',
      coordinates: fromLonLat(dachgeber.coordinate),
    }
  };
}