import cn from 'classnames';

export const getNavLinkClass = (
  styles: Record<string, string>,
  { isActive }: { isActive: boolean },
) => cn(styles.navLink, { [styles.isActive]: isActive });

export const getIconLinkClass = (
  styles: Record<string, string>,
  { isActive }: { isActive: boolean },
) => cn(styles.icon, { [styles.isActive]: isActive });
