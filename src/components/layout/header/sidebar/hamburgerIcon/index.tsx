import { HamburgerIconProps } from '../../../../../types/index';

import { useSidebar } from '../../../../../hooks/context/sidebar';

import {
  bottomBarVariants,
  middleBarVariants,
  topBarVariants,
} from '../../../../../variants';

import { motion, SVGMotionProps } from 'framer-motion';
import { useTheme } from 'styled-components';
import * as Styled from './styles';

const PathWithMotion = motion.path;
type PathProps = SVGMotionProps<SVGElement>;

const Path = (props: PathProps) => (
  <PathWithMotion fill="transparent" strokeLinecap="round" {...props} />
);

export function HamburgerIcon({ ...framerProps }: HamburgerIconProps) {
  const { isSidebarExpanded, toggleSidebar } = useSidebar();

  const theme = useTheme();
  const transition = { duration: theme.transitions.sm };
  return (
    <Styled.HamburgerIcon onClick={toggleSidebar} {...framerProps}>
      <svg width="40" height="40" viewBox="0 0 20 20" strokeWidth={'2'}>
        <Path
          animate={isSidebarExpanded ? 'open' : 'closed'}
          initial={false}
          variants={topBarVariants}
          transition={transition}
        />
        <Path
          d="M 0 9.5 L 20 9.5"
          stroke="#fff"
          animate={isSidebarExpanded ? 'open' : 'closed'}
          initial={false}
          variants={middleBarVariants}
          transition={transition}
        />
        <Path
          animate={isSidebarExpanded ? 'open' : 'closed'}
          initial={false}
          variants={bottomBarVariants}
          transition={transition}
        />
      </svg>
    </Styled.HamburgerIcon>
  );
}
