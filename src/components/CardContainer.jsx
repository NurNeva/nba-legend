import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";

import "./_cardContainer.scss";

const CardContainer = () => {
  return (
    <div className="card-container">
      {data.map((info) => {
        return (
          <PlayerCard
            key={info.name}
            info={info}
            statistics={info.statistics}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
