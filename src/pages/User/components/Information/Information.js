import { memo } from 'react';
import PropTypes from 'prop-types';
import { Title, Description } from './Information.styles';

export const Information = ({ title, description, fontSize }) => {
  if (!description) {
    return null;
  }

  return (
    <>
      <Title fontSize={fontSize}>{title}</Title>
      <Description fontSize={fontSize}>{description}</Description>
    </>
  );
};

Information.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.string,
};

Information.defaultProps = {
  fontSize: 'normal',
  title: '',
  description: '',
};

export default memo(Information);
