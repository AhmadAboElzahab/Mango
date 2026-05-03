import { render } from "@testing-library/react";
import { describe, it, vi } from 'vitest';
import { Group } from "./AdvancedFilter.types";

import AdvancedFilter from "./AdvancedFilter";

const emptyGroup: Group = { id: '1', type: 'GROUP', conjunction: 'and', children: [] };

describe("AdvancedFilter", () => {
  it("renders the component", () => {
    render(<AdvancedFilter dataState={[]} value={emptyGroup} handleChange={vi.fn()} />);
    // Add your tests here
  });
});
