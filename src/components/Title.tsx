import * as React from 'react';

// Libs
import { StyleSheet, css } from 'aphrodite';

type Props = {
  children: React.ReactNode;
  invert?: boolean;
};

const styles = ({ invert }: Pick<Props, 'invert'>) => ({
  root: {
    '@media screen and (max-width: 414px)': {
      marginBottom: 10,
      marginTop: 20,
    },
    color: invert ? 'white' : 'black',
    fontWeight: 600,
    marginBottom: 20,
    marginTop: 40,
  } as const,
});

const Title: React.FC<Props> = ({
  children,
  invert = false,
}: Props): JSX.Element => {
  const cx = StyleSheet.create(styles({ invert }));

  return <h2 className={css(cx.root)}>{children}</h2>;
};

export default Title;
