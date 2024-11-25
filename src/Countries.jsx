import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/kingdom")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleCountrySelect = (e) => {
    const value = e.target.value;

    // Handle navigation based on selection
    if (value === "") {
      navigate("/countries"); // Navigate to /countries page
    } else {
      const selected = countries.find((country) => country.cca2 === value);
      if (selected) {
        setSelectedCountry(selected);
        navigate(`/countries/${selected.cca2}`, { state: { data: selected } });
      }
    }
  };

  return (
    <div style={styles.container}>
      <select
        onChange={handleCountrySelect}
        value={selectedCountry?.cca2 || ""}
        style={styles.select}
      >
        {/* Default option to navigate to /countries */}
        <option value="">Select a country</option>
        {/* Dynamically populate dropdown with country data */}
        {countries.map((country) => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>
      <Outlet />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2rem",
    color: "#6a0dad",
    marginBottom: "20px",
  },
  select: {
    width: "100%", // Make the dropdown take up full width of its container
    maxWidth: "400px", // Limit the maximum width for responsiveness
    padding: "10px", // Add padding for better usability
    fontSize: "1rem", // Adjust font size
    borderRadius: "8px", // Add rounded corners
    border: "1px solid #ccc", // Subtle border
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional shadow for better appearance
  },
};
