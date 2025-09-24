import type { About } from 'shared';
import useFeaturedAbout from '../hooks/useFeaturedAbout';

export default function About() {
  const { featuredAbout, loading } = useFeaturedAbout();

  if (loading) return <div>아직.. 로딩 중</div>;

  if (!featuredAbout) return <div>등록된 머시가가 없음</div>;

  return (
    <div>
      <h1>
        <span>타이틀</span>
        <span>{featuredAbout.title}</span>
      </h1>
      <div>
        <span>본문</span>
        <span>{featuredAbout.content}</span>
      </div>
    </div>
  );
}
