const Types = (type: string) => {
  switch (type) {
    case "poison":
      return "#AC6AC8";
    case "grass":
      return "#61B95B";
    case "fire":
      return "#FF9C53";
    case "water":
      return "#4C8FD4";
    case "normal":
      return "#90999E";
    case "electric":
      return "#EDA901";
    case "ice":
      return "#75CFC0";
    case "fighting":
      return "#CD3F69";
    case "ground":
      return "#D97745";
    case "flying":
      return "#90A7DD";
    case "fairy":
      return "#DF8EDF";
    case "ghost":
      return "#5168AC";
    case "steel":
      return "#598EA0";
    case "rock":
      return "#C5B78A";
    case "dragon":
      return "#086BC4";
    case "dark":
      return "#595366";
    case "bug":
      return "#8FC12C";
    case "psychic":
      return "#DC3065";
    default:
      return "#FFFFFF";
  }
};

export default Types;
