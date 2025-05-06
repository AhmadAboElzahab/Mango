import type { SVGProps } from 'react';
const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M6.061 3.02a.7.7 0 0 1 0 .988l-.989.988c-.273.273-.147.632 0 .988.35.844 1.112 1.689 2.183 2.76 1.194 1.195 1.915 1.75 2.76 2.184.343.176.715.273.987 0l.99-.987a.7.7 0 0 1 .987 0l1.977 1.978a.7.7 0 0 1 0 .988l-2.052 2.05a.7.7 0 0 1-.9.075s-4.029-1.2-6.932-4.104C2.045 7.9.97 3.993.97 3.993a.7.7 0 0 1 .074-.9l2.053-2.051a.7.7 0 0 1 .988 0z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPhone;
