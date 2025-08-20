"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import * as d3 from "d3"

interface Node {
  id: string
  x: number
  y: number
  radius: number
  type: 'center' | 'category' | 'skill'
  data: any
}

interface UseOrbitSimulationProps {
  nodes: Node[]
  width: number
  height: number
  onTick?: (nodes: Node[]) => void
}

export function useOrbitSimulation({ nodes, width, height, onTick }: UseOrbitSimulationProps) {
  const simulationRef = useRef<d3.Simulation<Node, undefined> | null>(null)
  const [positions, setPositions] = useState<Node[]>(nodes)
  const [isPaused, setIsPaused] = useState(false)

  // Create or update simulation
  useEffect(() => {
    if (!nodes.length) return

    // Stop existing simulation
    if (simulationRef.current) {
      simulationRef.current.stop()
    }

    // Create new simulation
    const simulation = d3.forceSimulation<Node>(nodes)
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("charge", d3.forceManyBody().strength(-30))
      .force("collide", d3.forceCollide<Node>().radius(d => (d.radius || 20) + 8))
      .force("radial", d3.forceRadial(120, width / 2, height / 2).strength(0.3))
      .on("tick", () => {
        setPositions([...nodes])
        onTick?.(nodes)
      })

    simulationRef.current = simulation

    return () => {
      simulation.stop()
    }
  }, [nodes, width, height, onTick])

  // Pause/resume simulation
  const pauseSimulation = useCallback(() => {
    if (simulationRef.current && !isPaused) {
      simulationRef.current.alphaTarget(0)
      setIsPaused(true)
    }
  }, [isPaused])

  const resumeSimulation = useCallback(() => {
    if (simulationRef.current && isPaused) {
      simulationRef.current.alphaTarget(0.3)
      simulationRef.current.alpha(0.3).restart()
      setIsPaused(false)
    }
  }, [isPaused])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (simulationRef.current) {
        simulationRef.current.stop()
      }
    }
  }, [])

  return {
    positions,
    pauseSimulation,
    resumeSimulation,
    isPaused
  }
} 