"use client";
import React from 'react';
import styles from './dashboard.module.css'
import CustomCheckBoxText from '../_components/customCheckBox/CustomCheckBoxText';

export default function page() {
  return (
    <div className='flex gap-[1vw]'>
      <div className='w-2/3'>
        <div className={styles.card}>
          <div className={styles.header}>
            <h6>Application Design </h6>
            <span>26 Days Left</span>
          </div>
          <div className={styles.body}>
            <div className={styles.service_phases_part}>
              <h6>Service Phases</h6>
              <div className={styles.service_phases}>
              <CustomCheckBoxText btnSize="sm" inputType="checkbox" >
                    <p>Sales Call</p>
                    <p>Phase 1</p>
                </CustomCheckBoxText>
                <CustomCheckBoxText btnSize="sm" inputType="checkbox" >
                    <p>Sales Call</p>
                    <p>Phase 1</p>
                </CustomCheckBoxText>
                <CustomCheckBoxText btnSize="sm" inputType="checkbox" >
                    <p>Sales Call</p>
                    <p>Phase 1</p>
                </CustomCheckBoxText>
                <CustomCheckBoxText btnSize="sm" inputType="checkbox" >
                    <p>Sales Call</p>
                    <p>Phase 1</p>
                </CustomCheckBoxText>
                <CustomCheckBoxText btnSize="sm" inputType="checkbox" >
                    <p>Sales Call</p>
                    <p>Phase 1</p>
                </CustomCheckBoxText>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/3'>

      </div>
    </div>
  )
}
