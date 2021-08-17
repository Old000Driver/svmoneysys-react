import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useRecords} from '../hooks/useRecords';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type  Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  category: '-' as Category,
  note: '',
  amount: 0
};

function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const {records, addRecord} = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  const submit = () => {
    addRecord(selected);
    alert('保存成功');
    setSelected(defaultFormData);
  };

  return (
    <MyLayout>
      <TagsSection value={selected.tagIds}
                   onChange={(tagIds) => onChange({tagIds})}
      />
      <NotesSection value={selected.note}
                    onChange={(note) => onChange({note})}
      />
      <CategorySection value={selected.category}
                       onChange={(category) => onChange({category})}
      />
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => onChange({amount})}
                        onOK={submit}
      />

    </MyLayout>
  );
}

export default Money;