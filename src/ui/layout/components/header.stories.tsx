import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import Logo from '../../../pages/dashboard/user/logo.svg';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa6';
import * as consts from '../consts';
import { LayoutComponents } from '..';
import * as S from '../styles';


const Component = {
  Component: {
    Header: () => (
      <S.Header>
        <S.Logo height={50} width={50} alt="Hangman" src={Logo.src} />
        <S.Navigation>
          <S.NavigationButton type="checkbox" hidden />
          <FaBars />
          <S.NavigationInner className="navigation_inner">
            {consts.menuItems.map(LayoutComponents.MenuItem)}
            <LayoutComponents.MenuItem onClick={() => alert('Logoff')}>Exit</LayoutComponents.MenuItem>
          </S.NavigationInner>
        </S.Navigation>
      </S.Header>
    )
  }
}

export const Default: StoryObj<typeof Component.Component.Header> = {
}

const meta: Meta<typeof Component.Component.Header> = {
  component: Component.Component.Header
}

export default meta;
