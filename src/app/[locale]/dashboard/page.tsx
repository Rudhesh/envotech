import Layout from "../../../components/layout";
import { getServerSession } from "next-auth";
import { getTranslations } from "next-intl/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { setFilteredData } from "@/features/data/filterDataSlice";
import Graph from "@/components/panel/Graph";
import { redirect } from "next/navigation";
import Dashboards from "./dashboard";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  const t = await getTranslations("IndexPage");

  if (!session || !session.user) {
    // Redirect to login or show unauthorized message

    redirect("/");
  }

  return (
    <Layout>
      <section className="py-4 w-full">
        <h1 className="text-2x1 font-bold my-2">{t("title")}</h1>
        {/* <p>{t("title")}</p>
        {t.rich('description', {
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          )
        })} */}

        <Dashboards />
      </section>
    </Layout>
  );
}
