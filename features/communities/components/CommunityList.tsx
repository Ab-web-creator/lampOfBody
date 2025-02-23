'use client';
import Link from "next/link";
import { useEffect, useState } from 'react';

type Community = {
  _id: number;
  title: string;
  description: string;
};

const fetchCommunities = async (): Promise<Community[]> => {
  const response = await fetch('/api/communities');
  const data = await response.json();
  return data;
};

const CommunityList: React.FC = () => {
  const [communities, setCommunities] = useState<Community[]>([]);

  useEffect(() => {
    fetchCommunities().then((communities) => setCommunities(communities));
  }, []);

  return (
    <ul>
      <p>All communities</p>
      {communities.map((community) => (
        <li key={community._id}>
          <Link href={`/communities/${community._id}`}>
            <>
              <h3>{community.title}</h3>
              <p>{community.description}</p>
            </>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CommunityList;