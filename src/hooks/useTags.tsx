import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {name: '衣', id: createId()},
        {name: '食', id: createId()},
        {name: '住', id: createId()},
        {name: '行', id: createId()}
      ];
    }
    setTags(localTags);
  }, []); // 组件挂在时执行
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);
  const findTag = (id: number) => tags.filter(tag => id === tag.id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (id === tags[i].id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, {name}: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name: name} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  const addTag = () => {
    const tagName = window.prompt('新标签名为');

    if (tagName !== null) {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };

  const getName = (id: number) => {
    const tag = tags.filter(t => t.id === id)[0];
    return tag ? tag.name : '';
  };

  return {tags, setTags, getName, addTag, findTag, updateTag, findTagIndex, deleteTag};
};

export {useTags};