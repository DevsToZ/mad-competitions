export interface NavLinkProps {
  to: string;
  label: string;
  hasBorderRight?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

export interface MobileNavLinkProps {
  to: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}
