/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const Iconiconfonthome0: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M508.591 132.261l-454.829 475.677v24.778h112.862l0.109 300.491h284.446l-0.109-177.042h113.626v177.042h286.301v-298.962l112.425 0.436v-27.396l-171.039-173.221-0.436-265.781h-112.534l-0.655 147.244z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconiconfonthome0.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconiconfonthome0) : Iconiconfonthome0;
