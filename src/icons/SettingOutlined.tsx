import React from 'react';
import IconBase, { IconProps } from '../components/IconBase';
import SettingOutlined from '../defines/asn/SettingOutlined';

export default function (props: React.JSX.IntrinsicAttributes & IconProps) {
  return <IconBase {...props} icon={SettingOutlined} />;
}
