/// <reference types="anychart" />
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'anychart';

@Injectable()
export class DemoDataProviderService {
  /*
   Parent-children communicate via a service is used.
   https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service
  */

  // Observable string stream
  private dataSetChangeSource = new Subject<string>();

  // Observable string stream
  dataSetChanged$ = this.dataSetChangeSource.asObservable();

  private data_: Array<Object> = [
    {
      customName: '2001',
      customValue1: 10048,
      customValue2: 12,
      customValue3: 7,
      info1: 'Descripción de las ventas de sombreros del año 2001',
      info2: 'Descripción de las ventas de shorts del año 2001',
      info3: 'Descripción de las ventas de sombreros del año 2001',
    },
    {
      customName: '2002',
      customValue1: 10938,
      customValue2: 10,
      customValue3: 17,
      info1: 'Descripción de las ventas de sombreros del año 2002',
      info2: 'Descripción de las ventas de shorts del año 2002',
      info3: 'Descripción de las ventas de sombreros del año 2002',
    },
    {
      customName: '2003',
      customValue1: 9989,
      customValue2: 4,
      customValue3: 15,
      info1: 'Descripción de las ventas de sombreros del año 2003',
      info2: 'Descripción de las ventas de shorts del año 2003',
      info3: 'Descripción de las ventas de sombreros del año 2003',
    },
  ];

  private dataSet_: anychart.data.Set = anychart.data.set(this.data_);

  private mappings_: { [key: string]: anychart.data.View } = {
    data1: this.dataSet_.mapAs({
      x: ['customName'],
      value: ['customValue1'],
      info: ['info1'],
    }),
    data2: this.dataSet_.mapAs({
      x: ['customName'],
      value: ['customValue2'],
      info: ['info2'],
    }),
    data3: this.dataSet_.mapAs({
      x: ['customName'],
      value: ['customValue3'],
      info: ['info3'],
    }),
  };

  public getDataList() {
    let res: Array<string> = [];
    for (let key in this.mappings_) {
      res.push(key);
    }
    return res;
  }

  public getData(key: string = 'data1') {
    return this.mappings_[key];
  }

  public setCurrentDataSet(key: string = 'data') {
    this.dataSetChangeSource.next(key);
  }
}
