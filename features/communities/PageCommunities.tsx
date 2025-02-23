import { authenticateUser } from "../../lib/auth";
import CommunityList from "./components/CommunityList";
import Search from '../../components/search/Search'
import CardForCommunities from "./components/CardForCommunities";
 

export  const  PageCommunities = async () => {
  const { userId } = await authenticateUser();

  return (
    <section className="px-4 space-y-5 pb-10">
      <div className="flex gap-4 justify-between">
      <h3 className="text-gray-700 oswald-regular">
              Communities of love
            </h3>
      <div className="w-1/3"><Search  /></div>
      </div>

      {userId ? (
        <div>
           
           <div className="pb-5 flex gap-10 overflow-x-auto overflow-y-hidden">
          <CardForCommunities cardIndex={2} />
          <CardForCommunities cardIndex={1} />
          <CardForCommunities cardIndex={0} />
          <CardForCommunities cardIndex={1} />
          </div>

          <div className="my-2 px-2 rounded-sm bg-gray-100 flex justify-between">
            <p className="cursor-pointer">&#x25C0;</p>
            <p className="text-gray-400">scroll buttons</p>
            <p className="cursor-pointer">&#x25B6;</p>
          </div>
        

        <p>Welcome to your personalized Communities, user {userId}!</p>

        </div>
      ) : (
        <p>You’re browsing as a guest. Sign in to track your progress!</p>
      )}
       <CommunityList />
    </section>
  );
}
