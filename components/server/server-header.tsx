"use client";

import { ServerWithMembersWithProfile } from "@/types";
import { MemberRole } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut, PlusCircle, Settings, Trash, User, UserCog, UserPlus } from "lucide-react";
import { useModel } from "@/hooks/use-model-store";

interface ServerHeaderprops {
  server: ServerWithMembersWithProfile;
  role?: MemberRole;
}

export const ServerHeader = ({ server, role }: ServerHeaderprops) => {
  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;

  const { onOpen} = useModel();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none " asChild>
        <button
          className="w-full text-md font-semibold px-3 flex
         items-center h-12 border-neutral-200 dark:border-neutral-800
          border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition "
        >
          {server.name}
          <ChevronDown className="h-5 w-5 ml-auto" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 text-xs font-medium text-black
     dark:text-neutral-400 space-y-[2px]"
      >
        {isModerator && (
          <DropdownMenuItem
           onClick={()=> onOpen("invite", {server})}
            className="text-indigo-600 dark:text-indigo-400 
             hover:bg-[#3C45A5] hover:text-white dark:hover:bg-[#3C45A5] dark:hover:text-white 
             px-3 py-2 text-sm cursor-pointer "
          >
            Invite People
            <UserPlus className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem
          onClick={()=> onOpen("editServer", {server})}
            className="
             px-3 py-2 text-sm cursor-pointer hover:bg-[#3C45A5] hover:text-white dark:hover:bg-[#3C45A5] dark:hover:text-white  "
          >
            Server Settings
            <Settings className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem
          onClick={()=> onOpen("members", {server})}

            className="
             px-3 py-2 text-sm cursor-pointer hover:bg-[#3C45A5] hover:text-white dark:hover:bg-[#3C45A5] dark:hover:text-white  "
          >
            Manage Users
            <UserCog className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {isModerator && (
          
          <DropdownMenuItem
           onClick={() => onOpen("createChannel",{server})}
            className="
             px-3 py-2 text-sm cursor-pointer hover:bg-[#3C45A5] hover:text-white dark:hover:bg-[#3C45A5] dark:hover:text-white  "
          >
            Create Channel
            <PlusCircle className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {isModerator && (
          <DropdownMenuSeparator/>
        )}
        {isAdmin && (
          <DropdownMenuItem
          onClick={()=> onOpen("deleteServer", {server}) }

            className="
             text-rose-500 px-3 py-2 text-sm cursor-pointer  hover:bg-rose-800 hover:text-white dark:hover:bg-rose-800 dark:hover:text-white  "
          >
            Delete Server
            <Trash className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {!isAdmin && (
          <DropdownMenuItem
          onClick={()=> onOpen("leaveServer", {server}) }
            className="
             text-rose-500 px-3 py-2 text-sm cursor-pointer  hover:bg-rose-800 hover:text-white dark:hover:bg-rose-800 dark:hover:text-white  "
          >
            Leave Server
            <LogOut className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
