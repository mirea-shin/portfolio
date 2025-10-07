import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import { useAbout } from '../hooks';

import { IoIosSettings } from 'react-icons/io';

import { Loading } from 'ui-components';

import { BtnAdd } from '../../../ui/buttons';
import { ENDPOINTS } from 'shared';

const { ABOUT } = ENDPOINTS;
// TODO featured 등록

export const AboutItem = styled(motion.div)`
  border: ${(props) => props.theme.colors.textMuted} 1px solid;
  background: ${(props) => props.theme.colors.background};
  box-shadow: 0 6px 5px rgba(0, 0, 0, 0.08);

  &:hover {
    background: ${(props) => props.theme.colors.card};
  }
`;

export const BtnSetting = styled(motion.button)`

color: ${(props) => props.theme.colors.textMuted}
 &:hover {
 color: ${(props) => props.theme.colors.text}
 }
`;

export default function AboutList() {
  const {
    allAbout,
    loading,
    handleAboutClick,
    showSettingBtns,
    handleSettingBtn,
  } = useAbout();

  if (loading) return <Loading />;

  if (!allAbout)
    return <div>데이터가 없나 ㅋ? 서버 에러인가 ㅋ 어케 핸들링하지 ㅋ</div>;

  return (
    <div className="flex flex-col flex-4/5 min-h-10/12  w-4/5 items-center ">
      <div className="flex flex-col gap-2 m-6 w-full h-full flex-1 overflow-hidden py-6 px-10">
        <div className="flex gap-3">
          <BtnSetting
            className={`cursor-pointer text-3xl ease-in-out`}
            onClick={handleSettingBtn}
            initial={{ rotate: 0, scale: 1 }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
            whileTap={{ scale: 0.7 }}
          >
            <IoIosSettings />
          </BtnSetting>
          {showSettingBtns && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 10 }}
                transition={{ ease: 'easeInOut' }}
                exit={{ opacity: 0 }}
              >
                <button className="cursor-pointer">default 설정</button>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
        {allAbout.map((about, idx) => (
          <AboutItem
            key={about.id}
            className="grid grid-cols-7 gap-x-2 rounded items-center  cursor-pointer w-full transition delay-150 duration-300 ease-in-out  hover:scale-105 hover:shadow "
            onClick={() => handleAboutClick(about.id)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', delay: idx * 0.1, duration: 0.3 }}
          >
            <div className="flex justify-center">
              <p>{about.isFeatured ? '🥰' : ''}</p>
            </div>

            <div className=" col-span-2"> {about.title}</div>

            <div className=" col-span-3"> {about.content}</div>
            <div>
              <p> {about.updatedAt || about.createdAt}</p>
            </div>
          </AboutItem>
        ))}
        <div className=" flex w-full h-full justify-center items-center my-2">
          <BtnAdd path={ABOUT} />
        </div>
      </div>
    </div>
  );
}
