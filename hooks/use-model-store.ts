import { Channel, ChannelType, Server } from "@prisma/client";
import { create } from "zustand";

export type ModalType = "createServer" | "invite" |  "editServer" |
 "members" | "createChannel" | "leaveServer" | "deleteServer" | "deleteChannel" |
  "editChannel" | "messageFile" | "deleteMessage" ;

interface modalData {
  server?: Server;
  channelType?: ChannelType;
  channel?: Channel;
  apiUrl?: string;
  query?: Record<string, any>;
}

interface ModelaStore {
  type: ModalType | null;
  data: modalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: modalData) => void;
  onClose: () => void;
}

export const useModel = create<ModelaStore>((set) => ({
  type: null,
  isOpen: false,
  data: {},
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
