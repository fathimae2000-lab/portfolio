import Link from "next/link";
import { FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/fathimae2000-lab" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/fathima-e-" },
  { icon: <FaGitlab />, path: "https://git.upcode.in/upcode/fathimae" },
];

// Add { containerStyles, iconStyles } inside the parentheses here:
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} target="_blank" className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;