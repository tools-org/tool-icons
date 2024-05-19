import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import ExportOutlined from '../defines/asn/ExportOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={ExportOutlined} />;
}
