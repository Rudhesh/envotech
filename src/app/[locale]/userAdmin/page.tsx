
import {  columns } from "./columns";
// import { DataTable } from "@/components/data-table";
// import { getUsers, userData } from "../../../../actions/actions";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';
import Layout from "@/components/layout";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOpt";

export default async function UserAdmin() {

  // const data =  await getUsers();
  const session = await getServerSession(authOptions)
  console.log("role",session?.user)
  // console.log({data})
  if (!session || !session.user || !session.user.role.includes('admin')) {
    // Redirect to login or show unauthorized message
    redirect("/");
  }
  return (
    <Layout>
      <div className="container mx-auto p-8 flex flex-col sm:max-w-[825px]">
   
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2x1 font-bold">admin</h1>
        </div>
        hello
        {/* <DataTable columns={columns} data={data} /> */}
      </div>
    </Layout>
  );
}
