import type {
  CSSProperties,
  MouseEventHandler,
  MutableRefObject,
  ReactNode,
} from 'react';
import React from 'react';

import type { AbstractNode } from '../defines/types';

interface RootProps {
  onClick: MouseEventHandler<Element>;
  style: CSSProperties;
  ref: MutableRefObject<any>;
  [props: string]:
    | string
    | number
    | ReactNode
    | MouseEventHandler<Element>
    | CSSProperties
    | MutableRefObject<any>;
}

function camelCase(input: string) {
  return input.replace(/-(.)/g, (match, g) => g.toUpperCase());
}

export function normalizeAttrs(attrs: Attrs = {}): Attrs {
  return Object.keys(attrs).reduce((acc: Attrs, key) => {
    const val = attrs[key];
    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}

export type Attrs = Record<string, string>;

export function generate(
  node: AbstractNode,
  key: string,
  rootProps?: RootProps | false,
): any {
  if (!rootProps) {
    return React.createElement(
      node.tag,
      { key, ...normalizeAttrs(node.attrs) },
      (node.children || []).map((child, index) =>
        generate(child, `${key}-${node.tag}-${index}`),
      ),
    );
  }

  return React.createElement(
    node.tag,
    {
      key,
      ...normalizeAttrs(node.attrs),
      ...rootProps,
    },
    (node.children || []).map((child, index) =>
      generate(child, `${key}-${node.tag}-${index}`),
    ),
  );
}
