
import Layout from "../../../components/layout";
import { getTranslations } from "next-intl/server";


export default async function UserAdmin() {

  const t = await getTranslations('User-admin');
 
  return (
    <Layout>
      <div className="p-10 rounded">
   
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2x1 font-bold">{t("title")}</h1>
        </div>
        
      </div>
    </Layout>
  );
}
