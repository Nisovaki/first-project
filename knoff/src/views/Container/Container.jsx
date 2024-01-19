/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-confusing-arrow */
import s from "./Container.module.scss";
export const Container = (props) => 
  props.className ? (
    <div className={`${s.container} ${props.className}`}>{props.children}</div>
  ) : (
    <div className={s.container}>{props.children}</div>
  )

