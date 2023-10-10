import { useState } from "react";
import styles from "./VehicleSelect.module.css";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

const VehicleSelect = () => {
  const [vehicle, setVehicle] = useState('');

  return (
        <Form className={styles.vehicleSelector}>
        <h3 className={styles.vehicleSelectorHeading}>Select Your Vehicle</h3>
        <select
          className={styles.vehicleSelectorSelect}
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        >
          <option value="0">Select Brand</option>
          <option value="BMW">BMW</option>
          <option value="Toyota">Toyota</option>
          <option value="Mazda">Mazda</option>
          <option value="Nissan">Nissan</option>
          <option value="VolksWagen">VolksWagen</option>
        </select>

        {/* Link to navigate to a product page based on the selected vehicle */}
        <Link className={styles.vehicleSearch} to="/products/rims">
          Shop for vehicle
        </Link>
        </Form>
      
  );
};

export default VehicleSelect;
