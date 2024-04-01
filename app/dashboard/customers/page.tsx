import Pagination from '@/app/ui/invoices/pagination';
// import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
// import { lusitana } from '@/app/ui/fonts';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { Suspense } from 'react';
import { fetchCustomersPages } from '@/app/lib/data';
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
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCustomersPages(query);
  const customers = await fetchFilteredCustomers(query, currentPage);

  return (
    <>
      <Suspense key={query + currentPage} fallback={<CustomersTableSkeleton />}>
        <Table customers={customers} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
