import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import { MarkdownLineFilled } from '../defines';

const MarkdownLineFilledIcon = (
  props: React.JSX.IntrinsicAttributes & IconProps,
) => {
  return <IconBase {...props} icon={MarkdownLineFilled} />;
};

export default MarkdownLineFilledIcon;
