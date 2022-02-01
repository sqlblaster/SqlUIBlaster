import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { BracketsClassKeys } from './styles';

export type BracketsProps = {
  openBracket: boolean;
  bracketsCount: number;
  onChange: (bracketsCount: number, openBracket: boolean) => void;
} & ClassesProp<BracketsClassKeys>;
