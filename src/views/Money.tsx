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

  return (
    <MyLayout>
      {selected.tags.join(',')}
      <hr/>
      {selected.category}
      <hr/>
      {selected.note}
      <hr/>
      {selected.amount}

      <TagsSection value={selected.tags}
                   onChange={(tags) => setSelected({
                     ...selected,
                     tags: tags
                   })}
      />
      <NotesSection value={selected.note}
                    onChange={(note) => setSelected({
                      ...selected,
                      note: note
                    })}
      />
      <CategorySection value={selected.category}
                       onChange={(category) => setSelected({
                         ...selected,
                         category: category
                       })}
      />
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => setSelected({
                          ...selected,
                          amount: amount
                        })}
      />
    </MyLayout>
  );
}

export default Money;