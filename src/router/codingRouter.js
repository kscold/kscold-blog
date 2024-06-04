import { Suspense } from 'react';
import Life from '../page/life';
import Loading from '../components/Loading';

const condingRouter = [
  {
    path: 'react',
    element: (
      <Suspense fallback={<Loading />}>
        <Life />
      </Suspense>
    ),
  },
];

export default condingRouter;
