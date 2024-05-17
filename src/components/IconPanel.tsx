import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import * as AllIcons from '..';
import './IconPanel.css';

const IconPanel = () => {
  const onCopy = (text: string, result: boolean) => {
    if (result) {
      console.log(text);
    } else {
      console.error('Copy icon name failed, please try again.');
    }
  };

  return (
    <div>
      <ul className="anticons-list">
        {Object.keys(AllIcons).map((name: string) => (
          <CopyToClipboard key={name} text={`<${name} />`} onCopy={onCopy}>
            <li>
              {React.createElement(AllIcons[name as keyof typeof AllIcons])}
              <span className="anticon-class">{name}</span>
            </li>
          </CopyToClipboard>
        ))}
      </ul>
    </div>
  );
};

export default IconPanel;
