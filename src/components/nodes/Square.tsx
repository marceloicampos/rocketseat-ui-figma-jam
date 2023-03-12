import { NodeResizer } from "@reactflow/node-resizer"
import { NodeProps, Handle, Position } from "reactflow"
import '@reactflow/node-resizer/dist/style.css'
import { useState } from 'react';

export function Square({ selected }: NodeProps) {
  return (
    <div className="rounded w-full h-full min-w-[100px] min-h-[100px] p-3 text-center">
      <p>Arreste</p>
      <p>e Ligue</p>
      <p>as Caixas</p>
      <NodeResizer
        minWidth={100}
        minHeight={100}
        isVisible={selected}
        lineClassName="border-blue-400"
        handleClassName="h-2 w-2 bg-white border-2 rounded border-blue-400"
      />
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        className="-right-5 w-3 h-3 border-2 bg-blue-400/80"
      />
      <Handle
        id="left"
        type="source"
        position={Position.Left}
        className="-left-5 w-3 h-3 border-2 bg-blue-400/80"
      />
      <Handle
        id="top"
        type="source"
        position={Position.Top}
        className="-top-5 w-3 h-3 border-2 bg-blue-400/80"
      />
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        className="-bottom-5 w-3 h-3 border-2 bg-blue-400/80"
      />
    </div>
  )
}
