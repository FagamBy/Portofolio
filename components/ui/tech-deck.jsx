import Image from "next/image";

export default function SkillCard({ name, iconUrl }) {
    return (
        <div className="flex flex-wrap items-center gap-2.5 rounded-lg border-2 border-[#d8dee9] bg-[#eceff4] p-2.5 text-secondary-foreground">
            <div className="flex items-center">
                <Image
                    alt="icon"
                    src={iconUrl}
                    width={20}
                    height={20}
                    unoptimized
                />
            </div>
            <div className="flex items-center">
                <span className="text-xs font-medium">{name}</span>
            </div>
        </div>
    );
}