import { BiTrash } from "react-icons/bi";


const AppointmentInfo = ({ appointment, onDeleteAppointment }) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <button
        type="button"
        onClick={() => {
          onDeleteAppointment(appointment._id);
        }}
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <BiTrash />
      </button>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">
            {appointment.name}
          </span>
          <span className="flex-grow text-right">{appointment.apt_date}</span>
        </div>
        <div>
          <b className="font-bold text-blue-500">Age:</b>{" "}
          {appointment.age}
        </div>
        <div>
          <b className="font-bold text-blue-500">Hypertension:</b>{" "}
          {appointment.hypertension}
        </div>
        <div>
          <b className="font-bold text-blue-500">Diabetes:</b>{" "}
          {appointment.diabetes}
        </div>
        <div>
          <b className="font-bold text-blue-500">No Show prediction:</b>{" "}
          <i>{appointment.probability}</i>
        </div>
        
      </div>
    </li>
  );
};

export default AppointmentInfo;