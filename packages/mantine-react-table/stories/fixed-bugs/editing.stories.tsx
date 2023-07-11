import { type Meta } from '@storybook/react';
import { MantineReactTable, type MRT_ColumnDef } from '../../src';
import { faker } from '@faker-js/faker';
import { Menu } from '@mantine/core';

const meta: Meta = {
  title: 'Fixed Bugs/Editing',
};

export default meta;

type Person = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
};

const columns: MRT_ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'state',
    header: 'State',
  },
];

const data = [...Array(6)].map(() => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
}));

export const TableEditModeAndRowActions = () => {
  return (
    <MantineReactTable
      columns={columns}
      data={data}
      editDisplayMode="table"
      enableEditing
      enableRowActions
      renderRowActionMenuItems={() => (
        <>
          <Menu.Item onClick={() => console.info('Delete')}>Delete</Menu.Item>
        </>
      )}
    />
  );
};
