import { getServerSession } from "next-auth";
import Layout from "../../../components/layout";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export default async function Import() {
 



  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    // Redirect to login or show unauthorized message

    redirect("/");
  }
  
  return (
    <Layout>
      <h1>Import</h1>
   
    </Layout>
  );
}
