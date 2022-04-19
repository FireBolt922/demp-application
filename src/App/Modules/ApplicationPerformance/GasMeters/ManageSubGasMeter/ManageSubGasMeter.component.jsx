import React from 'react';
import useRouter from 'react-hooks/router';
import DefaultSubGasMeter from './DefaultSubMasMeter';

function ManageSubGasMeter() {
  const router = useRouter();
  const { applicationType, meterId } = router.query;
  return (
    <div>
      {applicationType === '1' ? (
        <DefaultSubGasMeter meterId={meterId} />
      ) : null}
    </div>
  );
}

export default ManageSubGasMeter;
