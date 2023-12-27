"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
}

from "@/components/ui/tooltip";
import { Children } from "react";


interface ActionToolTipProps {
        label: string,
        children: React.ReactNode;
        side?: "top" | "right" |"bottom"| "left";
        align?: "start" | "center" | "end";
}

export const ActionTooltip = ({
    label,
    children,
    side,
    align
}: ActionToolTipProps) => {

    return(
        <TooltipProvider>
            <Tooltip delayDuration={50} >
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent side={side} align={align} >
                    <p className=" font-semibold text-sm capitalize" >
                        {label.toLowerCase()}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}