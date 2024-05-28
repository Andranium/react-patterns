import { FC } from "react";
import "./style.scss";

import { UserProps } from "./types";
import { CardInfo } from "./parts/cardInfo";

export const MemberCard: FC<UserProps> = ({ name, ...rest }) => {
  return (
    <div className="member-card">
      <p className="title">{name}</p>
      <CardInfo {...rest} />
    </div>
  );
};
