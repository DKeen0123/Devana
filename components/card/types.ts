import { Color, Tone } from 'components/ui/tokens/theme/types';

export interface CardWrapperProps {
  backgroundColor: Color;
  backgroundTone: Tone;
}

export interface CardProps {
  children: JSX.Element | JSX.Element[];
  backgroundColor?: Color;
  backgroundTone?: Tone;
}
