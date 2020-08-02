import { Color, Tone } from 'components/ui/tokens/theme/types';

export interface CardProps {
  backgroundColor?: Color;
  backgroundTone?: Tone;
  children: JSX.Element | JSX.Element[];
}
