/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconiconfonthome0 from './Iconiconfonthome0';
import Iconshouye from './Iconshouye';
import IconnamecardFill from './IconnamecardFill';

export type IconNames = 'iconiconfonthome0' | 'iconshouye' | 'iconnamecard-fill';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconiconfonthome0':
      return <Iconiconfonthome0 key="1" {...rest} />;
    case 'iconshouye':
      return <Iconshouye key="2" {...rest} />;
    case 'iconnamecard-fill':
      return <IconnamecardFill key="3" {...rest} />;
  }

  return null;
};

export default React.memo ? React.memo(IconFont) : IconFont;
