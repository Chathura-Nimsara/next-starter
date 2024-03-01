import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import ClientForm from '@/components/ClientForm';
import ButtonCard from '@/components/ButtonCard';
import NonButtonCard from '@/components/NonButtonCard';

import { lucia, validateRequest } from '@/modules/auth/lucia';


export default async function Page() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect('/login');
  }
  return (
    <div className="flex justify-center container p-32 mx-auto"> 
        <ButtonCard></ButtonCard>
    </div>

  );
}

async function logout() {
  'use server';
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: 'Unauthorized',
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect('/login');
}
