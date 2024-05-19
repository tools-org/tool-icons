import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import WebsiteOutlined from '../defines/asn/WebsiteOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={WebsiteOutlined} />;
}
