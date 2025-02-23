import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Community = {
  _id: number;
  title: string;
  description: string;
};

const fetchCommunity = async (id: string): Promise<Community> => {
  const response = await fetch(`/api/communities/${id}`);
  const data = await response.json();
  return data;
};

const Community: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [community, setCommunity] = useState<Community | null>(null);

  useEffect(() => {
    if (id) {
      fetchCommunity(id as string).then((community) => setCommunity(community));
    }
  }, [id]);

  if (!community) {
    return <p>loading...</p>;
  }


  return (
    <div>
      <h1>{community.title}</h1>
      <p>{community.description}</p>
    </div>
  );
}

export default Community;
