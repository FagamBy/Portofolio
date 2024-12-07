import SkillCard from "./ui/tech-deck";
import { Techss } from "@/constants";

export default function Techs() {
    return (
        <div className="grid grid-cols-2 gap-4 min-[900px]:grid-cols-3 lg:grid-cols-4">
            {Techss.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
            ))}
        </div>
    );
}