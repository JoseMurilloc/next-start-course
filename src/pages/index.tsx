import { Title } from '../styles/pages/Home';
import { GetServerSideProps } from 'next';

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
    </div>   
  )
}

export const getServerSideProps: GetServerSideProps<HomeProduct> = async () => {
  const response = await fetch('http://localhost:3333/recommended');

  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }
}