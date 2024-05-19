import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import CloseOutlined from '../defines/asn/CloseOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={CloseOutlined} />;
}
