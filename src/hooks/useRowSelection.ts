import { useState, useCallback, useMemo } from "react";

interface UseRowSelectionParams {
  totalRows: number; // Total number of rows to manage selection for
  initialSelected?: Set<number>; // Optional initial set of selected row indices
  maxSelectable?: number; // Optional max number of rows that can be selected at once
}

const useRowSelection = ({
  totalRows,
  initialSelected = new Set<number>(),
  maxSelectable = Infinity,
}: UseRowSelectionParams) => {
  // State to track the selected rows as a Set of row indices
  const [selectedRows, setSelectedRows] =
    useState<Set<number>>(initialSelected);

  // Function to toggle the selection of a single row
  const toggleRowSelection = useCallback(
    (index: number) => {
      setSelectedRows((prevSelected) => {
        const newSelected = new Set(prevSelected);
        if (newSelected.has(index)) {
          newSelected.delete(index); // Deselect if already selected
        } else {
          if (newSelected.size < maxSelectable) {
            newSelected.add(index); // Select if below max selectable limit
          }
        }
        return newSelected;
      });
    },
    [maxSelectable]
  );

  // Function to select all rows by adding all indices to the selection
  const selectAllRows = useCallback(() => {
    setSelectedRows(
      new Set(Array.from({ length: totalRows }, (_, index) => index)) // Generate all indices from 0 to totalRows-1
    );
  }, [totalRows]);

  // Function to deselect all rows by clearing the selection set
  const deselectAllRows = useCallback(() => {
    setSelectedRows(new Set()); // Clear the selection set
  }, []);

  // Function to check if a particular row is selected
  const isRowSelected = useCallback(
    (index: number) => selectedRows.has(index),
    [selectedRows]
  );

  // Memoized check to see if all rows are selected
  const isAllSelected = useMemo(
    () => selectedRows.size === totalRows,
    [selectedRows, totalRows]
  );

  // Memoized check to see if any row is selected
  const isAnySelected = useMemo(() => selectedRows.size > 0, [selectedRows]);

  // Handle function for selecting or deselecting all rows based on checkbox status
  const handleSelectAllChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        selectAllRows(); // Select all rows when checked
      } else {
        deselectAllRows(); // Deselect all rows when unchecked
      }
    },
    [selectAllRows, deselectAllRows]
  );

  return {
    selectedRows, // Current selected rows
    toggleRowSelection, // Function to toggle a row's selection
    isRowSelected, // Function to check if a row is selected
    isAllSelected, // Memoized check if all rows are selected
    isAnySelected, // Memoized check if any rows are selected
    selectedRowsCount: selectedRows.size, // Count of selected rows
    maxSelectable, // Maximum selectable rows
    handleSelectAllChange, // Handler for selecting or deselecting all rows
  };
};

export default useRowSelection;
