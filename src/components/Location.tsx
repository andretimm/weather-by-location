import { StyledLocation } from "../styles/StyledLocation";

export default function Location(currentPlace: any) {
  return (
    <StyledLocation>
      <h1> {currentPlace?.place?.name} </h1>
      <h1>
        {currentPlace?.place?.state}, {currentPlace?.place?.country}
      </h1>
    </StyledLocation>
  );
}
