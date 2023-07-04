import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { columns, data } from './makeData';

const Example = () => {
  const table = useMantineReactTable({
    columns,
    data,
    mantinePaginationProps: {
      showRowsPerPage: false,
      variant: 'mantine',
    },
  });

  return <MantineReactTable table={table} />;
};

export default Example;
