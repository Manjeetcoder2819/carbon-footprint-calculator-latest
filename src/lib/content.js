import "@/styles/ResultsPage.css";

// Function to generate dynamic environmental impact data
export const generateDynamicContent = (gramsPerVisit = 0) => {
  // Constants for environmental impact calculations
  const VISITORS = 10000; // Number of visitors used for the impact estimate
  const CO2_PER_CUP_TEA = 21; // Grams of CO₂ required to boil 1 cup of tea
  const CO2_PER_GARBAGE_BAG = 2300; // 1 garbage bag = 2.3kg = 2300g of CO₂
  const CO2_PER_KWH = 475; // 1 kWh of electricity production emits 475g of CO₂
  const CO2_PER_TREE_YEAR = 25000; // 1 tree absorbs 25kg (25,000g) of CO₂ per year
  const EV_KWH_PER_100KM = 15; // Average EV consumption (15 kWh per 100 km)
  const OVEN_POWER_KWH = 2; // An electric oven consumes 2 kWh per hour

  // Ensure the input is a valid number; default to 0 if invalid
  const validGramsPerVisit = parseFloat(gramsPerVisit) || 0;

  // Calculate total CO₂ emissions based on 10,000 visitors
  const totalCO2 = validGramsPerVisit * VISITORS; // Total CO₂ in grams
  const totalCO2Kg = totalCO2 / 1000; // Convert grams to kilograms

  // Environmental Impact Calculations
  const cupsOfTea = totalCO2 / CO2_PER_CUP_TEA; // Cups of tea that can be boiled
  const garbageBags = totalCO2Kg / (CO2_PER_GARBAGE_BAG / 1000); // Number of garbage bags equivalent
  const electricityGenerated = totalCO2Kg / (CO2_PER_KWH / 1000); // Equivalent electricity generated in kWh
  const treesRequired = Math.ceil(totalCO2 / CO2_PER_TREE_YEAR); // Number of trees needed (rounded up)
  const evChargingEquivalent = totalCO2 / CO2_PER_KWH; // Equivalent EV charging in kWh
  const evRangeKm = (evChargingEquivalent / EV_KWH_PER_100KM) * 100; // Distance EV can travel
  const ovenUsageHours = electricityGenerated / OVEN_POWER_KWH; // Equivalent oven usage in hours
  
  return (
    <div className="inner-real-impact">
      <h3 className="section-title">Real-World Environmental Impact (Per 10K Visitors)</h3>
         <div className="impact-card-list">
           {/* Waste Generation Impact */}
      <div className="content-section garbage-waste">
        <h4>🗑️ Waste Generation</h4>
        <p>
          This CO₂ is equivalent to producing <strong>{garbageBags.toFixed(1)}</strong> large bags of household waste.
        </p>
      </div>

      {/* Boiling Water Impact */}
      <div className="content-section boiling-water">
        <h4>🌡️ Boiling Water</h4>
        <p>
          This CO₂ could boil <strong>{Math.round(cupsOfTea).toLocaleString()}</strong> cups of tea.
        </p>
      </div>

      {/* Electricity Consumption Impact */}
      <div className="content-section electricity">
        <h4>⚡ Electricity Generated</h4>
        <p>
          This energy could generate <strong>{electricityGenerated.toFixed(1)} kWh</strong> of electricity.
        </p>
      </div>

      {/* Tree Absorption Impact */}
      <div className="content-section tree-absorption">
        <h4>🌳 Tree Absorption</h4>
        <p>
          It would take <strong>{treesRequired.toLocaleString()}</strong> trees to absorb this CO₂ per year.
        </p>
      </div>

      {/* EV Charging Equivalent */}
      <div className="content-section ev-charging">
        <h4>🚗 EV Charging</h4>
        <p>
          This is equivalent to <strong>{evChargingEquivalent.toFixed(1)} kWh</strong> of EV charging,  
          allowing an EV to drive approximately <strong>{Math.round(evRangeKm).toLocaleString()} km</strong>.
        </p>
      </div>
      {/* Electric Oven Usage */}
      <div className="content-section oven-usage">
        <h4>🔥 Electric Oven Usage</h4>
        <p>
          This energy could power an electric oven for <strong>{ovenUsageHours.toFixed(1)} hours</strong>.
        </p>
      </div>
    </div>
         </div>
     
  );
};

