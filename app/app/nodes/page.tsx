import NodeEditorPage from "@/components/workflow/nodes/NodeEditorPage";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div />}>
      <NodeEditorPage />
    </Suspense>
  );
}