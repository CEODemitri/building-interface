import { WiDayHaze } from "react-icons/wi";
import { BiTrash } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import appointmentList from "./data.json";

function App() {
  return (
    <div className="App container font-thin mx-auto mt-3">
      <h1 className="text-5xl mb-3">
        <WiDayHaze className="inline-block text-yellow-500 align-top" />
        My Appointments
      </h1>
      <AddAppointment />
      <Search />

      <ul className="divide-y divide-gray-400">
        {appointmentList.map((appointment) => (
          <li className="px-3 py-3 flex items-start">
            <button
              type="button"
              className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <BiTrash />
            </button>
            <div className="flex-grow">
              <div className="flex items-center">
                <span className="flex-none font-medium text-2xl text-blue-500">
                  {appointment.petName}
                </span>
                <span className="flex-grow text-right">
                  {appointment.aptDate}
                </span>
              </div>
              <div>
                <b className="font-bold text-blue-500">Owner:</b>{" "}
                {appointment.ownerName}
              </div>
              <div className="leading-tight">{appointment.aptNotes}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
