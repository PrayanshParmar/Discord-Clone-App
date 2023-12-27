"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useModel } from "@/hooks/use-model-store";
import { Button } from "@/components/ui/button";
import axios from "axios";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const DeleteServerModal = () => {
  const { isOpen, onClose, type, data } = useModel();
  const router = useRouter();
  const { server } = data;

  const [isLoading, setLoading] = useState(false);
  const isModalOpen = isOpen && type === "deleteServer";

  const onClick =async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/servers/${server?.id}`);
      onClose();
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
      
    }finally{
      setLoading(false)
    }
  }
  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className=" bg-white text-black p-0 overflow-hidden">
          <DialogHeader className=" pt-8 px-6">
            <DialogTitle className=" text-2xl text-center font-bold">
              Delete Server
            </DialogTitle>
            <DialogDescription className=" text-center text-zinc-500">
              Are you sure you want to do this?
              <br/>
              <span className=" font-semibold text-rose-500">
                {server?.name} 
              </span>&nbsp;will be permanently deleted.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className=" bg-gray-100 px-6 py-4">
            <div className=" flex items-center justify-between w-full">
              <Button disabled={isLoading} onClick={onClose} variant="ghost">
                Cancel
              </Button>
              <Button disabled={isLoading} onClick={onClick} variant="destructive">
                Delete
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
