import { useState, useEffect, useCallback } from "react";
import { WiDayHaze } from "react-icons/wi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";

function App() {
  let [appointmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setAppointmentList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App container font-thin mx-auto mt-3">
      <h1 className="text-5xl mb-3">
        <WiDayHaze className="inline-block text-yellow-500 align-top" />
        My Appointments
      </h1>
      <AddAppointment />
      <Search
      // query={query}
      // onQueryChange={(myQuery) => setQuery(myQuery)}
      // orderBy={orderBy}
      />

      <ul className="divide-y divide-gray-400">
        {appointmentList.map((appointment) => (
          <AppointmentInfo key={appointment.id} appointment={appointment} />
        ))}
      </ul>
    </div>
  );
}

export default App;
