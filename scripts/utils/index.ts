import upperFirst from 'lodash.upperfirst';
import { pipe } from 'ramda';

import { ThemeTypeUpperCase } from '../templates/types';
import type { IconDefinition } from '../../src/defines/types';

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
