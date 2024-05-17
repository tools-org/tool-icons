import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import { FilterLineFilled } from '../defines';

const FilterLineFilledIcon = (
  props: React.JSX.IntrinsicAttributes & IconProps,
) => {
  return <IconBase {...props} icon={FilterLineFilled} />;
};

export default FilterLineFilledIcon;
