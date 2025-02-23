import { authenticateUser } from "../../lib/auth";
import CourseList from "./components/CourseList";
import Card from "./components/CardForCourses";
import Search from '../../components/search/Search'
 

const dummyCourses = [
  { id: 1, name: "Course 1", description: "Introduction to Math" },
  { id: 2, name: "Course 2", description: "History of Space Exploration" },
  { id: 3, name: "Course 3", description: "Master JavaScript" },
];

export  const  PageCourses = async () => {
  const { userId } = await authenticateUser();

  return (
    <section className="px-4 space-y-5 pb-10">
      <div className="flex gap-4 justify-between">
      <h3 className="text-gray-700 oswald-regular">
              All courses
            </h3>
      <div className="w-1/3"><Search  /></div>
      </div>

      {userId ? (
        // <p className="text-green-600 font-bold" >
        //   Welcome back, <span className="!text-blue-600 font-bold">  {userId}!</span>
        // </p>

        <div>

          <div className="pb-5 flex gap-5 overflow-x-auto overflow-y-hidden">
            <Card cardIndex={0} progress={0}/>  
            <Card cardIndex={1} progress={20} />  
            <Card cardIndex={2} progress={100} /> 
            <Card cardIndex={0} progress={0}/>  
            <Card cardIndex={1} progress={20} />  
            <Card cardIndex={2} progress={100} /> 
          </div>

          <div className="my-2 px-2 rounded-sm bg-gray-100 flex justify-between">
            <p className="cursor-pointer">&#x25C0;</p>
            <p className="text-gray-400">scroll buttons</p>
            <p className="cursor-pointer">&#x25B6;</p>
          </div>
        </div>

      ) : (
        <p>You’re browsing as a guest. Sign in for a personalized experience!</p>
      )}
      <CourseList courses={dummyCourses} />
    </section>
  );
}
