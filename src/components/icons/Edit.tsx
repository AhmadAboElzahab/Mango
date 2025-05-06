import type { SVGProps } from 'react';
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='m2.065 10.936 6.287-6.287a.504.504 0 0 1 .712 0l2.289 2.287a.506.506 0 0 1-.001.712l-6.287 6.288a1.4 1.4 0 0 1-.852.357h-2.01a.49.49 0 0 1-.494-.496v-2.009c0-.28.16-.655.356-.852M12.42 2.004 14 3.582c.39.39.392 1.03 0 1.421l-.942.94a.5.5 0 0 1-.705-.007L10.064 3.65a.5.5 0 0 1-.007-.704l.94-.941a1 1 0 0 1 1.422 0Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgEdit;
