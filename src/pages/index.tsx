import { Title } from '../styles/pages/Home';
import { GetServerSideProps } from 'next';
import { useCallback } from 'react';

interface IProduct {
  id: number;
  title: string;
  price: number;
  category_id: string;
  slug: string;
}

interface HomeProduct {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: HomeProduct) {

  const handleSum = useCallback(async () => {
    console.log(process.env.NEXT_PUBLIC_API_URL);
    
    const math = (await import('../lib/match')).default;

    alert(math.sum(1, 3));
  }, [])

  return (
    <div>
      <Title>Hello Rocket seat</Title>
      <p>Let's see how this works</p>

      <section>
        <Title>Products Recommended</Title>
        <ul>
          {recommendedProducts.map(product => {
            return (
              <li key={product.id}>{product.title}</li>
            );
          })}
        </ul>
      </section>

      <button onClick={handleSum}>Sum</button>
    </div>   
  )
}

export const getServerSideProps: GetServerSideProps<HomeProduct> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommended`);

  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }
}