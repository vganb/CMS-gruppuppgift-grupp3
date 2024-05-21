'use client'
import React from 'react'
import EditEventForm from '../_components/editEventForm'

function EventDetailPage() {
  return (
    <div className="flex flex-col items-center mt-8">
    <h1>Redigera Event</h1>
    <EditEventForm></EditEventForm>
    
  </div>
  )
}

export default EventDetailPage