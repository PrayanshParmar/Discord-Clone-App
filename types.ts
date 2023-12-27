import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOServer} from "socket.io";
import { Member, Profile, Server } from "@prisma/client"

export type ServerWithMembersWithProfile = Server & {
    members: (Member & {profile: Profile})[];
}

export type NextApiResponseServerIo = NextApiResponse & {
    socket: Socket & {
      server: NetServer & {
        io: SocketIOServer;
      };
    };
  };