import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import ClientForm from '@/components/ClientForm';
import Card from '@/components/Card';

import { lucia, validateRequest } from '@/modules/auth/lucia';

export default async function Page() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect('/login');
  }
  return (
    <div className="flex justify-center container p-32">
      <div className="flex flex-col">
        <h1>Hi, {user.username}!</h1>
        <p>Your user ID is {user.id}.</p>
        <ClientForm action={logout} initialState={{ error: '' }}>
          <button>Sign out</button>
        </ClientForm>
        <Card title="AI-Driven Emissions Intelligence "
              content="Harness the power of AI for precise emissions calculations and recommendations, optimizing your climate mitigation strategies." 
              image="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM13 19H18V9.15745L12 3.7029L6 9.15745V19H11V13H13V19Z'%3E%3C/path%3E%3C/svg%3E" 
              button={<button></button>}
        ></Card>
      </div>
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
