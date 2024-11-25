import { useLocation } from "react-router-dom";
import Countries from "./Countries";

export default function Details() {
  const { state } = useLocation();

  if (!state || !state.data) {
    console.log("State is missing or invalid:", state); // Debugging aid
    return <p>No country data available. Please select a country.</p>;
  }

  const { data } = state;
  
  return (
    <div>
      <Countries/>
      <div>
        <h2>{data.name.common}</h2>
        <img
          src={data.flags?.svg || ""}
          alt={`${data.name.common} flag`}
          style={{ width: "200px" }}
        />
        <p><strong>Capital:</strong> {data.capital?.[0] || "N/A"}</p>
        <p><strong>Region:</strong> {data.region || "N/A"}</p>
        <p><strong>Population:</strong> {data.population?.toLocaleString() || "N/A"}</p>
      </div>
    </div>
  );
}