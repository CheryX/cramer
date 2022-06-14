import PageSEO from "@/components/SEO";
import Link from "next/link"
import Button from "@/components/base/Button"
import Winogrona from "@/components/Winogrona";
import PI from "@/lib/PI";

export default function TestingLayout() {

    function tellPI() {
        alert('PI jest rowne okolo: '+PI);
    }

    return (
        <div>
            <Button icon="github" onClick={tellPI}>Notatki</Button>
            <Button disabled>Notatki</Button>

            <Winogrona />
        </div>
    )
}