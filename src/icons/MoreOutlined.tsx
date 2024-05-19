import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import MoreOutlined from '../defines/asn/MoreOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={MoreOutlined} />;
}
