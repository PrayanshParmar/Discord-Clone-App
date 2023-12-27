"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ActionTooltip } from "../action-tooltip";

interface NavigationItemProps {
  id: string;
  imageUrl: string;
  name: string;
}

export const NavigationItem = ({ id, imageUrl, name }: NavigationItemProps) => {
  const params = useParams();
  const router = useRouter();

  const onClick = () => {
    router.push(`/servers/${id}`);
  }

  
  
  
  return (
    <ActionTooltip align="center" side="right" label={name}>
      <button onClick={onClick} className="group relative flex items-center">
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-1 ",
            params?.serverId !== id && "group-hover:h-5",
            params?.serverId === id ? "h-[36px]" : "h-2"
          )}
        />
        <div
          className={cn(
            "relative group flex mx-3 w-12 h-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
            params?.ServerId === id &&
              "bg-primary/10 text-primary rounded-[16px] "
          )}>
            <Image
            className=" w-[48px]"
            fill
            src={imageUrl}
            alt="Channel"
            
            />
          </div>
      </button>
    </ActionTooltip>
  );
};
