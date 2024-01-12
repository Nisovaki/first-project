/* eslint-disable prettier/prettier */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
import s from "./Container.module.scss";

export const Container = (props) =>
  props.className ? (
    <div className="{`${s.container} ${props.className}`}">
      {props.children}
    </div>
  ) : (
    <div className="{s.container}">{props.children}</div>
);