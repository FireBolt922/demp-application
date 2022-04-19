import React from 'react';
import useRouter from 'react-hooks/router';
import Transformer from '../HtMeterTypes/Transformer';
/**
 *
 * @returns Component depending on the application type. Currently returning only Transformer type
 */
function ManageHtMeters() {
  const router = useRouter();
  const { applicationType } = router.query;
  /**
   *If there are multiple ht meter type then they will be managed from this component
   * @returns HT Meter according to the application meter Type
   */
  function handleHtMeterType() {
    switch (applicationType) {
      case '4':
        return <Transformer />;
      default:
        return <Transformer />;
    }
  }
  return handleHtMeterType();
}

export default ManageHtMeters;
