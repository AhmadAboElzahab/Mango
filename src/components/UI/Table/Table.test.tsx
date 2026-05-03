import { render } from "@testing-library/react";
import { describe, it, vi } from 'vitest';

import Table from "./Table";

describe("Table", () => {
  it("renders the component", () => {
    render(
      <Table
        data={[]}
        formFields={[]}
        activeTabColumns={[]}
        isLoading={false}
        totalCount={0}
        pagination={{ pageIndex: 0, pageSize: 10 }}
        setPagination={vi.fn()}
      />,
    );
    // Add your tests here
  });
});
