import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Play from './Play';

const PlayIcon = ({ small }) => {
  return (
    <Wrapper small={small}>
      <Play fill="#000000" width={small ? '20px' : '40px'} />
    </Wrapper>
  );
};

PlayIcon.defaultProps = {
  small: false,
};

PlayIcon.propTypes = {
  small: PropTypes.bool,
};

export default PlayIcon;
