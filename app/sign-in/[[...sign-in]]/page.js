import { SignIn } from "@clerk/nextjs"
import Image from "next/image"

export default function Page() {
    return (
        <>
            <div>
                <Image
                    src='/uberbanner.jpg'
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="z-0"
                />
                <div className="absolute top-10 right-0">
                    <SignIn />
                </div>
            </div>
        </>
    )
}