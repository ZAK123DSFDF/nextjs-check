import ClientComponent from "../components/check";
import { getServerData1 } from "../actions/onServe1";
export const dynamic = "force-dynamic";
export default async function Home() {
  const data = await getServerData1();
  return (
    <div>
      <ClientComponent data={data} />
    </div>
  );
}
