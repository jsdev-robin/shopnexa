import React from "react";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { DatabaseBackup } from "lucide-react";
import Typography from "./typography";

const TableEmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-4">
      <DatabaseBackup className="size-36 stroke-muted-foreground mb-4" />
      <div className="mx-auto md:w-96">
        <Heading as="h6" className="mb-2">
          Your data will appear here soon.
        </Heading>
        <Typography variant="body2" className="text-muted-foreground mb-8">
          In the meantime, you can create new custom insights to monitor your
          most dplju metrics.
        </Typography>
        <div>
          <Button variant="outline">Learn more</Button>
        </div>
      </div>
    </div>
  );
};

export default TableEmptyState;
