import { Documents } from '../../components/Documents';
import { Information } from '../../components/Information';
import { News } from '../../components/News';
import { QuestAnsw } from '../../components/QuestAnsw';
import { RegistryTable } from '../../components/RegistryTable';

export const Home = () => {
  return (
    <>
      <Information />
      <RegistryTable />
      <News />
      <Documents />
      <QuestAnsw />
    </>
  );
};
