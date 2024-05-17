import upperFirst from 'lodash.upperfirst';
import { pipe } from 'ramda';
import type {
  CSSProperties,
  MouseEventHandler,
  MutableRefObject,
  ReactNode,
} from 'react';
import React from 'react';

import { ThemeTypeUpperCase } from '../../scripts/templates/types';
import type { AbstractNode, IconDefinition } from '../defines/types';

export interface IdentifierMeta {
  name: string;
  themeSuffix?: ThemeTypeUpperCase;
}

export interface GetIdentifierType {
  (meta: IdentifierMeta): string;
}

function camelCase(input: string) {
  return input.replace(/-(.)/g, (match, g) => g.toUpperCase());
}

export const getIdentifier: GetIdentifierType = pipe(
  ({ name, themeSuffix }: IdentifierMeta) =>
    name + (themeSuffix ? `-${themeSuffix}` : ''),
  camelCase,
  upperFirst,
);

export function isIconDefinition(target: any): target is IconDefinition {
  return (
    typeof target === 'object' &&
    typeof target.name === 'string' &&
    typeof target.theme === 'string' &&
    (typeof target.icon === 'object' || typeof target.icon === 'function')
  );
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
