import { createPortal } from 'react-dom';
import { TailSpin } from 'react-loader-spinner';
import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

const loaderRoot = document.querySelector('#loader-root');

function Loader() {
  return createPortal(
    <div className={s.loader}>
      <TailSpin color="#00BFFF" height={80} width={80} />
    </div>,
    loaderRoot
  );
}
export default Loader;
