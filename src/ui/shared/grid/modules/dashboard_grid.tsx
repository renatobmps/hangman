import { PropsWithChildren, useState, useRef, useEffect } from 'react';
import { GridComponents } from '..';
import * as S from '../styles'
import useWindowResize from '@/hooks/use_window_resize';

const DashboardGrid = ({ children }: PropsWithChildren) => {
  const [useHighlight, setUseHighlight] = useState<boolean>(false);
  const elementReferenced = useRef(null);

  const handleWindowSize = () => {
    if (elementReferenced.current) {
      const gridQuantity = getComputedStyle(elementReferenced.current).getPropertyValue('--grid-quantity') ?? '1';

      setUseHighlight(Number(gridQuantity) > 1);
    }
  };

  useWindowResize({ listener: handleWindowSize })

  useEffect(() => {
    handleWindowSize();
  }, []);

  return (
    <S.DashboardGrid ref={elementReferenced}>
      <GridComponents.Root use_highlight={useHighlight}>{children}</GridComponents.Root>
    </S.DashboardGrid>
  )
}

export default DashboardGrid