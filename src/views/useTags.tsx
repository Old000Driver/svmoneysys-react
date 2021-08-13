import {useState} from 'react';
import {createId} from '../lib/createId';

const defaultTags = [
  {name: '衣', id: createId()},
  {name: '食', id: createId()},
  {name: '住', id: createId()},
  {name: '行', id: createId()}
];

const useTags = () => {
  const [tags, setTagsIds] = useState<{ id: number, name: string }[]>
  (defaultTags);
  const findTag = (id: number) => tags.filter(tag => id === tag.id)[0];
  return {tags, setTagsIds, findTag};
};

export {useTags};