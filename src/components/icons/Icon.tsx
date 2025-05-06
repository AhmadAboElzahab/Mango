import * as Icons from '.';

export type IconName = keyof typeof Icons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const SvgIcon = Icons[name];
  if (!SvgIcon) return null;
  return <SvgIcon {...props} />;
};
