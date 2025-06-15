import { getUser } from '@services/database/queries/users/getUser';
import { useEffect, useState } from 'react';

export function useGetUserHook() {
  const [email, setEmail] = useState<string | null>(null);
  const username = email?.split('@')[0];

  useEffect(() => {
    const getUserEffect = async () => {
      const res = await getUser();
      if (res) {
        setEmail(res?.email ?? null);
      }
    };
    getUserEffect();
  }, []);
  return { email, username };
}
