import { Component, OnInit } from '@angular/core';
import { Overlay } from 'ol';
import { Map, View } from 'ol';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { OSM, Vector as VectorSource, Cluster as ClusterSource } from 'ol/source';
import { KML } from 'ol/format';
import { Vector as VectorLayer } from 'ol/layer';
import { Style, Fill, Text, Icon } from 'ol/style';
import { Observable } from 'rxjs';

import { Dachgeber } from '../dachgeber';
import { DachgeberService } from '../dachgeber/dachgeber.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  dachgebers$: Observable<Dachgeber[]>;

  constructor(
    private readonly dachgeberService: DachgeberService,
  ) {
    this.dachgebers$ = this.dachgeberService.dachgebers$
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
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
    const clusterSource = new ClusterSource({
      distance: 40,
      source: new VectorSource({
        url: 'assets/doc.kml',
        format: new KML(),
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
              src: 'assets/files/001.bmp'
            }),
            text: new Text({
              text: size.toString(),
              offsetX: 15,
              offsetY: 15,
              fill: new Fill({
                color: '#00f',
              }),
            }),
            // text: new Text(size.toString()),
          });
          styleCache[size] = style;
        }

        return style;
      }
    });

    const view: View = new View({
      center: olProj.fromLonLat([10.4541194, 51.1642292,]),
      zoom: 6
    })

    const map = new Map({
      target: 'map',
      overlays: [overlay],
      layers: [
        new TileLayer({
          source: new OSM()
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
          <p>${feature.get('name')}</p>
          <p>${feature.get('description')}</p>
        `;
        overlay.setPosition(coordinate);
        container.removeAttribute('class')
      } else {
        container.setAttribute('class', 'hidden');
      }
    });
  }
}
