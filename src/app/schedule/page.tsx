import ScheduleClient from './ScheduleClient'
import { Suspense } from 'react'

export default function SchedulePage() {
  // Server wrapper: render the client component inside Suspense to satisfy Next's CSR bailout requirements
  return (
    <Suspense fallback={<div />}> 
      <ScheduleClient />
    </Suspense>
  )
}
