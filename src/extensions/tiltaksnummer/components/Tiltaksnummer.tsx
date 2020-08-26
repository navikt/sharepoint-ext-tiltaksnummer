import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';
import Clipboard from 'react-clipboard.js';
import {
  Link,
  TooltipHost,
  DirectionalHint,
} from 'office-ui-fabric-react';

import styles from './Tiltaksnummer.module.scss';

export interface ITiltaksnummerProps {
  text: string;
}


const LOG_SOURCE: string = 'Tiltaksnummer';

export default class Tiltaksnummer extends React.Component<ITiltaksnummerProps, {}> {
  @override
  public componentDidMount(): void {
    // Log.info(LOG_SOURCE, 'React Element: Tiltaksnummer mounted');
  }

  @override
  public componentWillUnmount(): void {
    // Log.info(LOG_SOURCE, 'React Element: Tiltaksnummer unmounted');
  }

  @override
  public render(): React.ReactElement<{}> {
    return (
      <TooltipHost content="Klikk for å kopiere" directionalHint={DirectionalHint.bottomCenter} styles={{root: {display: 'inline-block'}}}>
        <Clipboard component={Link} data-clipboard-text={ this.props.text }>
          { this.props.text }
        </Clipboard>
      </TooltipHost>
    );
  }
}
