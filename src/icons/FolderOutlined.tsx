import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import FolderOutlined from '../defines/asn/FolderOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={FolderOutlined} />;
}
