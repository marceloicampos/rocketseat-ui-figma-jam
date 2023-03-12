import ReactFlow, { Background, Connection, ConnectionMode, Controls, Handle, Node, addEdge, useEdgesState, useNodesState } from 'reactflow';
import * as Toolbar from '@radix-ui/react-toolbar'
import 'reactflow/dist/style.css';
import { zinc } from 'tailwindcss/colors'
import { Square } from './components/nodes/Square';
import { DefaultEdge } from './components/edges/DefaultEdge';
import { useCallback, useState } from 'react';

// Entidades do reactflow
// NODES - nós ou os quadrados
// Edges - conexões de nós ou as linhas entre os nós

const NODE_TYPES = {
  square: Square,
}

const EDGE_TYPES = {
  default: DefaultEdge,
}

const INITIAL_NODES = [] satisfies Node[]


export function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES)
  const [changeColor, setChangeColor] = useState('#8B5CF6')
  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, [])

  function addSquareNode() {
    setNodes(nodes => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: 'square',
        position: {
          x: 500,
          y: 100,
        },
        style: { backgroundColor: `${changeColor}` },
        data: {},
      },
    ])
  }

  const handleClick = () => {
    const randomColors = '#' + Math.random().toString(16).slice(2, 8)
    setChangeColor(randomColors)
  }

  return (
    <div className='w-screen h-screen'>
      <ReactFlow
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{
          type: 'default',
        }}
      >
        <Background
          gap={12}
          size={2}
          color={zinc[200]}
        />
        <Controls />
      </ReactFlow>
      <Toolbar.Root
        className='fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border-zinc-300 px-8 h-20 w-96 overflow-hidden'>
        <Toolbar.Button
          style={{ backgroundColor: `${changeColor}` }}
          onClick={() => { addSquareNode(); handleClick(); }}
          className='w-16 h-16 mt-6 rounded transition-transform hover:-translate-y-2' >
          NOVA CAIXA
        </Toolbar.Button>
      </Toolbar.Root>
    </div >
  )
}
