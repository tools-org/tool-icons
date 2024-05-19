import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import UrlOutlined from '../defines/asn/UrlOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={UrlOutlined} />;
}
