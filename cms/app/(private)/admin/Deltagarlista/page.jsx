'use client'

import DeltagerList from './components/deltagerList';
import {ClientAdminCheck} from '@/app/perms/ClientAdminCheck'

const DeltagarPage = () => {
  ClientAdminCheck()
  return (
    <div>
        <DeltagerList/>
    </div>
  );
};

export default DeltagarPage;






