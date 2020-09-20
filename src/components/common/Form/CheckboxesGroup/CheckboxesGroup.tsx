import React, { useCallback } from 'react';

import { Checkbox } from '../../Form/Checkbox/Checkbox';

import { CategoryType } from '../../../../types/types';

import './CheckboxesGroup.scss';

interface CheckboxesGroupType {
  title: string;
  checkboxesList: Array<CategoryType>;
  onChange(id: string, isActive: boolean): void;
}

const CheckboxesGroup = ({ title, checkboxesList, onChange }: CheckboxesGroupType) => {
  const handleChange = useCallback((id: string, isActive: boolean) => {
    onChange(id, isActive);
  }, []);

  const checkboxes = checkboxesList.map((c: CategoryType) => (
    <li className="CheckboxesGroup__listItem" key={c.id}>
      <Checkbox
        id={c.id}
        name={c.name}
        label={c.name}
        checked={c.isActive}
        onChange={handleChange}
      />
    </li>
  ));

  return (
    <div className="CheckboxesGroup">
      <h3 className="CheckboxesGroup__subtitle">{title}</h3>
      <ul className="CheckboxesGroup__list">{checkboxes}</ul>
    </div>
  );
};

export { CheckboxesGroup };
