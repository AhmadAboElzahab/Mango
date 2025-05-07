// import { createFileRoute } from '@tanstack/react-router';

// import TabsBar from 'components/UI/TabsBar';
// import Toolbar from 'components/UI/Toolbar';
// import { queryClient } from 'core/services/clients/queryClient';
// import { tabsQueryOptions, useTabs } from 'core/services/product.service';
// import { useState } from 'react';
// import { useReactTable, getCoreRowModel, flexRender, ColumnDef } from '@tanstack/react-table';
// import DataContainer from 'containers/Main/DataContainer';
// export const Route = createFileRoute('/_data/maids/')({
//   component: RouteComponent,
//   // loader: () => queryClient.ensureQueryData(tabsQueryOptions),
// });
// // function RouteComponent() {
// //   const { data, isLoading, error } = useTabs();
// //   const [tableData, setTableData] = useState<any>(data.data ?? []);

// //   if (isLoading) return <div>Loading...</div>;
// //   if (error) return <div>Error!</div>;
// //   const columns: ColumnDef<any>[] = [
// //     {
// //       header: 'first_name',
// //       accessorKey: 'first_name',
// //       cell: ({ row, getValue }) => {
// //         const initialValue = getValue() as string;
// //         const [value, setValue] = useState(initialValue);

// //         const onBlur = () => {
// //           const updated = [...tableData];
// //           updated[row.index].first_name = value;
// //           setTableData(updated);
// //         };

// //         return <input value={value} onChange={(e) => setValue(e.target.value)} onBlur={onBlur} />;
// //       },
// //     },
// //     {
// //       header: 'email',
// //       accessorKey: 'email',
// //       cell: ({ row, getValue }) => {
// //         const initialValue = getValue() as number;
// //         const [value, setValue] = useState(initialValue);

// //         const onBlur = () => {
// //           const updated = [...tableData];
// //           updated[row.index].email = Number(value);
// //           setTableData(updated);
// //         };

// //         return (
// //           <input value={value} onChange={(e) => setValue(Number(e.target.value))} onBlur={onBlur} />
// //         );
// //       },
// //     },
// //     {
// //       header: 'nationality',
// //       accessorKey: 'nationality',
// //       cell: ({ row, getValue }) => {
// //         const initialValue = getValue() as number;
// //         const [value, setValue] = useState(initialValue);

// //         const onBlur = () => {
// //           const updated = [...tableData];
// //           updated[row.index].nationality = Number(value);
// //           setTableData(updated);
// //         };

// //         return (
// //           <input
// //             value={value.Name}
// //             onChange={(e) => setValue(Number(e.target.value))}
// //             onBlur={onBlur}
// //           />
// //         );
// //       },
// //     },
// //     {
// //       header: 'date',
// //       accessorKey: 'created_at',
// //       cell: ({ row, getValue }) => {
// //         const initialValue = getValue() as number;
// //         const [value, setValue] = useState(initialValue);

// //         const onBlur = () => {
// //           const updated = [...tableData];
// //           updated[row.index].created_at = Number(value);
// //           setTableData(updated);
// //         };

// //         return (
// //           <input
// //             type='date'
// //             value={value}
// //             onChange={(e) => setValue(Number(e.target.value))}
// //             onBlur={onBlur}
// //           />
// //         );
// //       },
// //     },
// //   ];

// //   const table = useReactTable({
// //     data: tableData,
// //     columns,
// //     getCoreRowModel: getCoreRowModel(),
// //   });

// //   return (
// //     <div
// //       style={{
// //         height: '100%', // optional, as parent has already defined it
// //         display: 'flex',
// //         flexDirection: 'column',
// //       }}
// //     >
// //       <TabsBar />
// //       <Toolbar />
// //       <div
// //         style={{
// //           backgroundColor: '#FBFBFB',
// //           flex: 1, // fills the remaining space
// //         }}
// //       >
// //         <table>
// //           <thead>
// //             {table.getHeaderGroups().map((headerGroup) => (
// //               <tr key={headerGroup.id}>
// //                 {headerGroup.headers.map((header) => (
// //                   <th key={header.id}>
// //                     {flexRender(header.column.columnDef.header, header.getContext())}
// //                   </th>
// //                 ))}
// //               </tr>
// //             ))}
// //           </thead>
// //           <tbody>
// //             {table.getRowModel().rows.map((row) => (
// //               <tr key={row.id}>
// //                 {row.getVisibleCells().map((cell) => (
// //                   <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
// //                 ))}
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }
// function RouteComponent() {
//   return <DataContainer model='maids' />;
// }

// routes/_data/maids/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import DataContainer from 'containers/Main/DataContainer';
import { queryClient } from 'core/services/clients/queryClient';
import { fetchTabs, useTabs } from 'core/services/tabs.service';

export const Route = createFileRoute('/_data/maids/')({
  loader: () =>
    queryClient.ensureQueryData({
      queryKey: ['tabs', 'Patient'],
      queryFn: () => fetchTabs('Patient'),
    }),
  component: RouteComponent,

  // component: () => <DataContainer model='patients' />,
});
function RouteComponent() {
  const { data, isLoading, error } = useTabs('Patient');

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading tabs</div>;

  return <DataContainer model='patients' tabsData={data} />;
}
