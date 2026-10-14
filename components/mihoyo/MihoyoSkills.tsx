import React from 'react';
import { Language } from '../../App';
import Skills from '../Skills';

interface MihoyoSkillsProps {
  language: Language;
}

const MihoyoSkills: React.FC<MihoyoSkillsProps> = ({ language }) => {
  return <Skills language={language} />;
};

export default MihoyoSkills;
