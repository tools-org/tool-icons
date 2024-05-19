import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import PackageDownloadOutlined from '../defines/asn/PackageDownloadOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={PackageDownloadOutlined} />;
}
