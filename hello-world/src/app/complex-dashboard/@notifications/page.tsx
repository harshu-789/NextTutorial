import { Card } from "@/components/cards";
import Link from "next/link";

export default function Notifications(){
    return (
        <Card>
            <div>Notifications Component</div>
        <div>
            <Link href="/complex-dashboard/archived">Archived</Link>
        </div>
        </Card>
    ) 
}