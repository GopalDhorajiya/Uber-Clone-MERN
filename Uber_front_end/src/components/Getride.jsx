import React, { useEffect } from "react";
import { Input } from "./index";

function GetRide(
    {
        ...props
    },ref
) {
  const locations = [
    { name: "16/2, Chokha Bazaar", details: "Kalupur, Ahmedabad, Gujarat" },
    {
      name: "Chokha Bazar",
      details: "Kalupur Market Road, Ahmedabad, GJ 380001",
    },
    {
      name: "Brahmani Trading Co",
      details: "Kalupur Market Road, Ahmedabad, GJ 380016",
    },
    { name: "Sagar Traders", details: "Kalupur Market Road, Ahmedabad" },
  ];
  const [pickupLocation, setPickupLocation] = React.useState("");
  const [filteredLocations, setFilteredLocations] = React.useState([]);
//   const [finalLocation, setfinalLocation] = React.useState({ name: "", details: "" });
  useEffect(() => {
    if (pickupLocation) {
      console.log("Pickup Location:", pickupLocation);
        const filtered = locations.filter((location) =>
            location.name.toLowerCase().includes(pickupLocation.toLowerCase()) || location.details.toLowerCase().includes(pickupLocation.toLowerCase()) 
        );
        setFilteredLocations(filtered);
    }
  }, [pickupLocation]);

  function selectedLoction(target) {
    setPickupLocation(target.name + ", " + target.details);
    props.setfinalLocation({name: target.name, details: target.details});
  }

  return (
    <div class="max-w-sm p-6 bg-white rounded-xl shadow-md space-y-4">
      <Input
        label="Pickup Location"
        type="text"
        placeholder="Enter your pickup location"
        className="w-full"
        value={pickupLocation}
        onChange={(e) => setPickupLocation(e.target.value)}
      />
      <div >
            {filteredLocations.length > 0 ? (
          filteredLocations.map((loc, index) => (
            <div
              key={index}
              className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
              onClick={(e) => selectedLoction({name : loc.name , details: loc.details })}
            >
              <div className="font-medium">{loc.name}</div>
              <div className="text-sm text-gray-500">{loc.details}</div>
            </div>
          ))
        ) : (
            pickupLocation && !filteredLocations && (
              <div className="p-3 text-gray-500">No matching locations found</div>
            )
        )}
      </div>
    </div>
  );
}

export default GetRide;
