import { useAbout } from '../hooks';

// TODO featured 등록

export default function AboutList() {
  const { allAbout, loading, handleAboutClick } = useAbout();

  if (loading) return <div>로딩중입니닷</div>;

  if (!allAbout)
    return <div>데이터가 없나 ㅋ? 서버 에러인가 ㅋ 어케 핸들링하지 ㅋ</div>;

  return (
    <div>
      AboutList
      <div>
        {allAbout.map((about) => (
          <div
            key={about.id}
            className="border border-amber-300"
            onClick={() => handleAboutClick(about.id)}
          >
            <div> {about.title}</div>
            <div>
              <div> {about.createdAt}</div>
              <div> {about.updatedAt}</div>
            </div>
            <div> {about.content}</div>
            <div>{about.isFeatured ? '🥰' : ''}</div>
            <div> content는 약간 줄여서 보여주면 되려나..?</div>
          </div>
        ))}
      </div>
    </div>
  );
}
