import { useCallback } from "react";
import { utils, writeFileXLSX } from "xlsx";

type ExcelExportProps<T> = {
  pres: T[];
  fileName?: string;
};

const useExcelExport = <T>({
  pres,
  fileName = "SheetJSReactAoO.xlsx",
}: ExcelExportProps<T>) => {
  return useCallback(() => {
    const ws = utils.json_to_sheet(pres);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    writeFileXLSX(wb, fileName);
  }, [pres, fileName]);
};

export default useExcelExport;
