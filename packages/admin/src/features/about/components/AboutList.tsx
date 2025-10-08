import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import { useAbout } from '../hooks';

import { IoIosSettings } from 'react-icons/io';

import { Loading } from 'ui-components';

import { BtnAdd } from '../../../ui/buttons';
import { Badge } from '../../../ui/common';
import { ENDPOINTS } from 'shared';

const { ABOUT } = ENDPOINTS;

const AboutItem = styled(motion.div)<{
  isFeatured: boolean;
  active: boolean;
}>`
  border: ${(props) => props.theme.colors.textMuted} 1px solid;
  background: ${(props) =>
    props.isFeatured && props.active
      ? props.theme.colors.card
      : props.theme.colors.background};
  box-shadow: 0 6px 5px rgba(0, 0, 0, 0.08);

  &:hover {
    background: ${(props) => props.theme.colors.card};
  }
`;

const FeaturedSettingBtn = styled(motion.button)<{ active: boolean }>`
  color: ${(props) =>
    props.active ? props.theme.colors.text : props.theme.colors.textMuted};
  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;

const FeaturedSettingText = styled(motion.span)<{ active: boolean }>`
  color: ${(props) =>
    props.active ? props.theme.colors.text : props.theme.colors.textSecondary};
`;

export default function AboutList() {
  const {
    allAbout,
    loading,
    editingFeature,
    handleAboutClick,
    handleSettingBtn,
    editFeaturedAbout,
  } = useAbout();

  const [hoveredId, setHoveredId] = useState<null | string>();

  if (loading) return <Loading />;

  if (!allAbout)
    return <div>데이터가 없나 ㅋ? 서버 에러인가 ㅋ 어케 핸들링하지 ㅋ</div>;

  return (
    <div className="flex flex-col flex-4/5 min-h-10/12  w-4/5 items-center ">
      <div className="flex flex-col gap-2 m-6 w-full h-full flex-1 overflow-hidden py-6 px-10">
        {/* Featured 설정 */}
        <div
          className="flex gap-3 items-center  w-fit cursor-pointer"
          onClick={handleSettingBtn}
        >
          <FeaturedSettingBtn
            className={`text-3xl ease-in-out`}
            initial={{ rotate: 0, scale: 1 }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.7 }}
            whileTap={{ scale: 0.6 }}
            active={editingFeature}
          >
            <IoIosSettings className="cursor-pointer" />
          </FeaturedSettingBtn>

          <AnimatePresence>
            <FeaturedSettingText
              className="text-sm"
              key="panel" // 중요! key가 있어야 재등장 시 새로 렌더로 인식함
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              active={editingFeature}
            >
              Setting Featured About
            </FeaturedSettingText>
          </AnimatePresence>
        </div>

        {/* AboutList */}
        {allAbout.map((about, idx) => (
          <AboutItem
            key={about.id}
            className={`grid grid-cols-7 gap-x-2 rounded items-center  cursor-pointer w-full transition delay-150 duration-300 ease-in-out  ${
              !editingFeature && 'hover:scale-105'
            } hover:shadow `}
            onClick={() => {
              if (editingFeature) {
                if (!confirm('메인 어바웃으로 등록하시것습니까?')) return;
                editFeaturedAbout(about.id);
              } else {
                handleAboutClick(about.id);
              }
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', delay: idx * 0.1, duration: 0.3 }}
            active={editingFeature}
            isFeatured={about.isFeatured}
            onHoverStart={() => {
              if (!editingFeature) return;
              setHoveredId(about.id);
            }}
            onHoverEnd={() => {
              if (!editingFeature) return;

              setHoveredId(null);
            }}
          >
            {/* Featured 상태 */}

            <div
              className={`flex h-full items-center justify-center col-span-1`}
            >
              <div className="mx-auto ">
                {editingFeature && (
                  <AnimatePresence>
                    <motion.div
                      className="w-full h-full"
                      key="panel" // 중요! key가 있어야 재등장 시 새로 렌더로 인식함
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: -0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Badge
                        border={about.id !== hoveredId && !about.isFeatured}
                        label={
                          about.isFeatured
                            ? 'Featured About'
                            : hoveredId === about.id
                            ? 'Select'
                            : 'About'
                        }
                        className={'text-xs'}
                        active={editingFeature}
                      />
                    </motion.div>
                  </AnimatePresence>
                )}

                {!editingFeature && about.isFeatured && (
                  <Badge
                    border={!about.isFeatured}
                    label={'Featured About'}
                    className={'text-xs'}
                    active={editingFeature}
                  />
                )}
              </div>
            </div>

            {/* About 타이틀/ 콘텐트 상태 */}

            <div className="col-span-2"> {about.title}</div>
            <div className="col-span-3"> {about.content}</div>
            <div className="col-span-1">
              <p> {about.updatedAt || about.createdAt}</p>
            </div>
          </AboutItem>
        ))}

        {/* 추가버튼 */}
        <div className=" flex w-full h-full justify-center items-center my-2">
          <BtnAdd path={ABOUT} />
        </div>
      </div>
    </div>
  );
}
