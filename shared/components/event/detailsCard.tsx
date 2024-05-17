import React from "react";

function DetailsCard(props: any) {
  return (

  <button className="self-center mt-5 text-xs text-center underline"
          onClick={() => {
            window.open(props.link, '_blank');
          }}>
    Подробности мероприятия
  </button>
);
}

export default DetailsCard;