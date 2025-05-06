import type { SVGProps } from 'react';
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M12.286 7.125V5.229C12.286 2.893 10.288 1 8 1S3.714 2.893 3.714 5.229v1.896h-.857A.866.866 0 0 0 2 8v6.125c0 .483.384.875.857.875h10.286a.867.867 0 0 0 .857-.875V8a.866.866 0 0 0-.857-.875zm-6-1.718c0-.983.847-1.782 1.714-1.782s1.714.8 1.714 1.782v1.718H6.286z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgLock;
