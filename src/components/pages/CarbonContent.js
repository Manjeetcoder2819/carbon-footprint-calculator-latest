import "@/styles/ResultsPage.css";
import { generateCarbonImpact } from "@/lib/content";

export default function CarbonImpact() {
  const result = generateCarbonImpact(); // Uses default 4.31g CO₂ per visitor for 10,000 visitors

  return (
    <div className="inner-real-impact">
      <h3 className="section-title">Real-World Environmental Impact (Per 10,000 Visitors)</h3>
       
      <div class="impact-card-list">
      <div className="content-section garbage-waste">
        <h4>🗑️ Waste Generation</h4>
        <p>
          This CO₂ is equivalent to producing <strong>{result.garbageBags}</strong> large bags of household waste.
        </p>
      </div>

      <div className="content-section boiling-water">
        <h4>🌡️ Boiling Water</h4>
        <p>
          This CO₂ could boil <strong>{result.teaCupsBoiled}</strong> cups of tea yearly.
        </p>
        <p>
          That’s around <strong>{result.totalTeaML} mL</strong> or <strong>{result.totalTeaLiters} liters</strong> of hot water.
        </p>
      </div>

      <div className="content-section energy-usage">
        <h4>⚡ Electricity Generated</h4>
        <p>
          This energy could generate <strong>{result.electricityGenerated} kWh</strong> of electricity.
        </p>
      </div>

      <div className="content-section tree-absorption">
        <h4>🌳 Tree Absorption</h4>
        <p>
          It would take <strong>{result.treesRequired}</strong> trees to absorb this CO₂ per year.
        </p>
      </div>

      <div className="content-section ev-charging">
        <h4>🚗 EV Charging</h4>
        <p>
          This is equivalent to <strong>{result.evChargingEquivalent} kWh</strong> of EV charging.
        </p>
      </div>

      <div className="content-section oven-usage">
        <h4>🔥 Electric Oven Usage</h4>
        <p>
          This energy could power an electric oven for <strong>{result.ovenUsageHours} hours</strong>.
        </p>
      </div>
      </div>
      
    </div>
  );
}
