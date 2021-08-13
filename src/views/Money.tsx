import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type  Category = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    category: '-' as Category,
    note: '',
    amount: 0
  });

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };

  return (
    <MyLayout>
      <TagsSection value={selected.tags}
                   onChange={(tags) => onChange({tags})}
      />
      <NotesSection value={selected.note}
                    onChange={(note) => onChange({note})}
      />
      <CategorySection value={selected.category}
                       onChange={(category) => onChange({category})}
      />
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => onChange({amount})}
      />
    </MyLayout>
  );
}

export default Money;