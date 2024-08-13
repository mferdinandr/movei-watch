import React from 'react';
import Text from '../Text';

const HeaderMenu = ({ title }: { title: string }) => {
  return (
    <div>
      <Text title={title} type="main" className="text-center" />
    </div>
  );
};

export default HeaderMenu;
