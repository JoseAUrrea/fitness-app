'use client'
import {Amplify} from 'aws-amplify';
import config from '@/amplifyconfiguration.json';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from '@/aws-exports';
Amplify.configure(config, { ...awsExports,
    ssr: true 
  });
const Auth = ({children} : {children: React.ReactNode}) => {
    return (
        <Authenticator.Provider>
            {children}
        </Authenticator.Provider>
    )
}

export default Auth;