"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useModel } from "@/hooks/use-model-store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, CheckCheck, Copy, RefreshCw } from "lucide-react";
import { UseOrign } from "@/hooks/use-origin";
import { ActionTooltip } from "../action-tooltip";
import { useState } from "react";
import axios from "axios";

export const InviteModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModel();
  const origin = UseOrign();
  const { server } = data;
  const [copied, setCopied] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const inviteUrl = `${origin}/invite/${server?.inviteCode}`;
  const isModalOpen = isOpen && type === "invite";

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const onNew = async () => {
    try {
      setLoading(true);
      const response = await axios.patch(
        `/api/servers/${server?.id}/invite-code`
      );

      onOpen("invite", { server: response.data });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className=" bg-white text-black p-0 overflow-hidden">
          <DialogHeader className=" pt-8 px-6">
            <DialogTitle className=" text-2xl text-center font-bold">
              Invite Friends
            </DialogTitle>
          </DialogHeader>
          <div className="p-6">
            <Label className=" uppercase font-bold text-xs text-zinc-500 dark:text-secondary/70">
              Server invite link
            </Label>
            <div className=" flex items-center mt-2 gap-x-2">
              <Input
               readOnly={true}
                disabled={isLoading}
                className="bg-zinc-300/50 border-0 *:focus-visible:ring-0 text-black
               focus-visible:ring-offset-0"
                value={inviteUrl}
              />
              <ActionTooltip
                align="center"
                side="top"
                label={copied ? "copied" : "copy"}
              >
                <Button disabled={isLoading} onClick={onCopy} size="icon">
                  {copied ? (
                    <CheckCheck className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </ActionTooltip>
            </div>
            <Button
            onClick={onNew}
            disabled={isLoading}
              variant="link"
              size="sm"
              className="text-xs text-zinc-500 mt-4"
            >
              Generate Link
              <RefreshCw className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
