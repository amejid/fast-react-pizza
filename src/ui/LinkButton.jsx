import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const LinkButton = ({ children, to }) => {
  const className = 'text-sm text-blue-500 hover:text-blue-900 hover:underline';
  const navigate = useNavigate();
  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

LinkButton.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
};

export default LinkButton;
