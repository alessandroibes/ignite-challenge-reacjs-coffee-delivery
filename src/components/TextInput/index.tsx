import {
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
} from 'react';

import { Box, Container } from './styles';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
  containerProps?: HTMLAttributes<HTMLDivElement>;
};

export const TextInput = forwardRef(function TextInput(
  { optional, containerProps, onFocus, onBlur, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <Box {...containerProps}>
      <Container>
        <input type="text" ref={ref} {...rest} />

        {optional ? <span>Opcional</span> : null}
      </Container>
    </Box>
  );
});
