"use client"
import DashboardHero from '@/components/DashboardHero'
import HistoryModal from '@/components/HistoryModal'
import Navbar from '@/components/Navbar'
import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { database } from '@/lib/firebaseConfig';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  function openHistory(){
    setIsHistoryVisible(true);
  }

  function closeHistory(){
    setIsHistoryVisible(false);
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [datas, setDatas] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const datasRef = ref(database, 'data');

    // Subscribe to real-time updates
    const unsubscribe = onValue(datasRef, (snapshot) => {
      if (snapshot.exists()) {
        const datasArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id,
          ...data,
        }));
        setDatas(datasArray);
      } else {
        console.log('No data available');
      }
    }, (error) => {
      console.error(error);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className='max-w-screen bg-white'>
        <Navbar />
        <DashboardHero openHistory={openHistory} datas={datas}/>
        {isHistoryVisible &&
         <HistoryModal closeHistory={closeHistory} datas={datas}/>
        }
    </main>
  )
}

export default page