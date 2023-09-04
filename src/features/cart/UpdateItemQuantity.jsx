import Button from '../../ui/Button.jsx';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice.js';
import PropTypes from 'prop-types';

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="gap-2 text-sm font-medium md:gap-3">
        {currentQuantity}
      </span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.number.isRequired,
  currentQuantity: PropTypes.number.isRequired,
};

export default UpdateItemQuantity;
