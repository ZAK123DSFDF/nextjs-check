import { getServerData } from "../actions/onServe";
import ClientComponent from "../components/check";
export const dynamic = "force-dynamic";
export default async function Home() {
  const data = await getServerData();
  console.log(data);
  return (
    <div>
      <ClientComponent data={data} />
    </div>
  );
}
