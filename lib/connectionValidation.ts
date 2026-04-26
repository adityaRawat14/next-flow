import { Connection, Edge } from "@xyflow/react";
import { useWorkflowStore } from "@/lib/store";

export function isValidTypedConnection(
  connection: Connection | Edge
): boolean {
  const { nodes } = useWorkflowStore.getState();

  if (!connection.source || !connection.target)
    return false;

  const sourceNode = nodes.find(
    (n) => n.id === connection.source
  );

  const targetNode = nodes.find(
    (n) => n.id === connection.target
  );

  if (!sourceNode || !targetNode)
    return false;

  const targetHandle =
    connection.targetHandle?.replace("input:", "");

  if (!targetHandle) return false;

  const targetInput =
    targetNode.data.definition?.inputs?.find(
      (input:any) => input.id === targetHandle
    );

  if (!targetInput) return false;

  const sourceCategory =
    sourceNode.data.definition?.category;

  if (!sourceCategory) return false;
//@ts-ignore
  return targetInput.accepts.includes(sourceCategory);
}