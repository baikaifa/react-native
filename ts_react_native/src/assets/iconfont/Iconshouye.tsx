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

const Iconshouye: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M563.197497 0 460.802503 0 0.012259 486.388227c0 0 0.901006 102.396016 51.200051 102.396016s76.797012 0 76.797012 0 0 232.496449 0 332.816677c0 100.300818 102.397038 102.399081 102.397038 102.399081l204.79714 0c0 0 0-272.419617 0-358.416702 0-25.647017 25.600026-25.600026 25.600026-25.600026l102.394994 0c0 0 25.601047 0.851972 25.601047 25.600026 0 92.198911 0 358.416702 0 358.416702s99.647027 0 204.795097 0c105.147048 0 102.398059-102.399081 102.398059-102.399081L895.992721 563.185239c0 0 27.19875 0 76.799055 0 49.59724 0 51.195965-76.79599 51.195965-76.79599L563.197497 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshouye.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconshouye) : Iconshouye;
