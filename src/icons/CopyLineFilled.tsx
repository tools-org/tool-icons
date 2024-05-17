import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import { CopyLineFilled } from '../defines';

const CopyLineFilledIcon = (
  props: React.JSX.IntrinsicAttributes & IconProps,
) => {
  return <IconBase {...props} icon={CopyLineFilled} />;
};

export default CopyLineFilledIcon;
