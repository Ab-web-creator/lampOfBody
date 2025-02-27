import { authenticateUser } from "../../lib/auth";
import Search from '../../components/search/Search'
import AppointmentsTable from "./components/AppointmentsTable";
 

const dummyCourses = [
  { id: 1, name: "Course 1", description: "Introduction to Math" },
  { id: 2, name: "Course 2", description: "History of Space Exploration" },
  { id: 3, name: "Course 3", description: "Master JavaScript" },
];

export  const  PageAppointments = async () => {
  const { userId } = await authenticateUser();

  return (
    <section className="space-y-5 pb-10">

      <AppointmentsTable />

      {userId ? (
        // <p className="text-green-600 font-bold" >
        //   Welcome back, <span className="!text-blue-600 font-bold">  {userId}!</span>
        // </p>

        <div>
          <p className="text-sm ml-4 text-blue-400">(You are logged in as XXXX XXXXXX)</p>
        </div>

      ) : (
        <div className="space-y-5">
       
          <p>You’re browsing as a guest. Sign in for a personalized experience!</p>
        </div>


      )}
      
    </section>
  );
}
