import React, { type FC } from 'react';
import LinkButton from './buttons/LinkButton';

const Links: FC<{
  routes: Array<{ path: string; name: string; element: JSX.Element }>;
}> = ({ routes }) =>
  routes.map((r) => (
    <div key={r.path}>
      <LinkButton name={r.name} path={r.path} />
    </div>
  ));

export default Links;
