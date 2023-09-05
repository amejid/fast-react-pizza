import Button from '../../ui/Button.jsx';
import PropTypes from 'prop-types';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant.js';

const UpdateOrder = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ params }) => {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
};

UpdateOrder.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    orderPrice: PropTypes.number.isRequired,
    priority: PropTypes.bool.isRequired,
    priorityPrice: PropTypes.number.isRequired,
    customer: PropTypes.string.isRequired,
    estimatedDelivery: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        pizzaId: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        unitPrice: PropTypes.number.isRequired,
        totalPrice: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }),
};

export default UpdateOrder;
