import {  useRouter } from 'next/router';
import { useState } from 'react';
import dynamic from 'next/dynamic'

const AddToCardModel = dynamic(
  () => import('../../../components/AddToCardModel'), 
  { loading: () => <p>Loading...</p>, ssr: false }
);

export default function Product() {
  const router = useRouter();
  const [isAddToCardModelVisible, setIsAddToCardModelVisible] = useState(false);

  function handleAddToCard() {
    setIsAddToCardModelVisible(true)
  }

  return (
    <>
      <h1>{router.query.slug}</h1>

      <button onClick={handleAddToCard} >Add to card on click</button>

      { isAddToCardModelVisible && <AddToCardModel /> }

    </>
  );
}
