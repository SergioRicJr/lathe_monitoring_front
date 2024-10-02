import { DataTable } from '@/components/ui/DataTable'
import React from 'react'
import { machineColumns } from './columns'
import { mockDataMachine } from './data-table'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { DataTableDemo } from './data-table-demo'

export default function page() {
  return (
    <div className='p-4 mt-4 flex flex-col gap-6'>
      {/* <DataTable 
        columns={machineColumns} 
        data={mockDataMachine}
      /> */}
      <DataTableDemo/>
    </div>
  )
}
