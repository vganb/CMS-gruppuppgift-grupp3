import React from 'react'
import { CreateForm } from '../../_components/CreateForm'
import {ServerAdminCheck} from '@/app/perms/ServerAdminCheck'

const CreatePage = () => {
  ServerAdminCheck()
  return (
    <div className='flex justify-center items-center bg-slate-500'>
        <CreateForm/>
    </div>
  )
}

export default CreatePage