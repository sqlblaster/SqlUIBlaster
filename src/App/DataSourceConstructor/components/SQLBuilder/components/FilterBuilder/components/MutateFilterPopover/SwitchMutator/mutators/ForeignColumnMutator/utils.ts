import { ForeignColumnMutatorProps } from './props';

export const getModels = (
  props: Pick<ForeignColumnMutatorProps, 'enums' | 'column'>
): string[] | undefined => {
  const {
    enums,
    column: {
      lastColumn: { foreignModelName, modelName, type }
    }
  } = props;

  return type === 'uuid' && !enums
    ? undefined
    : type === 'uuid' && enums
    ? enums
    : type === 'primary'
    ? [modelName]
    : foreignModelName
    ? [foreignModelName]
    : undefined;
};
