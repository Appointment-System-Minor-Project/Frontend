import { BiCalendar } from "react-icons/bi";
import { useEffect, useState, useCallback } from "react";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";
import Search from "./components/Search";
import axios from "axios";

function App() {
  let [appointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("");
  let [orderBy, setOrderBy] = useState("asc");


  const fetchData = async() => {
    const config = {
      headers:{
        "content-type":"application/json"
      }
    }
    let data = await axios.get("http://localhost:4000/api/patient/fetchAllPatients");
    console.log(data.data.result);
    let pdata=data.data.result
    pdata=pdata.sort((a,b)=>{
      
        return (a.probability>b.probability)
    })
    console.log("pdata",pdata)
    setAppointmentList(pdata)
  }

  const deleteThisAppointment = async(id) => {
    const config = {
      headers:{
        "content-type":"application/json"
      }
    }
    let data = await axios.delete(`http://localhost:4000/api/patient/${id}`);
    // console.log(data.data.result);
    if(data.result && data.result.status==true) {
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="App container mx-auto mt-3 font-thin">
        <h1 className="text-5xl mb-4">
          <BiCalendar className="inline-block text-red-400 align-top" />
          Easy Appointments
        </h1>
        <AddAppointment
          onSendAppointment={(appointment) => {
            setAppointmentList([...appointmentList, appointment]);
          }}
          lastId={appointmentList.reduce(
            (pre, curr) => (Number(curr.id) > pre ? Number(curr.id) : pre),
            0
          )}
        />
        <Search
          query={query}
          onQueryChange={(event) => {
            setQuery(event.target.value);
          }}
          orderBy={orderBy}
          onOrderByChange={(val) => {
            setOrderBy(val);
          }}
          sortBy={sortBy}
          onSortBYChange={(val) => {
            setSortBy(val);
          }}
        />
        <ul className="divide-y divide-gray-200">
          {appointmentList.map((appointment) => {
            return (
              <AppointmentInfo
                onDeleteAppointment={(appointmentId) => {
                  setAppointmentList(
                    appointmentList.filter(
                      (appointment) => appointmentId !== appointment._id
                    )
                  );
                  deleteThisAppointment(appointment._id)
                }}
                appointment={appointment}
                key={appointment._id}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
