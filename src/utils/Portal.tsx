/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import ReactDOM from 'react-dom';

export interface Props {
  children: any;
}

export const Portal: React.FC<Props> = ({ children }) => {
  const el = document.getElementById('portal');
  if (!el) {
    return null;
  }

  return ReactDOM.createPortal(
    children,
    el
  );
}
