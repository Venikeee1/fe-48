import { Loader } from '../Loader/Loader';
import { NewsCard } from '../NewsCard/NewsCard';

export const NewsList = ({ articles, isLoading, error }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <>There was an error</>;
  }

  return (
    <div>
      {articles.map(({ title, description, url }) => (
        <NewsCard key={url} title={title} description={description} url={url} />
      ))}
    </div>
  );
};
