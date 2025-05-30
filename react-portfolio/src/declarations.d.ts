declare module "./components/*";
declare module "react-scroll";
declare module "aos";
declare module "react-type-animation";
declare module "react-intersection-observer" {
  export interface InViewProps {
    children: ({
      inView,
      ref,
    }: {
      inView: boolean;
      ref: React.Ref<any>;
    }) => React.ReactNode;
    threshold?: number;
    triggerOnce?: boolean;
  }

  export const InView: React.FC<InViewProps>;
}

// Fix React Icons
declare module "react-icons/fa" {
  import { IconType } from "react-icons";

  export const FaGithub: IconType;
  export const FaLinkedin: IconType;
  export const FaEnvelope: IconType;
  export const FaArrowUp: IconType;
  export const FaArrowDown: IconType;
  export const FaTimes: IconType;
  export const FaBars: IconType;
  export const FaExternalLinkAlt: IconType;
  export const FaHtml5: IconType;
  export const FaCss3Alt: IconType;
  export const FaReact: IconType;
  export const FaNode: IconType;
  export const FaPython: IconType;
  export const FaJava: IconType;
  export const FaGitAlt: IconType;
  export const FaDatabase: IconType;
  export const FaGraduationCap: IconType;
  export const FaLaptopCode: IconType;
  export const FaUserTie: IconType;
  export const FaDumbbell: IconType;
  export const FaBook: IconType;
  export const FaGuitar: IconType;
  export const FaMapMarkerAlt: IconType;
}

declare module "react-icons/si" {
  import { IconType } from "react-icons";

  export const SiTypescript: IconType;
  export const SiJavascript: IconType;
}

declare module "react-icons" {
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }

  export type IconType = (props: IconBaseProps) => JSX.Element;
}
 