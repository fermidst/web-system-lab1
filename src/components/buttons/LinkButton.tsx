import React, { type FC } from 'react';

const LinkButton: FC<{ path?: string; name?: string }> = ({ path, name }) => (
  <a className="btn btn-primary m-2" href={path}>
    {name}
  </a>
);

export default LinkButton;
