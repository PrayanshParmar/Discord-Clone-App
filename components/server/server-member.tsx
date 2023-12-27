"use client";

import { cn } from "@/lib/utils";
import { Member, MemberRole, Profile, Server } from "@prisma/client";
import { ShieldAlert, ShieldBan, ShieldCheck } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { UserAvatar } from "../user-avatar";
import { ActionTooltip } from "../action-tooltip";

interface ServerMemberProps {
  member: Member & { profile: Profile };
  server: Server;
}

const roleIconMap = {
  [MemberRole.GUEST]: <ShieldBan className="ml-2 h-4 w-4 text-gray-500" />,
  [MemberRole.MODERATOR]: <ShieldCheck className="ml-2 h-4 w-4 text-indigo-500" />,
  [MemberRole.ADMIN]: <ShieldAlert className="ml-2 h-4 w-4 text-rose-500" />,
};
export const ServerMember = ({ member, server }: ServerMemberProps) => {
    const router = useRouter();
    const params = useParams();

    const icon = roleIconMap[member?.role];

    const onClick = () => {
      router.push(`/servers/${server.id}/conversations/${member.id}`)
    }
  return (
    <button
     onClick={onClick}
     className={cn("group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
    params?.memberId === member.id && "bg-zinc-700/20 dark:bg-zinc-700")} >
        <UserAvatar src={member.profile.imageUrl}
         className=" h-6 w-6 md:h-7 md:w-7  " />
         <p className={cn("font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:to-zinc-400 dark:group-hover:text-zinc-300 transition",
         params?.memberId === member.id && "text-primary dark:text-zinc-200 dark:group-hover:text-white")} >{member.profile.name}</p>
         <ActionTooltip label={member.role}>{icon}</ActionTooltip>
        
    </button>
  );
};
