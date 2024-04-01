// import Pagination from '@/app/ui/invoices/pagination';
// import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
// import { lusitana } from '@/app/ui/fonts';
// import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { fetchFilteredCustomers } from '@/app/lib/data';
// import { Suspense } from 'react';
import { Metadata } from 'next'; 

export const metadata: Metadata = {
  title: 'Customers'
}

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  // const currentPage = Number(searchParams?.page) || 1;
  // const totalPages = await fetchCustomersPages(query);
  // const totalPages = 1;
  const customers = await fetchFilteredCustomers(query);

  return (
    <>
      <Table customers={customers} />
    </>
  );
}
