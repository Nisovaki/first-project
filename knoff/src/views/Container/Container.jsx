/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import s from "./Container.module.scss";

export const Container = (props) => (
  <div className="{s.container}">{props.children}</div>
);
