import type { About } from 'shared';

import { Loading } from 'ui-components';

import useFeaturedAbout from '../hooks/useFeaturedAbout';

export default function About() {
  const { featuredAbout, loading } = useFeaturedAbout();

  if (loading) return <Loading />;

  if (!featuredAbout) return <div>등록된 머시가가 없음</div>;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1>About Me.</h1>
      </div>
      <div>
        <h2>{featuredAbout.title}</h2>
      </div>
      <div>
        <p>{featuredAbout.content}</p>
      </div>
    </div>
  );
}
