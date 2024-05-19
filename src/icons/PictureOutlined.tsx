import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import PictureOutlined from '../defines/asn/PictureOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={PictureOutlined} />;
}
