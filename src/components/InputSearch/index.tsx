/** @jsxImportSource @emotion/react */
import { FC } from 'react';

import { IInputSearch } from '../../../types';

export const InputSearch: FC<IInputSearch> = ({
  onChange,
}) => {
  return (
    <div className={'position-relative'}>
      <input className={'ddd'} onChange={onChange} placeholder="Type Product Name Here..." />
    </div>
  );
};

export default InputSearch;