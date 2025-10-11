import { Card } from "@/components/cards";
import Link from "next/link";

export default function ArchivedNotifications(){
    return (
        <Card>
            <div>Archived Notifications Component</div>
        <div>
            <Link href="/complex-dashboard">Back to Default</Link>
        </div>
        </Card>
    ) 
} 