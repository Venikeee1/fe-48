import { Button } from '../../UI/Button/Button';
import * as SC from './NewsCard.style';

export const NewsCard = ({ title, description, url }) => {
  return (
    <SC.NewsCard>
      <SC.Title>{title}</SC.Title>
      <SC.Description>{description}</SC.Description>
      <Button as="a" href={url} target="_blank">
        View article
      </Button>
    </SC.NewsCard>
  );
};
