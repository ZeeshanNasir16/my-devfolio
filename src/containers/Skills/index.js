import { Section } from 'components/common/Section';
import React from 'react';
import {
  SkillItem,
  SkillList,
  ExperienceSect,
  ExpItem,
  Wrapper,
} from './styles';
import { skillSet, experience } from 'portfolio';
import { Icon } from '@iconify/react';
import { Container } from 'components/common/Container';

const Skills = () => {
  return (
    <>
      <Section id='Skills'>
        <Container>
          <div className='sectionHead'>
            <h2>Skills & Experience</h2>
          </div>

          <Wrapper>
            <SkillList>
              {skillSet.map((el) => (
                <SkillItem
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  key={el.skillName}
                >
                  <div className='app__flex'>
                    <Icon
                      icon={el.fontAwesomeClassname}
                      data-inline='false'
                      color='#007fff'
                    />
                  </div>
                  <span>{el.skillName}</span>
                </SkillItem>
              ))}
            </SkillList>
            <ExperienceSect>
              {experience.map((el, i) => (
                <ExpItem
                  key={el.company}
                  whileInView={{ x: [100, 0], opacity: [0, 1] }}
                  translation={{ duration: 0.5 }}
                >
                  <h5>{el.date}</h5>
                  <div>
                    <h5 className='role'>{el.role}</h5>
                    <span>{el.company}</span>

                    <ul key={`${el.company}-${i}`}>
                      {el?.descBullets?.map((desc, i) => (
                        <li key={`desc${i}`}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </ExpItem>
              ))}
            </ExperienceSect>
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};

export default Skills;
