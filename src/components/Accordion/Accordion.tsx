import { IAccordion } from '../../models';
import styles from './Accordion.module.scss';
import { ReactComponent as Plus } from '../../assets/svg/plus.svg';
import { useRef, useState } from 'react';
import cn from 'classnames';

export const Accordion = ({ title, content }: IAccordion) => {
  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const toggle: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setIsOpen((prev) => !prev);
    const content = e.currentTarget.nextElementSibling;

    if (contentRef.current && content) {
      if (isOpen) {
        contentRef.current.style.maxHeight = '0px';
      } else {
        contentRef.current.style.maxHeight = content?.scrollHeight + 'px';
      }
    }
  };

  return (
    <div
      className={cn({
        [styles.accordion]: true,
        [styles.open]: isOpen,
      })}
    >
      <div className={styles.title} onClick={toggle}>
        <Plus />
        <h3>{title}</h3>
      </div>
      <div ref={contentRef} className={styles.content}>
        {/* content это супер надежная информация */}
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </div>
    </div>
  );
};
