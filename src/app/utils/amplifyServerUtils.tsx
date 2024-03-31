import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import config from '@/amplifyconfiguration.json';
import { cookies } from 'next/headers';
import { getCurrentUser } from 'aws-amplify/auth/server';
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';

export const cookieBasedClient = generateServerClientUsingCookies({
  config: config,
  cookies,
  authMode: "userPool"
});

export const { runWithAmplifyServerContext } = createServerRunner({
  config
});

export const isAuthenticated = async () => 
  await runWithAmplifyServerContext({
    nextServerContext : {cookies},
    async operation(contextSpec){
      try{
        const user = await getCurrentUser(contextSpec);
        return !! user;
      } catch(error){
        return false
      }
    }
  })

  export const getUser = async () =>
  await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    async operation(contextSpec) {
      try {
        const user = await getCurrentUser(contextSpec);
        return user;
      } catch (error) {
        return null;
      }
    }
  });
