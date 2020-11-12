import { useEffect, useState } from 'react';
import { Title } from '../styles/pages/Home';

interface Recommended {
  id: number;
  title: string;
  price: number;
  category_id: string;
  slug: string;
}

export default function Home() {

  const [recommendProducts, setRecommendProducts] = useState<Recommended[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/recommended').then(response => {
      response.json().then(data => {
        setRecommendProducts(data);        
      })
    })
  }, [])

  return (
    <div>
      <Title>Hello Rocket seat</Title>
      <p>Let's see how this works</p>

      <section>
        <Title>Products Recommended</Title>
        <ul>
          {recommendProducts.map(product => {
            return (
              <li key={product.id}>{product.title}</li>
            );
          })}
        </ul>
      </section>
    </div>   
  )
}
