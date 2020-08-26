import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import {
  BaseFieldCustomizer,
  IFieldCustomizerCellEventParameters
} from '@microsoft/sp-listview-extensibility';

import * as strings from 'TiltaksnummerFieldCustomizerStrings';
import Tiltaksnummer, { ITiltaksnummerProps } from './components/Tiltaksnummer';

/**
 * If your field customizer uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ITiltaksnummerFieldCustomizerProperties {
  // This is an example; replace with your own property
  // sampleText?: string;
}

const LOG_SOURCE: string = 'TiltaksnummerFieldCustomizer';

export default class TiltaksnummerFieldCustomizer
  extends BaseFieldCustomizer<ITiltaksnummerFieldCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    // Add your custom initialization to this method.  The framework will wait
    // for the returned promise to resolve before firing any BaseFieldCustomizer events.
    // Log.info(LOG_SOURCE, 'Activated TiltaksnummerFieldCustomizer with properties:');
    // Log.info(LOG_SOURCE, JSON.stringify(this.properties, undefined, 2));
    // Log.info(LOG_SOURCE, `The following string should be equal: "TiltaksnummerFieldCustomizer" and "${strings.Title}"`);
    return Promise.resolve<void>();
  }

  @override
  public onRenderCell(event: IFieldCustomizerCellEventParameters): void {
    // Use this method to perform your custom cell rendering.
    const text: string = event.fieldValue;

    const tiltaksnummer: React.ReactElement<{}> =
      React.createElement(Tiltaksnummer, { text } as ITiltaksnummerProps);

    if (text )ReactDOM.render(tiltaksnummer, event.domElement);
  }

  @override
  public onDisposeCell(event: IFieldCustomizerCellEventParameters): void {
    // This method should be used to free any resources that were allocated during rendering.
    // For example, if your onRenderCell() called ReactDOM.render(), then you should
    // call ReactDOM.unmountComponentAtNode() here.
    ReactDOM.unmountComponentAtNode(event.domElement);
    super.onDisposeCell(event);
  }
}
