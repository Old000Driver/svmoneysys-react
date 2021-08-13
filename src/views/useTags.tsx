import {useState} from 'react';
import {createId} from '../lib/createId';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([
    {name: '衣', id: createId()},
    {name: '食', id: createId()},
    {name: '住', id: createId()},
    {name: '行', id: createId()}
    ]);
  return {tags: tags, setTagsIds: setTags};
};

export {useTags};