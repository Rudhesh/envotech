"use client"
import Layout from "@/components/layout";
import { signOut } from "next-auth/react";

export default function Dashboard() {
    const handleSignOut = async () => {
        await signOut({ callbackUrl: "/" });
    };

    return (
        <Layout>
            <h1>Node-Graph</h1>
            <div onClick={handleSignOut}>
                <button>logout</button>
            </div>
        </Layout>
    );
}
