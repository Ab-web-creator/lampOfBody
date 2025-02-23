import Card from "@/features/courses/components/CardForCourses";

type Course = {
  id: number;
  name: string;
  description: string;
};

type Props = {
  courses: Course[];
};

const CourseList: React.FC<Props> = ({ courses }) => (

  <section className="pt-3 space-y-5 pb-10">

    <h3 className="text-gray-700 oswald-regular">
        Course list
    </h3>

    <div className="flex gap-5">
      {courses.map((course) => (
        <div key={course.id}>
            <Card cardIndex={1} progress={20} />
        </div>
      ))}
    </div>

  </section>
);

export default CourseList;
