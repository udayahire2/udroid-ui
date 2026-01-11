"use client";

import { useState } from "react";
import { Switch } from "@/components/switch";
import { Label } from "@/components/label";
import { Plane, Bluetooth, Bell, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SwitchPreviewVariants() {
    const [airplaneMode, setAirplaneMode] = useState(false);
    const [bluetooth, setBluetooth] = useState(true);
    const [notifications, setNotifications] = useState(false);

    const getRowClasses = (isActive: boolean) => {
        return cn(
            "flex items-center justify-between p-4 rounded-xl border transition-all duration-300 group",
            isActive
                ? "border-primary/10 bg-primary/5 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] dark:bg-white/5 dark:border-white/10"
                : "border-transparent hover:bg-muted/30"
        );
    };

    return (
        <div className="flex flex-col gap-2 w-full max-w-md">
            <div className={getRowClasses(airplaneMode)}>
                <div className="flex items-center gap-3">
                    <Plane className={cn("size-4 transition-colors", airplaneMode ? "text-primary" : "text-muted-foreground/60 group-hover:text-foreground/80")} />
                    <Label htmlFor="airplane-mode" className={cn("font-medium text-sm cursor-pointer transition-colors", airplaneMode ? "text-primary" : "text-foreground/90")}>Airplane Mode</Label>
                </div>
                <Switch id="airplane-mode" checked={airplaneMode} onCheckedChange={setAirplaneMode} />
            </div>

            <div className={getRowClasses(bluetooth)}>
                <div className="flex items-center gap-3">
                    <Bluetooth className={cn("size-4 transition-colors", bluetooth ? "text-blue-500" : "text-muted-foreground/60 group-hover:text-foreground/80")} />
                    <Label htmlFor="bluetooth" className="font-medium text-sm cursor-pointer text-foreground/90">Bluetooth</Label>
                </div>
                <Switch id="bluetooth" checked={bluetooth} onCheckedChange={setBluetooth} />
            </div>

            <div className={getRowClasses(notifications)}>
                <div className="flex items-center gap-3">
                    <Bell className={cn("size-4 transition-colors", notifications ? "text-amber-500" : "text-muted-foreground/60 group-hover:text-foreground/80")} />
                    <Label htmlFor="notifications" className="font-medium text-sm cursor-pointer text-foreground/90">Notifications</Label>
                </div>
                <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl border border-transparent opacity-40 cursor-not-allowed select-none grayscale">
                <div className="flex items-center gap-3">
                    <Shield className="size-4 text-muted-foreground/80" />
                    <div className="flex flex-col">
                        <Label htmlFor="disabled-setting" className="font-medium text-sm text-muted-foreground">Secure Boot</Label>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground/80">Locked by Admin</span>
                    </div>
                </div>
                <Switch id="disabled-setting" disabled checked />
            </div>
        </div>
    );
}
