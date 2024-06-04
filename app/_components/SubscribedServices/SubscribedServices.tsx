"use client";
import React from 'react';
import styles from './subscribedServices.module.css'
import ServiceCard from '../serviceCard/ServiceCard';

export default function SubscribedServices() {
  return (
    <div className='flex h-[60px]'>
      

      <ServiceCard />
    </div>
  )
}
