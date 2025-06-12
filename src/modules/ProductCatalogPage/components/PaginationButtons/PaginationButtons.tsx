// eslint-disable-next-line max-len
import { PageSelectButton } from 'modules/_shared/components/atoms/PageSelectButton';
import styles from './PaginationButtons.module.scss';
import React from 'react';
import { ArrowButton } from 'modules/_shared/components/atoms/ArrowButton';
import { ArrowDirection } from '@constants/ArrowDirection';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export const PaginationButtons: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getRange = (from: number, to: number) =>
    Array.from({ length: to - from + 1 }, (_, i) => from + i);

  const getPaginationButtons = (
    totalPages: number,
    currentPage: number,
  ): number[] => {
    if (totalPages <= 5) {
      return getRange(1, totalPages);
    }

    const isNearStart = currentPage <= 2;
    const isNearEnd = currentPage >= totalPages - 1;

    if (isNearStart) {
      return getRange(1, 5);
    }

    if (isNearEnd) {
      return getRange(totalPages - 4, totalPages);
    }

    return getRange(currentPage - 2, currentPage + 2);
  };

  const buttons = getPaginationButtons(totalPages, currentPage);

  return (
    <>
      {totalPages > 1 && (
        <div className={styles.catalogPageSwitch}>
          <div className={styles.catalogPageSwitchButtons}>
            <div className={styles.catalogPageSwitchButtonsArrow}>
              <ArrowButton
                direction={ArrowDirection.Left}
                isDisabled={currentPage === 1}
                click={() => onPageChange(currentPage - 1)}
              />
            </div>

            <div className={styles.catalogPageSwitchButtonsPage}>
              {buttons.map(item => (
                <PageSelectButton
                  key={item}
                  isSelected={currentPage === item}
                  click={() => onPageChange(item)}
                >
                  {item}
                </PageSelectButton>
              ))}
            </div>

            <div className={styles.catalogPageSwitchButtonsArrow}>
              <ArrowButton
                direction={ArrowDirection.Right}
                isDisabled={currentPage >= totalPages}
                click={() => onPageChange(currentPage + 1)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
