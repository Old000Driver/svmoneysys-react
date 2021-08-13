import {useState} from 'react';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([
    {name: '衣', id: 1},
    {name: '食', id: 2},
    {name: '住', id: 3},
    {name: '行', id: 4}
    ]);
  return {tags: tags, setTagsIds: setTags};
};

export {useTags};