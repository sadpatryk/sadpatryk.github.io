import { Button, Container, Group, Text, Avatar } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import classes from './HeroTitle.module.scss';

const TITLES = [
  'Solution Architect',
  'UX Designer',
  'Product Owner',
  'Design System Engineer'
];

export function HeroTitle() {
  const [currentTitle, setCurrentTitle] = useState(TITLES[0]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % TITLES.length;
      setAnimate(true);
      setCurrentTitle(TITLES[index]);
      setTimeout(() => setAnimate(false), 800); // Animation duration
    }, 2200); // Slower slot-machine effect

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.wrapper}>
      <Container size={900} className={classes.inner}>
        <div className={classes.heroFlex}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/60116754?v=4"
            size={160}
            radius={0}
            className={classes.heroAvatar}
            style={{
              width: 160,
              height: 160,
              clipPath:
                'polygon(50% 0%, 59% 12%, 71% 6%, 74% 19%, 85% 15%, 84% 28%, 96% 29%, 90% 40%, 100% 50%, 90% 60%, 96% 71%, 84% 72%, 85% 85%, 74% 81%, 71% 94%, 59% 88%, 50% 100%, 41% 88%, 29% 94%, 26% 81%, 15% 85%, 16% 72%, 4% 71%, 10% 60%, 0% 50%, 10% 40%, 4% 29%, 16% 28%, 15% 15%, 26% 19%, 29% 6%, 41% 12%)',
              borderRadius: 0,
              flexShrink: 0,
            }}
          />
          <div>
            <h1 className={classes.subtitle}>
              <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'pink' }} inherit>
                Patryk Zięba
              </Text>{' '}
              is a{' '}
              <span className={`${classes.slotTitle} ${animate ? classes.slideIn : ''}`}>
                {currentTitle}
              </span>{' '}
              at{' '}
              <Text
                component="a"
                href="https://www.redbeemedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                inherit
                style={{ textDecoration: 'underline' }}
              >
                Red Bee Media
              </Text>
              .
            </h1>
            <Text className={classes.description} color="dimmed">
              They work on a cloud-native media asset management platform, focusing on delightful user experiences and robotic process automation.
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
}