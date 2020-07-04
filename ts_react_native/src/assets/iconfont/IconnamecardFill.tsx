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

const IconnamecardFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 234.666667a64 64 0 0 1 64 64v426.666666a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V298.666667a64 64 0 0 1 64-64h597.333334z m-42.666667 362.666666H256v64h512v-64zM469.333333 341.333333H256v192h213.333333v-192z m298.666667 128H512v64h256v-64z m-362.666667-64v64h-85.333333v-64h85.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconnamecardFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconnamecardFill) : IconnamecardFill;
