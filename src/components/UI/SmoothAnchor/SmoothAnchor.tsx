import { ReactNode, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  where: string;
  targetId: string;
  children: ReactNode;
  block?: 'start' | 'end' | 'center' | 'nearest';
};

export const SmoothAnchor = ({
  children,
  where,
  targetId,
  block = 'start',
}: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    targetRef.current = document.querySelector(`#${targetId}`);
  }, [targetId]);

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    if (location.pathname !== where) {
      navigate(where);
      setTimeout(() => {
        targetRef.current = document.querySelector(`#${targetId}`);
        if (targetRef.current) {
          targetRef.current.scrollIntoView({ block });
        }
      });
    } else {
      if (targetRef.current) {
        targetRef.current.scrollIntoView({ block, behavior: 'smooth' });
      }
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick}>
      {children}
    </a>
  );
};
